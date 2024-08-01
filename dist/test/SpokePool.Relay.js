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
const consts = __importStar(require("./constants"));
let spokePool, weth, erc20, destErc20, erc1271;
let depositor, recipient, relayer;
// _fillRelay takes a V3RelayExecutionParams object as a param. This function returns the correct object
// as a convenience.
async function getRelayExecutionParams(_relayData, destinationChainId) {
    return {
        relay: _relayData,
        relayHash: (0, SpokePool_Fixture_1.getV3RelayHash)(_relayData, destinationChainId),
        updatedOutputAmount: _relayData.outputAmount,
        updatedRecipient: _relayData.recipient,
        updatedMessage: _relayData.message,
        repaymentChainId: consts.repaymentChainId,
    };
}
describe("SpokePool Relayer Logic", async function () {
    beforeEach(async function () {
        [depositor, recipient, relayer] = await utils_1.ethers.getSigners();
        ({ weth, erc20, spokePool, destErc20, erc1271 } = await (0, SpokePool_Fixture_1.spokePoolFixture)());
        // mint some fresh tokens and deposit ETH for weth for depositor and relayer.
        await (0, utils_1.seedWallet)(depositor, [erc20], weth, consts.amountToSeedWallets);
        await (0, utils_1.seedWallet)(relayer, [destErc20], weth, consts.amountToSeedWallets);
        // Approve spokepool to spend tokens
        await erc20.connect(depositor).approve(spokePool.address, consts.amountToDeposit);
        await weth.connect(depositor).approve(spokePool.address, consts.amountToDeposit);
        await destErc20.connect(relayer).approve(spokePool.address, consts.amountToDeposit);
        await weth.connect(relayer).approve(spokePool.address, consts.amountToDeposit);
    });
    describe("fill V3", function () {
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
                outputAmount: consts.amountToDeposit,
                originChainId: consts.originChainId,
                depositId: consts.firstDepositId,
                fillDeadline: fillDeadline,
                exclusivityDeadline: fillDeadline - 500,
                message: "0x",
            };
        });
        describe("_fillRelay internal logic", function () {
            it("default status is unfilled", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                (0, utils_1.expect)(await spokePool.fillStatuses(relayExecution.relayHash)).to.equal(0 /* Unfilled */);
            });
            it("expired fill deadline reverts", async function () {
                const _relay = {
                    ...relayData,
                    fillDeadline: 0, // Will always be less than SpokePool.currentTime so should expire.
                };
                const relayExecution = await getRelayExecutionParams(_relay, consts.destinationChainId);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                )).to.be.revertedWith("ExpiredFillDeadline");
            });
            it("relay hash already marked filled", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                await spokePool.setFillStatus(relayExecution.relayHash, 2 /* Filled */);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                )).to.be.revertedWith("RelayFilled");
            });
            it("fast fill replacing speed up request emits correct FillType", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                await spokePool.setFillStatus(relayExecution.relayHash, 1 /* RequestedSlowFill */);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                ))
                    .to.emit(spokePool, "FilledV3Relay")
                    .withArgs(relayData.inputToken, relayData.outputToken, relayData.inputAmount, relayData.outputAmount, relayExecution.repaymentChainId, relayData.originChainId, relayData.depositId, relayData.fillDeadline, relayData.exclusivityDeadline, relayData.exclusiveRelayer, relayer.address, relayData.depositor, relayData.recipient, relayData.message, [
                    relayExecution.updatedRecipient,
                    relayExecution.updatedMessage,
                    relayExecution.updatedOutputAmount,
                    1 /* ReplacedSlowFill */,
                ]);
                (0, utils_1.expect)(await spokePool.fillStatuses(relayExecution.relayHash)).to.equal(2 /* Filled */);
            });
            it("slow fill emits correct FillType", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                await destErc20.connect(relayer).transfer(spokePool.address, relayExecution.updatedOutputAmount);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, true // isSlowFill
                ))
                    .to.emit(spokePool, "FilledV3Relay")
                    .withArgs(relayData.inputToken, relayData.outputToken, relayData.inputAmount, relayData.outputAmount, relayExecution.repaymentChainId, relayData.originChainId, relayData.depositId, relayData.fillDeadline, relayData.exclusivityDeadline, relayData.exclusiveRelayer, relayer.address, relayData.depositor, relayData.recipient, relayData.message, [
                    relayExecution.updatedRecipient,
                    relayExecution.updatedMessage,
                    relayExecution.updatedOutputAmount,
                    2 /* SlowFill */,
                ]);
                (0, utils_1.expect)(await spokePool.fillStatuses(relayExecution.relayHash)).to.equal(2 /* Filled */);
            });
            it("fast fill emits correct FillType", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                ))
                    .to.emit(spokePool, "FilledV3Relay")
                    .withArgs(relayData.inputToken, relayData.outputToken, relayData.inputAmount, relayData.outputAmount, relayExecution.repaymentChainId, relayData.originChainId, relayData.depositId, relayData.fillDeadline, relayData.exclusivityDeadline, relayData.exclusiveRelayer, relayer.address, relayData.depositor, relayData.recipient, relayData.message, [
                    relayExecution.updatedRecipient,
                    relayExecution.updatedMessage,
                    relayExecution.updatedOutputAmount,
                    0 /* FastFill */,
                ]);
                (0, utils_1.expect)(await spokePool.fillStatuses(relayExecution.relayHash)).to.equal(2 /* Filled */);
            });
            it("does not transfer funds if msg.sender is recipient unless its a slow fill", async function () {
                const _relayData = {
                    ...relayData,
                    // Set recipient == relayer
                    recipient: relayer.address,
                };
                const relayExecution = await getRelayExecutionParams(_relayData, consts.destinationChainId);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                )).to.not.emit(destErc20, "Transfer");
            });
            it("sends updatedOutputAmount to updatedRecipient", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                const _relayExecution = {
                    ...relayExecution,
                    // Overwrite amount to send to be double the original amount
                    updatedOutputAmount: consts.amountToDeposit.mul(2),
                    // Overwrite recipient to depositor which is not the same as the original recipient
                    updatedRecipient: depositor.address,
                };
                (0, utils_1.expect)(_relayExecution.updatedRecipient).to.not.equal(relayExecution.updatedRecipient);
                (0, utils_1.expect)(_relayExecution.updatedOutputAmount).to.not.equal(relayExecution.updatedOutputAmount);
                await destErc20.connect(relayer).approve(spokePool.address, _relayExecution.updatedOutputAmount);
                await (0, utils_1.expect)(() => spokePool.connect(relayer).fillRelayV3Internal(_relayExecution, relayer.address, false // isSlowFill
                )).to.changeTokenBalance(destErc20, depositor, consts.amountToDeposit.mul(2));
            });
            it("unwraps native token if sending to EOA", async function () {
                const _relayData = {
                    ...relayData,
                    outputToken: weth.address,
                };
                const relayExecution = await getRelayExecutionParams(_relayData, consts.destinationChainId);
                await (0, utils_1.expect)(() => spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                )).to.changeEtherBalance(recipient, relayExecution.updatedOutputAmount);
            });
            it("slow fills send native token out of spoke pool balance", async function () {
                const _relayData = {
                    ...relayData,
                    outputToken: weth.address,
                };
                const relayExecution = await getRelayExecutionParams(_relayData, consts.destinationChainId);
                await weth.connect(relayer).transfer(spokePool.address, relayExecution.updatedOutputAmount);
                const initialSpokeBalance = await weth.balanceOf(spokePool.address);
                await (0, utils_1.expect)(() => spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, true // isSlowFill
                )).to.changeEtherBalance(recipient, relayExecution.updatedOutputAmount);
                const spokeBalance = await weth.balanceOf(spokePool.address);
                (0, utils_1.expect)(spokeBalance).to.equal(initialSpokeBalance.sub(relayExecution.updatedOutputAmount));
            });
            it("slow fills send non-native token out of spoke pool balance", async function () {
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                await destErc20.connect(relayer).transfer(spokePool.address, relayExecution.updatedOutputAmount);
                await (0, utils_1.expect)(() => spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, true // isSlowFill
                )).to.changeTokenBalance(destErc20, spokePool, relayExecution.updatedOutputAmount.mul(-1));
            });
            it("if recipient is contract that implements message handler, calls message handler", async function () {
                // Does nothing if message length is 0
                const acrossMessageHandler = await (0, utils_1.createFake)("AcrossMessageHandlerMock");
                const _relayData = {
                    ...relayData,
                    recipient: acrossMessageHandler.address,
                    message: "0x1234",
                };
                const relayExecution = await getRelayExecutionParams(_relayData, consts.destinationChainId);
                // Handler is called with expected params.
                await spokePool.connect(relayer).fillRelayV3Internal(relayExecution, relayer.address, false // isSlowFill
                );
                (0, utils_1.expect)(acrossMessageHandler.handleV3AcrossMessage).to.have.been.calledOnceWith(_relayData.outputToken, relayExecution.updatedOutputAmount, relayer.address, // Custom relayer
                _relayData.message);
            });
        });
        describe("fillV3Relay", function () {
            it("fills are not paused", async function () {
                await spokePool.pauseFills(true);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillV3Relay(relayData, consts.repaymentChainId)).to.be.revertedWith("FillsArePaused");
            });
            it("reentrancy protected", async function () {
                const functionCalldata = spokePool.interface.encodeFunctionData("fillV3Relay", [
                    relayData,
                    consts.repaymentChainId,
                ]);
                await (0, utils_1.expect)(spokePool.connect(relayer).callback(functionCalldata)).to.be.revertedWith("ReentrancyGuard: reentrant call");
            });
            it("must be exclusive relayer before exclusivity deadline", async function () {
                const _relayData = {
                    ...relayData,
                    // Overwrite exclusive relayer and exclusivity deadline
                    exclusiveRelayer: recipient.address,
                    exclusivityDeadline: relayData.fillDeadline,
                };
                await (0, utils_1.expect)(spokePool.connect(relayer).fillV3Relay(_relayData, consts.repaymentChainId)).to.be.revertedWith("NotExclusiveRelayer");
                // Can send it after exclusivity deadline
                await (0, utils_1.expect)(spokePool.connect(relayer).fillV3Relay({
                    ..._relayData,
                    exclusivityDeadline: 0,
                }, consts.repaymentChainId)).to.not.be.reverted;
            });
            it("calls _fillRelayV3 with  expected params", async function () {
                await (0, utils_1.expect)(spokePool.connect(relayer).fillV3Relay(relayData, consts.repaymentChainId))
                    .to.emit(spokePool, "FilledV3Relay")
                    .withArgs(relayData.inputToken, relayData.outputToken, relayData.inputAmount, relayData.outputAmount, consts.repaymentChainId, // Should be passed-in repayment chain ID
                relayData.originChainId, relayData.depositId, relayData.fillDeadline, relayData.exclusivityDeadline, relayData.exclusiveRelayer, relayer.address, // Should be equal to msg.sender of fillRelayV3
                relayData.depositor, relayData.recipient, relayData.message, [
                    relayData.recipient,
                    relayData.message,
                    relayData.outputAmount,
                    0 /* FastFill */,
                ]);
            });
        });
        describe("fillV3RelayWithUpdatedDeposit", function () {
            let updatedOutputAmount, updatedRecipient, updatedMessage, signature;
            beforeEach(async function () {
                updatedOutputAmount = relayData.outputAmount.add(1);
                updatedRecipient = (0, utils_1.randomAddress)();
                updatedMessage = (0, utils_1.createRandomBytes32)();
                await destErc20.connect(relayer).approve(spokePool.address, updatedOutputAmount);
                signature = await (0, SpokePool_Fixture_1.getUpdatedV3DepositSignature)(depositor, relayData.depositId, relayData.originChainId, updatedOutputAmount, updatedRecipient, updatedMessage);
            });
            it("must be exclusive relayer before exclusivity deadline", async function () {
                const _relayData = {
                    ...relayData,
                    // Overwrite exclusive relayer and exclusivity deadline
                    exclusiveRelayer: recipient.address,
                    exclusivityDeadline: relayData.fillDeadline,
                };
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(_relayData, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.be.revertedWith("NotExclusiveRelayer");
                // Even if not exclusive relayer, can send it after exclusivity deadline
                await (0, utils_1.expect)(spokePool.connect(relayer).fillV3RelayWithUpdatedDeposit({
                    ..._relayData,
                    exclusivityDeadline: 0,
                }, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.not.be.reverted;
                // @dev: However note that if the relayer modifies the relay data in production such that it doesn't match a
                // deposit with the origin chain ID and deposit ID, then the relay will not be refunded. Therefore, this
                // function is not a backdoor to send an invalid fill.
            });
            it("Happy case: updates fill status for relay hash associated with original relay data", async function () {
                // Check event is emitted with updated params
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature))
                    .to.emit(spokePool, "FilledV3Relay")
                    .withArgs(relayData.inputToken, relayData.outputToken, relayData.inputAmount, relayData.outputAmount, consts.repaymentChainId, // Should be passed-in repayment chain ID
                relayData.originChainId, relayData.depositId, relayData.fillDeadline, relayData.exclusivityDeadline, relayData.exclusiveRelayer, relayer.address, // Should be equal to msg.sender
                relayData.depositor, relayData.recipient, relayData.message, [
                    // Should use passed-in updated params:
                    updatedRecipient,
                    updatedMessage,
                    updatedOutputAmount,
                    0 /* FastFill */,
                ]);
                // Check fill status mapping is updated
                const relayExecution = await getRelayExecutionParams(relayData, consts.destinationChainId);
                (0, utils_1.expect)(await spokePool.fillStatuses(relayExecution.relayHash)).to.equal(2 /* Filled */);
            });
            it("validates depositor signature", async function () {
                // Incorrect depositor
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit({ ...relayData, depositor: relayer.address }, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.be.revertedWith("InvalidDepositorSignature");
                // Incorrect signature for new deposit ID
                const otherSignature = await (0, SpokePool_Fixture_1.getUpdatedV3DepositSignature)(depositor, relayData.depositId + 1, relayData.originChainId, updatedOutputAmount, updatedRecipient, updatedMessage);
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, otherSignature)).to.be.revertedWith("InvalidDepositorSignature");
                // Incorrect origin chain ID
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit({ ...relayData, originChainId: relayData.originChainId + 1 }, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.be.revertedWith("InvalidDepositorSignature");
                // Incorrect deposit ID
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit({ ...relayData, depositId: relayData.depositId + 1 }, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.be.revertedWith("InvalidDepositorSignature");
                // Incorrect updated output amount
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount.sub(1), updatedRecipient, updatedMessage, signature)).to.be.revertedWith("InvalidDepositorSignature");
                // Incorrect updated recipient
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount, (0, utils_1.randomAddress)(), updatedMessage, signature)).to.be.revertedWith("InvalidDepositorSignature");
                // Incorrect updated message
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, (0, utils_1.createRandomBytes32)())).to.be.revertedWith("InvalidDepositorSignature");
            });
            it("validates ERC-1271 depositor contract signature", async function () {
                // The MockERC1271 contract returns true for isValidSignature if the signature was signed by the contract's
                // owner, so using the depositor's signature should succeed and using someone else's signature should fail.
                const incorrectSignature = await (0, SpokePool_Fixture_1.getUpdatedV3DepositSignature)(relayer, // not depositor
                relayData.depositId, relayData.originChainId, updatedOutputAmount, updatedRecipient, updatedMessage);
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit({ ...relayData, depositor: erc1271.address }, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, incorrectSignature)).to.be.revertedWith("InvalidDepositorSignature");
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit({ ...relayData, depositor: erc1271.address }, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.not.be.reverted;
            });
            it("cannot send updated fill after original fill", async function () {
                await spokePool.connect(relayer).fillV3Relay(relayData, consts.repaymentChainId);
                await (0, utils_1.expect)(spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature)).to.be.revertedWith("RelayFilled");
            });
            it("cannot send updated fill after slow fill", async function () {
                await spokePool
                    .connect(relayer)
                    .fillV3RelayWithUpdatedDeposit(relayData, consts.repaymentChainId, updatedOutputAmount, updatedRecipient, updatedMessage, signature);
                await (0, utils_1.expect)(spokePool.connect(relayer).fillV3Relay(relayData, consts.repaymentChainId)).to.be.revertedWith("RelayFilled");
            });
        });
    });
});
