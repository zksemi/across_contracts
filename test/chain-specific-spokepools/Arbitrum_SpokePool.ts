import { mockTreeRoot, amountToReturn, amountHeldByPool } from "../constants";
import { ethers, expect, Contract, FakeContract, SignerWithAddress, createFake, toWei } from "../utils";
import { getContractFactory, seedContract, avmL1ToL2Alias, hre, toBN, toBNWei } from "../utils";
import { hubPoolFixture } from "../fixtures/HubPool.Fixture";
import { constructSingleRelayerRefundTree } from "../MerkleLib.utils";

let hubPool: Contract, arbitrumSpokePool: Contract, timer: Contract, dai: Contract, weth: Contract;
let l2Weth: string, l2Dai: string, crossDomainAliasAddress;

let owner: SignerWithAddress, relayer: SignerWithAddress, rando: SignerWithAddress, crossDomainAlias: SignerWithAddress;
let l2GatewayRouter: FakeContract;

describe("Arbitrum Spoke Pool", function () {
  beforeEach(async function () {
    [owner, relayer, rando] = await ethers.getSigners();
    ({ weth, l2Weth, dai, l2Dai, hubPool, timer } = await hubPoolFixture());

    // Create an alias for the Owner. Impersonate the account. Crate a signer for it and send it ETH.
    crossDomainAliasAddress = avmL1ToL2Alias(owner.address);
    await hre.network.provider.request({ method: "hardhat_impersonateAccount", params: [crossDomainAliasAddress] });
    crossDomainAlias = await ethers.getSigner(crossDomainAliasAddress);
    await owner.sendTransaction({ to: crossDomainAliasAddress, value: toWei("1") });

    l2GatewayRouter = await createFake("L2GatewayRouter");

    arbitrumSpokePool = await (
      await getContractFactory("Arbitrum_SpokePool", { signer: owner })
    ).deploy(l2GatewayRouter.address, owner.address, hubPool.address, l2Weth, timer.address);

    await seedContract(arbitrumSpokePool, relayer, [dai], weth, amountHeldByPool);
    await arbitrumSpokePool.connect(crossDomainAlias).whitelistToken(l2Dai, dai.address);
  });

  it("Only cross domain owner can set L2GatewayRouter", async function () {
    await expect(arbitrumSpokePool.setL2GatewayRouter(rando.address)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).setL2GatewayRouter(rando.address);
    expect(await arbitrumSpokePool.l2GatewayRouter()).to.equal(rando.address);
  });

  it("Only cross domain owner can enable a route", async function () {
    await expect(arbitrumSpokePool.setEnableRoute(l2Dai, 1, true)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).setEnableRoute(l2Dai, 1, true);
    expect(await arbitrumSpokePool.enabledDepositRoutes(l2Dai, 1)).to.equal(true);
  });

  it("Only cross domain owner can whitelist a token pair", async function () {
    await expect(arbitrumSpokePool.whitelistToken(l2Dai, dai.address)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).whitelistToken(l2Dai, dai.address);
    expect(await arbitrumSpokePool.whitelistedTokens(l2Dai)).to.equal(dai.address);
  });

  it("Only cross domain owner can set the cross domain admin", async function () {
    await expect(arbitrumSpokePool.setCrossDomainAdmin(rando.address)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).setCrossDomainAdmin(rando.address);
    expect(await arbitrumSpokePool.crossDomainAdmin()).to.equal(rando.address);
  });

  it("Only cross domain owner can set the hub pool address", async function () {
    await expect(arbitrumSpokePool.setHubPool(rando.address)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).setHubPool(rando.address);
    expect(await arbitrumSpokePool.hubPool()).to.equal(rando.address);
  });

  it("Only cross domain owner can set the quote time buffer", async function () {
    await expect(arbitrumSpokePool.setDepositQuoteTimeBuffer(12345)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).setDepositQuoteTimeBuffer(12345);
    expect(await arbitrumSpokePool.depositQuoteTimeBuffer()).to.equal(12345);
  });

  it("Only cross domain owner can initialize a relayer refund", async function () {
    await expect(arbitrumSpokePool.relayRootBundle(mockTreeRoot, mockTreeRoot)).to.be.reverted;
    await arbitrumSpokePool.connect(crossDomainAlias).relayRootBundle(mockTreeRoot, mockTreeRoot);
    expect((await arbitrumSpokePool.rootBundles(0)).slowRelayRoot).to.equal(mockTreeRoot);
    expect((await arbitrumSpokePool.rootBundles(0)).relayerRefundRoot).to.equal(mockTreeRoot);
  });

  it("Bridge tokens to hub pool correctly calls the Standard L2 Gateway router", async function () {
    const { leafs, tree } = await constructSingleRelayerRefundTree(l2Dai, await arbitrumSpokePool.callStatic.chainId());
    await arbitrumSpokePool.connect(crossDomainAlias).relayRootBundle(tree.getHexRoot(), mockTreeRoot);
    await arbitrumSpokePool.connect(relayer).executeRelayerRefundRoot(0, leafs[0], tree.getHexProof(leafs[0]));

    // This should have sent tokens back to L1. Check the correct methods on the gateway are correctly called.
    // outboundTransfer is overloaded in the arbitrum gateway. Define the interface to check the method is called.
    const functionKey = "outboundTransfer(address,address,uint256,bytes)";
    expect(l2GatewayRouter[functionKey]).to.have.been.calledOnce;
    expect(l2GatewayRouter[functionKey]).to.have.been.calledWith(dai.address, hubPool.address, amountToReturn, "0x");
  });
});