import * as consts from "../constants";
import { ethers, expect, Contract, FakeContract, SignerWithAddress, createFake, toWei, hre } from "../utils";
import { getContractFactory, seedWallet, randomAddress } from "../utils";
import { hubPoolFixture, enableTokensForLP } from "../fixtures/HubPool.Fixture";
import { constructSingleChainTree } from "../MerkleLib.utils";

let hubPool: Contract,
  arbitrumAdapter: Contract,
  mockAdapter: Contract,
  weth: Contract,
  dai: Contract,
  timer: Contract,
  mockSpoke: Contract;
let l2Weth: string, l2Dai: string;
let owner: SignerWithAddress, dataWorker: SignerWithAddress, liquidityProvider: SignerWithAddress;
let l1ERC20Gateway: FakeContract, l1Inbox: FakeContract;

const arbitrumChainId = 42161;
let l1ChainId: number;

describe("Arbitrum Chain Adapter", function () {
  beforeEach(async function () {
    [owner, dataWorker, liquidityProvider] = await ethers.getSigners();
    ({ weth, dai, l2Weth, l2Dai, hubPool, mockSpoke, timer, mockAdapter } = await hubPoolFixture());
    await seedWallet(dataWorker, [dai], weth, consts.amountToLp);
    await seedWallet(liquidityProvider, [dai], weth, consts.amountToLp.mul(10));

    await enableTokensForLP(owner, hubPool, weth, [weth, dai]);
    await weth.connect(liquidityProvider).approve(hubPool.address, consts.amountToLp);
    await hubPool.connect(liquidityProvider).addLiquidity(weth.address, consts.amountToLp);
    await weth.connect(dataWorker).approve(hubPool.address, consts.bondAmount.mul(10));
    await dai.connect(liquidityProvider).approve(hubPool.address, consts.amountToLp);
    await hubPool.connect(liquidityProvider).addLiquidity(dai.address, consts.amountToLp);
    await dai.connect(dataWorker).approve(hubPool.address, consts.bondAmount.mul(10));

    l1Inbox = await createFake("Inbox");
    l1ERC20Gateway = await createFake("TokenGateway");
    l1ChainId = Number(await hre.getChainId());

    arbitrumAdapter = await (
      await getContractFactory("Arbitrum_Adapter", owner)
    ).deploy(l1Inbox.address, l1ERC20Gateway.address);

    // Seed the HubPool some funds so it can send L1->L2 messages.
    await hubPool.connect(liquidityProvider).loadEthForL2Calls({ value: toWei("1") });

    await hubPool.setCrossChainContracts(arbitrumChainId, arbitrumAdapter.address, mockSpoke.address);

    await hubPool.whitelistRoute(arbitrumChainId, l1ChainId, l2Weth, weth.address);

    await hubPool.whitelistRoute(arbitrumChainId, l1ChainId, l2Dai, dai.address);

    await hubPool.setCrossChainContracts(l1ChainId, mockAdapter.address, mockSpoke.address);

    await hubPool.whitelistRoute(l1ChainId, arbitrumChainId, dai.address, l2Dai);
    await hubPool.whitelistRoute(l1ChainId, arbitrumChainId, weth.address, l2Weth);
  });

  it("relayMessage calls spoke pool functions", async function () {
    const newAdmin = randomAddress();
    const functionCallData = mockSpoke.interface.encodeFunctionData("setCrossDomainAdmin", [newAdmin]);

    expect(await hubPool.relaySpokePoolAdminFunction(arbitrumChainId, functionCallData))
      .to.emit(arbitrumAdapter.attach(hubPool.address), "MessageRelayed")
      .withArgs(mockSpoke.address, functionCallData);
    expect(l1Inbox.createRetryableTicket).to.have.been.calledThrice;
    expect(l1Inbox.createRetryableTicket).to.have.been.calledWith(
      mockSpoke.address,
      0,
      consts.sampleL2MaxSubmissionCost,
      owner.address,
      owner.address,
      consts.sampleL2Gas,
      consts.sampleL2GasPrice,
      functionCallData
    );
  });
  it("Correctly calls appropriate arbitrum bridge functions when making ERC20 cross chain calls", async function () {
    // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
    // and check that at it's finalization the L2 bridge contracts are called as expected.
    const { leafs, tree, tokensSendToL2 } = await constructSingleChainTree(dai.address, 1, arbitrumChainId);
    await hubPool
      .connect(dataWorker)
      .proposeRootBundle([3117], 1, tree.getHexRoot(), consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
    await timer.setCurrentTime(Number(await timer.getCurrentTime()) + consts.refundProposalLiveness + 1);
    await hubPool.connect(dataWorker).executeRootBundle(leafs[0], tree.getHexProof(leafs[0]));
    // The correct functions should have been called on the arbitrum contracts.
    expect(l1ERC20Gateway.outboundTransfer).to.have.been.calledOnce; // One token transfer over the canonical bridge.
    expect(l1ERC20Gateway.outboundTransfer).to.have.been.calledWith(
      dai.address,
      mockSpoke.address,
      tokensSendToL2,
      consts.sampleL2Gas,
      consts.sampleL2GasPrice,
      "0x"
    );
    expect(l1Inbox.createRetryableTicket).to.have.been.calledThrice; // only 1 L1->L2 message sent. Note that the two
    // whitelist transactions already sent two messages.
    expect(l1Inbox.createRetryableTicket).to.have.been.calledWith(
      mockSpoke.address,
      0,
      consts.sampleL2MaxSubmissionCost,
      owner.address,
      owner.address,
      consts.sampleL2Gas,
      consts.sampleL2GasPrice,
      mockSpoke.interface.encodeFunctionData("relayRootBundle", [
        consts.mockRelayerRefundRoot,
        consts.mockSlowRelayRoot,
      ])
    );
  });
});
