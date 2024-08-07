"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-expressions */
const constants_1 = require("./../constants");
const utils_1 = require("../../utils/utils");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
const MerkleLib_utils_1 = require("../MerkleLib.utils");
const common_1 = require("@uma/common");
const abis_1 = require("../../utils/abis");
const consts_1 = require("../../deploy/consts");
let hubPool, polygonAdapter, weth, dai, usdc, matic, timer, mockSpoke;
let l2Weth, l2Dai, l2WMatic, l2Usdc;
let owner, dataWorker, liquidityProvider;
let rootChainManager, fxStateSender, depositManager, cctpMessenger, cctpTokenMinter, erc20Predicate;
const polygonChainId = 137;
describe("Polygon Chain Adapter", function () {
    beforeEach(async function () {
        [owner, dataWorker, liquidityProvider] = await utils_1.ethers.getSigners();
        ({ weth, dai, l2Weth, l2Dai, hubPool, mockSpoke, timer, usdc, l2Usdc } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        matic = await (await (0, utils_1.getContractFactory)("ExpandedERC20", owner)).deploy("Matic", "MATIC", 18);
        await matic.addMember(common_1.TokenRolesEnum.MINTER, owner.address);
        l2WMatic = (0, utils_1.randomAddress)();
        await (0, utils_1.seedWallet)(dataWorker, [dai, matic, usdc], weth, constants_1.amountToLp);
        await (0, utils_1.seedWallet)(liquidityProvider, [dai, matic, usdc], weth, constants_1.amountToLp.mul(10));
        await (0, HubPool_Fixture_1.enableTokensForLP)(owner, hubPool, weth, [weth, dai, matic, usdc]);
        for (const token of [weth, dai, matic, usdc]) {
            await token.connect(liquidityProvider).approve(hubPool.address, constants_1.amountToLp);
            await hubPool.connect(liquidityProvider).addLiquidity(token.address, constants_1.amountToLp);
            await token.connect(dataWorker).approve(hubPool.address, constants_1.bondAmount.mul(10));
        }
        rootChainManager = await (0, utils_1.createFake)("RootChainManagerMock");
        fxStateSender = await (0, utils_1.createFake)("FxStateSenderMock");
        depositManager = await (0, utils_1.createFake)("DepositManagerMock");
        erc20Predicate = (0, utils_1.randomAddress)();
        cctpMessenger = await (0, utils_1.createFakeFromABI)(abis_1.CCTPTokenMessengerInterface);
        cctpTokenMinter = await (0, utils_1.createFakeFromABI)(abis_1.CCTPTokenMinterInterface);
        cctpMessenger.localMinter.returns(cctpTokenMinter.address);
        cctpTokenMinter.burnLimitsPerMessage.returns((0, utils_1.toWei)("1000000"));
        polygonAdapter = await (await (0, utils_1.getContractFactory)("Polygon_Adapter", owner)).deploy(rootChainManager.address, fxStateSender.address, depositManager.address, erc20Predicate, matic.address, weth.address, usdc.address, cctpMessenger.address);
        await hubPool.setCrossChainContracts(polygonChainId, polygonAdapter.address, mockSpoke.address);
        await hubPool.setPoolRebalanceRoute(polygonChainId, weth.address, l2Weth);
        await hubPool.setPoolRebalanceRoute(polygonChainId, dai.address, l2Dai);
        await hubPool.setPoolRebalanceRoute(polygonChainId, matic.address, l2WMatic);
        await hubPool.setPoolRebalanceRoute(polygonChainId, usdc.address, l2Usdc);
    });
    it("relayMessage calls spoke pool functions", async function () {
        const newAdmin = (0, utils_1.randomAddress)();
        const functionCallData = mockSpoke.interface.encodeFunctionData("setCrossDomainAdmin", [newAdmin]);
        (0, utils_1.expect)(await hubPool.relaySpokePoolAdminFunction(polygonChainId, functionCallData))
            .to.emit(polygonAdapter.attach(hubPool.address), "MessageRelayed")
            .withArgs(mockSpoke.address, functionCallData);
        (0, utils_1.expect)(fxStateSender.sendMessageToChild).to.have.been.calledWith(mockSpoke.address, functionCallData);
    });
    it("Correctly calls appropriate Polygon bridge functions when making ERC20 cross chain calls", async function () {
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(dai.address, 1, polygonChainId);
        await hubPool.connect(dataWorker).proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockTreeRoot, constants_1.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // The correct functions should have been called on the polygon contracts.
        (0, utils_1.expect)(rootChainManager.depositFor).to.have.been.calledOnce; // One token transfer over the bridge.
        (0, utils_1.expect)(rootChainManager.depositEtherFor).to.have.callCount(0); // No ETH transfers over the bridge.
        const expectedErc20L1ToL2BridgeParams = [
            mockSpoke.address,
            dai.address,
            utils_1.ethers.utils.defaultAbiCoder.encode(["uint256"], [tokensSendToL2]),
        ];
        (0, utils_1.expect)(rootChainManager.depositFor).to.have.been.calledWith(...expectedErc20L1ToL2BridgeParams);
        const expectedL1ToL2FunctionCallParams = [
            mockSpoke.address,
            mockSpoke.interface.encodeFunctionData("relayRootBundle", [constants_1.mockTreeRoot, constants_1.mockSlowRelayRoot]),
        ];
        (0, utils_1.expect)(fxStateSender.sendMessageToChild).to.have.been.calledWith(...expectedL1ToL2FunctionCallParams);
    });
    it("Correctly unwraps WETH and bridges ETH", async function () {
        // Cant bridge WETH on polygon. Rather, unwrap WETH to ETH then bridge it. Validate the adapter does this.
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleChainTree)(weth.address, 1, polygonChainId);
        await hubPool.connect(dataWorker).proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockTreeRoot, constants_1.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // The correct functions should have been called on the polygon contracts.
        (0, utils_1.expect)(rootChainManager.depositEtherFor).to.have.been.calledOnce; // One eth transfer over the bridge.
        (0, utils_1.expect)(rootChainManager.depositFor).to.have.callCount(0); // No Token transfers over the bridge.
        (0, utils_1.expect)(rootChainManager.depositEtherFor).to.have.been.calledWith(mockSpoke.address);
        const expectedL2ToL1FunctionCallParams = [
            mockSpoke.address,
            mockSpoke.interface.encodeFunctionData("relayRootBundle", [constants_1.mockTreeRoot, constants_1.mockSlowRelayRoot]),
        ];
        (0, utils_1.expect)(fxStateSender.sendMessageToChild).to.have.been.calledWith(...expectedL2ToL1FunctionCallParams);
    });
    it("Correctly bridges matic", async function () {
        // Cant bridge WETH on polygon. Rather, unwrap WETH to ETH then bridge it. Validate the adapter does this.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(matic.address, 1, polygonChainId);
        await hubPool.connect(dataWorker).proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockTreeRoot, constants_1.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // The correct functions should have been called on the polygon contracts.
        (0, utils_1.expect)(depositManager.depositERC20ForUser).to.have.been.calledOnce; // Should call into the plasma bridge
        (0, utils_1.expect)(depositManager.depositERC20ForUser).to.have.been.calledWith(matic.address, mockSpoke.address, tokensSendToL2);
        (0, utils_1.expect)(rootChainManager.depositFor).to.have.callCount(0); // No PoS calls.
        (0, utils_1.expect)(rootChainManager.depositEtherFor).to.have.callCount(0); // No PoS calls.
        const expectedL2ToL1FunctionCallParams = [
            mockSpoke.address,
            mockSpoke.interface.encodeFunctionData("relayRootBundle", [constants_1.mockTreeRoot, constants_1.mockSlowRelayRoot]),
        ];
        (0, utils_1.expect)(fxStateSender.sendMessageToChild).to.have.been.calledWith(...expectedL2ToL1FunctionCallParams);
    });
    it("Correctly calls the CCTP bridge adapter when attempting to bridge USDC", async function () {
        const internalChainId = polygonChainId;
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(usdc.address, 1, internalChainId);
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle([3117], 1, tree.getHexRoot(), constants_1.mockRelayerRefundRoot, constants_1.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + constants_1.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // Adapter should have approved gateway to spend its ERC20.
        (0, utils_1.expect)(await usdc.allowance(hubPool.address, cctpMessenger.address)).to.equal(tokensSendToL2);
        // The correct functions should have been called on the bridge contracts
        (0, utils_1.expect)(cctpMessenger.depositForBurn).to.have.been.calledOnce;
        (0, utils_1.expect)(cctpMessenger.depositForBurn).to.have.been.calledWith(utils_1.ethers.BigNumber.from(tokensSendToL2), consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
    });
});
