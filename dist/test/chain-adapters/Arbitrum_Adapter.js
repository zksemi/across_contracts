"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-expressions */
const consts = __importStar(require("../constants"));
const utils_1 = require("../../utils/utils");
const abis_1 = require("../../utils/abis");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
const MerkleLib_utils_1 = require("../MerkleLib.utils");
const consts_1 = require("../../deploy/consts");
let hubPool, arbitrumAdapter, weth, dai, usdc, timer, mockSpoke;
let l2Weth, l2Dai, gatewayAddress, l2Usdc;
let owner, dataWorker;
let liquidityProvider, refundAddress;
let l1ERC20GatewayRouter, l1Inbox, cctpMessenger, cctpTokenMinter;
const arbitrumChainId = 42161;
describe("Arbitrum Chain Adapter", function () {
    beforeEach(async function () {
        [owner, dataWorker, liquidityProvider, refundAddress] = await utils_1.ethers.getSigners();
        ({ weth, dai, l2Weth, l2Dai, hubPool, mockSpoke, timer, usdc, l2Usdc } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        await (0, utils_1.seedWallet)(dataWorker, [dai, usdc], weth, consts.amountToLp);
        await (0, utils_1.seedWallet)(liquidityProvider, [dai, usdc], weth, consts.amountToLp.mul(10));
        await (0, HubPool_Fixture_1.enableTokensForLP)(owner, hubPool, weth, [weth, dai, usdc]);
        for (const token of [weth, dai, usdc]) {
            await token.connect(liquidityProvider).approve(hubPool.address, consts.amountToLp);
            await hubPool.connect(liquidityProvider).addLiquidity(token.address, consts.amountToLp);
            await token.connect(dataWorker).approve(hubPool.address, consts.bondAmount.mul(10));
        }
        cctpMessenger = await (0, utils_1.createFakeFromABI)(abis_1.CCTPTokenMessengerInterface);
        cctpTokenMinter = await (0, utils_1.createFakeFromABI)(abis_1.CCTPTokenMinterInterface);
        cctpMessenger.localMinter.returns(cctpTokenMinter.address);
        cctpTokenMinter.burnLimitsPerMessage.returns((0, utils_1.toWei)("1000000"));
        l1Inbox = await (0, utils_1.createFake)("Inbox");
        l1ERC20GatewayRouter = await (0, utils_1.createFake)("ArbitrumMockErc20GatewayRouter");
        gatewayAddress = (0, utils_1.randomAddress)();
        l1ERC20GatewayRouter.getGateway.returns(gatewayAddress);
        arbitrumAdapter = await (await (0, utils_1.getContractFactory)("Arbitrum_Adapter", owner)).deploy(l1Inbox.address, l1ERC20GatewayRouter.address, refundAddress.address, usdc.address, cctpMessenger.address);
        // Seed the HubPool some funds so it can send L1->L2 messages.
        await hubPool.connect(liquidityProvider).loadEthForL2Calls({ value: (0, utils_1.toWei)("1") });
        await hubPool.setCrossChainContracts(arbitrumChainId, arbitrumAdapter.address, mockSpoke.address);
        await hubPool.setPoolRebalanceRoute(arbitrumChainId, dai.address, l2Dai);
        await hubPool.setPoolRebalanceRoute(arbitrumChainId, weth.address, l2Weth);
        await hubPool.setPoolRebalanceRoute(arbitrumChainId, usdc.address, l2Usdc);
    });
    it("relayMessage calls spoke pool functions", async function () {
        const newAdmin = (0, utils_1.randomAddress)();
        const functionCallData = mockSpoke.interface.encodeFunctionData("setCrossDomainAdmin", [newAdmin]);
        (0, utils_1.expect)(await hubPool.relaySpokePoolAdminFunction(arbitrumChainId, functionCallData)).to.changeEtherBalances([l1Inbox], [(0, utils_1.toBN)(consts.sampleL2MaxSubmissionCost).add((0, utils_1.toBN)(consts.sampleL2Gas).mul(consts.sampleL2GasPrice))]);
        (0, utils_1.expect)(l1Inbox.createRetryableTicket).to.have.been.calledOnce;
        (0, utils_1.expect)(l1Inbox.createRetryableTicket).to.have.been.calledWith(mockSpoke.address, 0, consts.sampleL2MaxSubmissionCost, refundAddress.address, refundAddress.address, consts.sampleL2Gas, consts.sampleL2GasPrice, functionCallData);
    });
    it("Correctly calls appropriate arbitrum bridge functions when making ERC20 cross chain calls", async function () {
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(dai.address, 1, arbitrumChainId);
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle([3117], 1, tree.getHexRoot(), consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + consts.refundProposalLiveness + 1);
        (0, utils_1.expect)(await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]))).to.changeEtherBalances([l1ERC20GatewayRouter], [(0, utils_1.toBN)(consts.sampleL2MaxSubmissionCost).add((0, utils_1.toBN)(consts.sampleL2Gas).mul(consts.sampleL2GasPrice))]);
        // The correct functions should have been called on the arbitrum contracts.
        (0, utils_1.expect)(l1ERC20GatewayRouter.outboundTransferCustomRefund).to.have.been.calledOnce; // One token transfer over the canonical bridge.
        // Adapter should have approved gateway to spend its ERC20.
        (0, utils_1.expect)(await dai.allowance(hubPool.address, gatewayAddress)).to.equal(tokensSendToL2);
        const message = utils_1.defaultAbiCoder.encode(["uint256", "bytes"], [consts.sampleL2MaxSubmissionCost, "0x"]);
        (0, utils_1.expect)(l1ERC20GatewayRouter.outboundTransferCustomRefund).to.have.been.calledWith(dai.address, refundAddress.address, mockSpoke.address, tokensSendToL2, consts.sampleL2GasSendTokens, consts.sampleL2GasPrice, message);
        (0, utils_1.expect)(l1Inbox.createRetryableTicket).to.have.been.calledOnce; // only 1 L1->L2 message sent.
        (0, utils_1.expect)(l1Inbox.createRetryableTicket).to.have.been.calledWith(mockSpoke.address, 0, consts.sampleL2MaxSubmissionCost, refundAddress.address, refundAddress.address, consts.sampleL2Gas, consts.sampleL2GasPrice, mockSpoke.interface.encodeFunctionData("relayRootBundle", [
            consts.mockRelayerRefundRoot,
            consts.mockSlowRelayRoot,
        ]));
    });
    it("Correctly calls the CCTP bridge adapter when attempting to bridge USDC", async function () {
        const internalChainId = arbitrumChainId;
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(usdc.address, 1, internalChainId);
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle([3117], 1, tree.getHexRoot(), consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + consts.refundProposalLiveness + 1);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // Adapter should have approved gateway to spend its ERC20.
        (0, utils_1.expect)(await usdc.allowance(hubPool.address, cctpMessenger.address)).to.equal(tokensSendToL2);
        // The correct functions should have been called on the bridge contracts
        (0, utils_1.expect)(cctpMessenger.depositForBurn).to.have.been.calledOnce;
        (0, utils_1.expect)(cctpMessenger.depositForBurn).to.have.been.calledWith(utils_1.ethers.BigNumber.from(tokensSendToL2), consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
    });
    it("Splits USDC into parts to stay under per-message limit when attempting to bridge USDC", async function () {
        const internalChainId = arbitrumChainId;
        // Create an action that will send an L1->L2 tokens transfer and bundle. For this, create a relayer repayment bundle
        // and check that at it's finalization the L2 bridge contracts are called as expected.
        const { leaves, tree, tokensSendToL2 } = await (0, MerkleLib_utils_1.constructSingleChainTree)(usdc.address, 1, internalChainId);
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle([3117], 1, tree.getHexRoot(), consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + consts.refundProposalLiveness + 1);
        // 1) Set limit below amount to send and where amount does not divide evenly into limit.
        let newLimit = tokensSendToL2.div(2).sub(1);
        cctpTokenMinter.burnLimitsPerMessage.returns(newLimit);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // The correct functions should have been called on the bridge contracts
        (0, utils_1.expect)(cctpMessenger.depositForBurn).to.have.been.calledThrice;
        (0, utils_1.expect)(cctpMessenger.depositForBurn.atCall(0)).to.have.been.calledWith(newLimit, consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
        (0, utils_1.expect)(cctpMessenger.depositForBurn.atCall(1)).to.have.been.calledWith(newLimit, consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
        (0, utils_1.expect)(cctpMessenger.depositForBurn.atCall(2)).to.have.been.calledWith(2, // each of the above calls left a remainder of 1
        consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
        // 2) Set limit below amount to send and where amount divides evenly into limit.
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle([3117], 1, tree.getHexRoot(), consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + consts.refundProposalLiveness + 1);
        newLimit = tokensSendToL2.div(2);
        cctpTokenMinter.burnLimitsPerMessage.returns(newLimit);
        await hubPool.connect(dataWorker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // 2 more calls added to prior 3.
        (0, utils_1.expect)(cctpMessenger.depositForBurn).to.have.callCount(5);
        (0, utils_1.expect)(cctpMessenger.depositForBurn.atCall(3)).to.have.been.calledWith(newLimit, consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
        (0, utils_1.expect)(cctpMessenger.depositForBurn.atCall(4)).to.have.been.calledWith(newLimit, consts_1.CIRCLE_DOMAIN_IDs[internalChainId], utils_1.ethers.utils.hexZeroPad(mockSpoke.address, 32).toLowerCase(), usdc.address);
    });
});
