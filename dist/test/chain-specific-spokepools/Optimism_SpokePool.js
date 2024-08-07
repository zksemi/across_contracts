"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const utils_1 = require("../../utils/utils");
const abis_1 = require("../../utils/abis");
const utils_hre_1 = require("../../utils/utils.hre");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
const MerkleLib_utils_1 = require("../MerkleLib.utils");
let hubPool, optimismSpokePool, dai, weth;
let l2Dai, l2Usdc;
let owner, relayer, rando;
let crossDomainMessenger, l2StandardBridge, l2CctpTokenMessenger, cctpTokenMinter;
const l2Eth = "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000";
describe("Optimism Spoke Pool", function () {
    beforeEach(async function () {
        [owner, relayer, rando] = await utils_1.ethers.getSigners();
        ({ weth, dai, l2Dai, hubPool, l2Usdc } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        // Create the fake at the optimism cross domain messenger and l2StandardBridge pre-deployment addresses.
        crossDomainMessenger = await (0, utils_1.createFake)("L2CrossDomainMessenger", "0x4200000000000000000000000000000000000007");
        l2StandardBridge = await (0, utils_1.createFake)("MockBedrockL2StandardBridge", "0x4200000000000000000000000000000000000010");
        l2CctpTokenMessenger = await (0, utils_1.createFakeFromABI)(abis_1.CCTPTokenMessengerInterface);
        cctpTokenMinter = await (0, utils_1.createFakeFromABI)(abis_1.CCTPTokenMinterInterface);
        l2CctpTokenMessenger.localMinter.returns(cctpTokenMinter.address);
        cctpTokenMinter.burnLimitsPerMessage.returns((0, utils_1.toWei)("1000000"));
        await utils_hre_1.hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: [crossDomainMessenger.address],
        });
        await owner.sendTransaction({ to: crossDomainMessenger.address, value: (0, utils_1.toWei)("1") });
        optimismSpokePool = await utils_hre_1.hre.upgrades.deployProxy(await (0, utils_1.getContractFactory)("MockOptimism_SpokePool", owner), [l2Eth, 0, owner.address, hubPool.address], { kind: "uups", unsafeAllow: ["delegatecall"], constructorArgs: [weth.address] });
        await (0, utils_1.seedContract)(optimismSpokePool, relayer, [dai], weth, constants_1.amountHeldByPool);
    });
    it("Only cross domain owner upgrade logic contract", async function () {
        // TODO: Could also use upgrades.prepareUpgrade but I'm unclear of differences
        const implementation = await utils_hre_1.hre.upgrades.deployImplementation(await (0, utils_1.getContractFactory)("Optimism_SpokePool", owner), {
            kind: "uups",
            unsafeAllow: ["delegatecall"],
            constructorArgs: [weth.address, 60 * 60, 9 * 60 * 60, l2Usdc, l2CctpTokenMessenger.address],
        });
        // upgradeTo fails unless called by cross domain admin via messenger contract
        await (0, utils_1.expect)(optimismSpokePool.connect(rando).upgradeTo(implementation)).to.be.revertedWith("NotCrossChainCall");
        await (0, utils_1.expect)(optimismSpokePool.connect(crossDomainMessenger.wallet).upgradeTo(implementation)).to.be.revertedWith("NotCrossDomainAdmin");
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).upgradeTo(implementation);
    });
    it("Only cross domain owner can set l1GasLimit", async function () {
        await (0, utils_1.expect)(optimismSpokePool.setL1GasLimit(1337)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setL1GasLimit(1337);
        (0, utils_1.expect)(await optimismSpokePool.l1Gas()).to.equal(1337);
    });
    it("Only cross domain owner can set token bridge address for L2 token", async function () {
        await (0, utils_1.expect)(optimismSpokePool.setTokenBridge(l2Dai, rando.address)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setTokenBridge(l2Dai, rando.address);
        (0, utils_1.expect)(await optimismSpokePool.tokenBridges(l2Dai)).to.equal(rando.address);
    });
    it("Only cross domain owner can enable a route", async function () {
        await (0, utils_1.expect)(optimismSpokePool.setEnableRoute(l2Dai, 1, true)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setEnableRoute(l2Dai, 1, true);
        (0, utils_1.expect)(await optimismSpokePool.enabledDepositRoutes(l2Dai, 1)).to.equal(true);
    });
    it("Only cross domain owner can set the cross domain admin", async function () {
        await (0, utils_1.expect)(optimismSpokePool.setCrossDomainAdmin(rando.address)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setCrossDomainAdmin(rando.address);
        (0, utils_1.expect)(await optimismSpokePool.crossDomainAdmin()).to.equal(rando.address);
    });
    it("Only cross domain owner can set the hub pool address", async function () {
        await (0, utils_1.expect)(optimismSpokePool.setHubPool(rando.address)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setHubPool(rando.address);
        (0, utils_1.expect)(await optimismSpokePool.hubPool()).to.equal(rando.address);
    });
    it("Only cross domain owner can initialize a relayer refund", async function () {
        await (0, utils_1.expect)(optimismSpokePool.relayRootBundle(constants_1.mockTreeRoot, constants_1.mockTreeRoot)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).relayRootBundle(constants_1.mockTreeRoot, constants_1.mockTreeRoot);
        (0, utils_1.expect)((await optimismSpokePool.rootBundles(0)).slowRelayRoot).to.equal(constants_1.mockTreeRoot);
        (0, utils_1.expect)((await optimismSpokePool.rootBundles(0)).relayerRefundRoot).to.equal(constants_1.mockTreeRoot);
    });
    it("Only owner can delete a relayer refund", async function () {
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).relayRootBundle(constants_1.mockTreeRoot, constants_1.mockTreeRoot);
        await (0, utils_1.expect)(optimismSpokePool.emergencyDeleteRootBundle(0)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await (0, utils_1.expect)(optimismSpokePool.connect(crossDomainMessenger.wallet).emergencyDeleteRootBundle(0)).to.not.be
            .reverted;
        (0, utils_1.expect)((await optimismSpokePool.rootBundles(0)).slowRelayRoot).to.equal(utils_1.ethers.utils.hexZeroPad("0x0", 32));
        (0, utils_1.expect)((await optimismSpokePool.rootBundles(0)).relayerRefundRoot).to.equal(utils_1.ethers.utils.hexZeroPad("0x0", 32));
    });
    it("Only owner can set a remote L1 token", async function () {
        (0, utils_1.expect)(await optimismSpokePool.remoteL1Tokens(l2Dai)).to.equal(constants_1.zeroAddress);
        await (0, utils_1.expect)(optimismSpokePool.setRemoteL1Token(l2Dai, rando.address)).to.be.reverted;
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await (0, utils_1.expect)(optimismSpokePool.connect(crossDomainMessenger.wallet).setRemoteL1Token(l2Dai, rando.address)).to.not
            .be.reverted;
        (0, utils_1.expect)(await optimismSpokePool.remoteL1Tokens(l2Dai)).to.equal(rando.address);
    });
    it("Bridge tokens to hub pool correctly calls the Standard L2 Bridge for ERC20", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(l2Dai, await optimismSpokePool.callStatic.chainId());
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        await optimismSpokePool.connect(relayer).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]));
        // This should have sent tokens back to L1. Check the correct methods on the gateway are correctly called.
        (0, utils_1.expect)(l2StandardBridge.withdrawTo).to.have.been.calledOnce;
        (0, utils_1.expect)(l2StandardBridge.withdrawTo).to.have.been.calledWith(l2Dai, hubPool.address, constants_1.amountToReturn, 5000000, "0x");
    });
    it("If remote L1 token is set for native L2 token, then bridge calls bridgeERC20To instead of withdrawTo", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(dai.address, await optimismSpokePool.callStatic.chainId());
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        // If we set a remote L1 token for the native L2 token, then the bridge should call bridgeERC20To instead of withdrawTo
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setRemoteL1Token(dai.address, rando.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        await optimismSpokePool.connect(relayer).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]));
        // This should have sent tokens back to L1. Check the correct methods on the gateway are correctly called.
        (0, utils_1.expect)(l2StandardBridge.bridgeERC20To).to.have.been.calledOnce;
        (0, utils_1.expect)(l2StandardBridge.bridgeERC20To).to.have.been.calledWith(dai.address, rando.address, hubPool.address, constants_1.amountToReturn, 5000000, "0x");
    });
    it("Bridge tokens to hub pool correctly calls an alternative L2 Gateway router", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(l2Dai, await optimismSpokePool.callStatic.chainId());
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        const altL2Bridge = await (0, utils_1.createFake)("L2StandardBridge");
        await optimismSpokePool.connect(crossDomainMessenger.wallet).setTokenBridge(l2Dai, altL2Bridge.address);
        await optimismSpokePool.connect(relayer).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]));
        // This should have sent tokens back to L1. Check the correct methods on the gateway are correctly called.
        (0, utils_1.expect)(altL2Bridge.withdrawTo).to.have.been.calledOnce;
        (0, utils_1.expect)(altL2Bridge.withdrawTo).to.have.been.calledWith(l2Dai, hubPool.address, constants_1.amountToReturn, 5000000, "0x");
    });
    it("Bridge ETH to hub pool correctly calls the Standard L2 Bridge for WETH, including unwrap", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(weth.address, await optimismSpokePool.callStatic.chainId());
        crossDomainMessenger.xDomainMessageSender.returns(owner.address);
        await optimismSpokePool.connect(crossDomainMessenger.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        // When sending l2Weth we should see two differences from the previous test: 1) there should be a call to l2WETH to
        // unwrap l2WETH to l2ETH. 2) the address in the l2StandardBridge that is withdrawn should no longer be l2WETH but
        // switched to l2ETH as this is what is sent over the canonical Optimism bridge when sending ETH.
        // Executing the refund leaf should cause spoke pool to unwrap WETH to ETH to prepare to send it as msg.value
        // to the L2StandardBridge. This results in a net decrease in WETH balance.
        await (0, utils_1.expect)(() => optimismSpokePool.connect(relayer).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]))).to.changeTokenBalance(weth, optimismSpokePool, constants_1.amountToReturn.mul(-1));
        (0, utils_1.expect)(l2StandardBridge.withdrawTo).to.have.been.calledWithValue(constants_1.amountToReturn);
        (0, utils_1.expect)(l2StandardBridge.withdrawTo).to.have.been.calledOnce;
        (0, utils_1.expect)(l2StandardBridge.withdrawTo).to.have.been.calledWith(l2Eth, hubPool.address, constants_1.amountToReturn, 5000000, "0x");
    });
});
