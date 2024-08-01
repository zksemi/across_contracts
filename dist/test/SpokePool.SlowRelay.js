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
const utils_1 = require("../utils/utils");
const SpokePool_Fixture_1 = require("./fixtures/SpokePool.Fixture");
const MerkleLib_utils_1 = require("./MerkleLib.utils");
const consts = __importStar(require("./constants"));
const constants_1 = require("../utils/constants");
let spokePool, erc20, destErc20;
let depositor, recipient, relayer;
// Relay fees for slow relay are only the realizedLpFee; the depositor should be re-funded the relayer fee
// for any amount sent by a slow relay.
const fullRelayAmountPostFees = consts.amountToRelay
    .mul((0, utils_1.toBN)(consts.oneHundredPct).sub(consts.realizedLpFeePct))
    .div((0, utils_1.toBN)(consts.oneHundredPct));
describe("SpokePool Slow Relay Logic", async function () {
    beforeEach(async function () {
        [depositor, recipient, relayer] = await utils_1.ethers.getSigners();
        ({ spokePool, destErc20, erc20 } = await (0, SpokePool_Fixture_1.spokePoolFixture)());
        // Send tokens to the spoke pool for repayment and relayer to send fills
        await (0, utils_1.seedContract)(spokePool, relayer, [destErc20], undefined, fullRelayAmountPostFees.mul(10));
        // Approve spoke pool to take relayer's tokens.
        await (0, utils_1.seedWallet)(relayer, [destErc20], undefined, consts.amountToSeedWallets);
        await destErc20.connect(relayer).approve(spokePool.address, consts.maxUint256);
    });
    describe("requestV3SlowFill", function () {
        let relayData;
        beforeEach(async function () {
            const fillDeadline = (await spokePool.getCurrentTime()).toNumber() + 1000;
            relayData = {
                depositor: depositor.address,
                recipient: recipient.address,
                exclusiveRelayer: relayer.address,
                inputToken: erc20.address,
                outputToken: destErc20.address,
                inputAmount: consts.amountToDeposit,
                outputAmount: fullRelayAmountPostFees,
                originChainId: consts.originChainId,
                depositId: consts.firstDepositId,
                fillDeadline: fillDeadline,
                exclusivityDeadline: fillDeadline - 500,
                message: "0x",
            };
            // By default, set current time to after exclusivity deadline
            await spokePool.setCurrentTime(relayData.exclusivityDeadline + 1);
        });
        it("fill deadline is expired", async function () {
            relayData.fillDeadline = (await spokePool.getCurrentTime()).sub(1);
            await (0, utils_1.expect)(spokePool.connect(relayer).requestV3SlowFill(relayData)).to.be.revertedWith("ExpiredFillDeadline");
        });
        it("during exclusivity deadline", async function () {
            await spokePool.setCurrentTime(relayData.exclusivityDeadline);
            await (0, utils_1.expect)(spokePool.connect(relayer).requestV3SlowFill(relayData)).to.be.revertedWith("NoSlowFillsInExclusivityWindow");
        });
        it("can request before fast fill", async function () {
            const relayHash = (0, SpokePool_Fixture_1.getV3RelayHash)(relayData, consts.destinationChainId);
            // FillStatus must be Unfilled:
            (0, utils_1.expect)(await spokePool.fillStatuses(relayHash)).to.equal(constants_1.FillStatus.Unfilled);
            (0, utils_1.expect)(await spokePool.connect(relayer).requestV3SlowFill(relayData)).to.emit(spokePool, "RequestedV3SlowFill");
            // FillStatus gets reset to RequestedSlowFill:
            (0, utils_1.expect)(await spokePool.fillStatuses(relayHash)).to.equal(constants_1.FillStatus.RequestedSlowFill);
            // Can't request slow fill again:
            await (0, utils_1.expect)(spokePool.connect(relayer).requestV3SlowFill(relayData)).to.be.revertedWith("InvalidSlowFillRequest");
            // Can fast fill after:
            await spokePool.connect(relayer).fillV3Relay(relayData, consts.repaymentChainId);
        });
        it("cannot request if FillStatus is Filled", async function () {
            const relayHash = (0, SpokePool_Fixture_1.getV3RelayHash)(relayData, consts.destinationChainId);
            await spokePool.setFillStatus(relayHash, constants_1.FillStatus.Filled);
            (0, utils_1.expect)(await spokePool.fillStatuses(relayHash)).to.equal(constants_1.FillStatus.Filled);
            await (0, utils_1.expect)(spokePool.connect(relayer).requestV3SlowFill(relayData)).to.be.revertedWith("InvalidSlowFillRequest");
        });
        it("fills are not paused", async function () {
            await spokePool.pauseFills(true);
            await (0, utils_1.expect)(spokePool.connect(relayer).requestV3SlowFill(relayData)).to.be.revertedWith("FillsArePaused");
        });
        it("reentrancy protected", async function () {
            // In this test we create a reentrancy attempt by sending a fill with a recipient contract that calls back into
            // the spoke pool via the tested function.
            const functionCalldata = spokePool.interface.encodeFunctionData("requestV3SlowFill", [relayData]);
            await (0, utils_1.expect)(spokePool.connect(depositor).callback(functionCalldata)).to.be.revertedWith("ReentrancyGuard: reentrant call");
        });
    });
    describe("executeV3SlowRelayLeaf", function () {
        let relayData, slowRelayLeaf;
        beforeEach(async function () {
            const fillDeadline = (await spokePool.getCurrentTime()).toNumber() + 1000;
            relayData = {
                depositor: depositor.address,
                recipient: recipient.address,
                exclusiveRelayer: relayer.address,
                inputToken: erc20.address,
                outputToken: destErc20.address,
                inputAmount: consts.amountToDeposit,
                outputAmount: fullRelayAmountPostFees,
                originChainId: consts.originChainId,
                depositId: consts.firstDepositId,
                fillDeadline: fillDeadline,
                exclusivityDeadline: fillDeadline - 500,
                message: "0x",
            };
            slowRelayLeaf = {
                relayData,
                chainId: consts.destinationChainId,
                // Make updated output amount different to test whether it is used instead of
                // outputAmount when calling _verifyV3SlowFill.
                updatedOutputAmount: relayData.outputAmount.add(1),
            };
        });
        it("Happy case: recipient can send ERC20 with correct proof out of contract balance", async function () {
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            await (0, utils_1.expect)(() => spokePool.connect(recipient).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf))).to.changeTokenBalances(destErc20, [spokePool, recipient], [slowRelayLeaf.updatedOutputAmount.mul(-1), slowRelayLeaf.updatedOutputAmount]);
        });
        it("cannot double execute leaf", async function () {
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            await spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf));
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf))).to.be.revertedWith("RelayFilled");
            // Cannot fast fill after slow fill
            await (0, utils_1.expect)(spokePool.connect(relayer).fillV3Relay(slowRelayLeaf.relayData, consts.repaymentChainId)).to.be.revertedWith("RelayFilled");
        });
        it("cannot be used to double send a fill", async function () {
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            // Fill before executing slow fill
            await spokePool.connect(relayer).fillV3Relay(slowRelayLeaf.relayData, consts.repaymentChainId);
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf))).to.be.revertedWith("RelayFilled");
        });
        it("cannot re-enter", async function () {
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            const functionCalldata = spokePool.interface.encodeFunctionData("executeV3SlowRelayLeaf", [
                slowRelayLeaf,
                0,
                tree.getHexProof(slowRelayLeaf),
            ]);
            await (0, utils_1.expect)(spokePool.connect(depositor).callback(functionCalldata)).to.be.revertedWith("ReentrancyGuard: reentrant call");
        });
        it("can execute even if fills are paused", async function () {
            await spokePool.pauseFills(true);
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf))).to.not.be.reverted;
        });
        it("executes _preExecuteLeafHook", async function () {
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf)))
                .to.emit(spokePool, "PreLeafExecuteHook")
                .withArgs(slowRelayLeaf.relayData.outputToken);
        });
        it("cannot execute leaves with chain IDs not matching spoke pool's chain ID", async function () {
            // In this test, the merkle proof is valid for the tree relayed to the spoke pool, but the merkle leaf
            // destination chain ID does not match the spoke pool's chainId() and therefore cannot be executed.
            const slowRelayLeafWithWrongDestinationChain = {
                ...slowRelayLeaf,
                chainId: slowRelayLeaf.chainId + 1,
            };
            const treeWithWrongDestinationChain = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeafWithWrongDestinationChain]);
            await spokePool
                .connect(depositor)
                .relayRootBundle(consts.mockTreeRoot, treeWithWrongDestinationChain.getHexRoot());
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeafWithWrongDestinationChain, 0, // rootBundleId
            treeWithWrongDestinationChain.getHexProof(slowRelayLeafWithWrongDestinationChain))).to.be.revertedWith("InvalidMerkleProof");
        });
        it("_verifyV3SlowFill", async function () {
            const leafWithDifferentUpdatedOutputAmount = {
                ...slowRelayLeaf,
                updatedOutputAmount: slowRelayLeaf.updatedOutputAmount.add(1),
            };
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf, leafWithDifferentUpdatedOutputAmount]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, consts.mockTreeRoot);
            // Incorrect root bundle ID
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 1, // rootBundleId should be 0
            tree.getHexProof(slowRelayLeaf))).to.revertedWith("InvalidMerkleProof");
            // Invalid proof
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, tree.getHexProof(leafWithDifferentUpdatedOutputAmount) // Invalid proof
            )).to.revertedWith("InvalidMerkleProof");
            // Incorrect relay execution params, not matching leaf used to construct proof
            await (0, utils_1.expect)(spokePool
                .connect(relayer)
                .executeV3SlowRelayLeaf(leafWithDifferentUpdatedOutputAmount, 0, tree.getHexProof(slowRelayLeaf))).to.revertedWith("InvalidMerkleProof");
        });
        it("calls _fillRelay with expected params", async function () {
            const tree = await (0, MerkleLib_utils_1.buildV3SlowRelayTree)([slowRelayLeaf]);
            await spokePool.connect(depositor).relayRootBundle(consts.mockTreeRoot, tree.getHexRoot());
            await (0, utils_1.expect)(spokePool.connect(relayer).executeV3SlowRelayLeaf(slowRelayLeaf, 0, // rootBundleId
            tree.getHexProof(slowRelayLeaf)))
                .to.emit(spokePool, "FilledV3Relay")
                .withArgs(relayData.inputToken, relayData.outputToken, relayData.inputAmount, relayData.outputAmount, 
            // Sets repaymentChainId to 0:
            0, relayData.originChainId, relayData.depositId, relayData.fillDeadline, relayData.exclusivityDeadline, relayData.exclusiveRelayer, 
            // Sets relayer address to 0x0
            consts.zeroAddress, relayData.depositor, relayData.recipient, relayData.message, [
                // Uses relayData.recipient
                relayData.recipient,
                // Uses relayData.message
                relayData.message,
                // Uses slow fill leaf's updatedOutputAmount
                slowRelayLeaf.updatedOutputAmount,
                2 /* SlowFill */,
            ]);
            // Sanity check that executed slow fill leaf's updatedOutputAmount is different than the relayData.outputAmount
            // since we test for it above.
            (0, utils_1.expect)(slowRelayLeaf.relayData.outputAmount).to.not.equal(slowRelayLeaf.updatedOutputAmount);
        });
    });
});
