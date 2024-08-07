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
const common_1 = require("@uma/common");
const utils_1 = require("../utils/utils");
const consts = __importStar(require("./constants"));
const HubPool_Fixture_1 = require("./fixtures/HubPool.Fixture");
let hubPool, weth, optimisticOracle, store, mockOracle;
let owner, dataWorker, liquidityProvider;
describe("HubPool Root Bundle Dispute", function () {
    beforeEach(async function () {
        [owner, dataWorker, liquidityProvider] = await utils_1.ethers.getSigners();
        ({ weth, hubPool, optimisticOracle, store, mockOracle } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        await (0, HubPool_Fixture_1.enableTokensForLP)(owner, hubPool, weth, [weth]);
        await (0, utils_1.seedWallet)(dataWorker, [], weth, consts.totalBond.mul(2));
        await (0, utils_1.seedWallet)(liquidityProvider, [], weth, consts.amountToLp);
        await weth.connect(liquidityProvider).approve(hubPool.address, consts.amountToLp);
        await hubPool.connect(liquidityProvider).addLiquidity(weth.address, consts.amountToLp);
    });
    it("Dispute root bundle correctly deletes the active proposal and enqueues a price request with the OO", async function () {
        await weth.connect(dataWorker).approve(hubPool.address, consts.totalBond.mul(2));
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle(consts.mockBundleEvaluationBlockNumbers, consts.mockPoolRebalanceLeafCount, consts.mockPoolRebalanceRoot, consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        // Increment time to avoid any weirdness with the dispute occuring at the same time as the proposal.
        const proposalTime = await hubPool.getCurrentTime();
        await hubPool.connect(dataWorker).setCurrentTime(proposalTime.add(15));
        await hubPool.connect(dataWorker).disputeRootBundle();
        // Data should be deleted from the contracts refundRequest struct.
        const rootBundle = await hubPool.rootBundleProposal();
        (0, utils_1.expect)(rootBundle.challengePeriodEndTimestamp).to.equal(0);
        (0, utils_1.expect)(rootBundle.unclaimedPoolRebalanceLeafCount).to.equal(0);
        (0, utils_1.expect)(rootBundle.poolRebalanceRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.relayerRefundRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.slowRelayRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.claimedBitMap).to.equal(0); // no claims yet so everything should be marked at 0.
        (0, utils_1.expect)(rootBundle.proposer).to.equal(consts.zeroAddress);
        // HubPool should use `getRootBundleProposalAncillaryData()` return value as the ancillary data that it sends
        // to the oracle, and the oracle should stamp the hub pool's address.
        const priceRequestAddedEvent = (await mockOracle.queryFilter(mockOracle.filters.PriceRequestAdded()))[0].args;
        const priceProposalEvent = (await optimisticOracle.queryFilter(optimisticOracle.filters.ProposePrice()))[0].args;
        (0, utils_1.expect)(priceProposalEvent?.requester).to.equal(hubPool.address);
        (0, utils_1.expect)(priceProposalEvent?.identifier).to.equal(consts.identifier);
        (0, utils_1.expect)(priceProposalEvent?.ancillaryData).to.equal("0x");
        const parsedAncillaryData = (0, common_1.parseAncillaryData)(priceRequestAddedEvent?.ancillaryData);
        (0, utils_1.expect)(utils_1.ethers.utils.getAddress("0x" + parsedAncillaryData?.ooRequester)).to.equal(hubPool.address);
    });
    it("Can not dispute after proposal liveness", async function () {
        await weth.connect(dataWorker).approve(hubPool.address, consts.totalBond.mul(2));
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle(consts.mockBundleEvaluationBlockNumbers, consts.mockPoolRebalanceLeafCount, consts.mockPoolRebalanceRoot, consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        await hubPool.setCurrentTime(Number(await hubPool.getCurrentTime()) + consts.refundProposalLiveness + 1);
        await (0, utils_1.expect)(hubPool.connect(dataWorker).disputeRootBundle()).to.be.revertedWith("Request passed liveness");
    });
    it("Setting final fee equal to bond triggers cancellation", async function () {
        await weth.connect(dataWorker).approve(hubPool.address, consts.totalBond.mul(2));
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle(consts.mockBundleEvaluationBlockNumbers, consts.mockPoolRebalanceLeafCount, consts.mockPoolRebalanceRoot, consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        // Setting the final fee < totalBond should fail this test
        await store.setFinalFee(weth.address, { rawValue: consts.totalBond });
        await (0, utils_1.expect)(() => hubPool.connect(dataWorker).disputeRootBundle()).to.changeTokenBalances(weth, [dataWorker, hubPool], [consts.totalBond, consts.totalBond.mul(-1)]);
        // Data should be deleted from the contracts refundRequest struct.
        const rootBundle = await hubPool.rootBundleProposal();
        (0, utils_1.expect)(rootBundle.challengePeriodEndTimestamp).to.equal(0);
        (0, utils_1.expect)(rootBundle.unclaimedPoolRebalanceLeafCount).to.equal(0);
        (0, utils_1.expect)(rootBundle.poolRebalanceRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.relayerRefundRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.slowRelayRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.claimedBitMap).to.equal(0); // no claims yet so everything should be marked at 0.
        (0, utils_1.expect)(rootBundle.proposer).to.equal(consts.zeroAddress);
        // No proposal should have been made.
        (0, utils_1.expect)((await optimisticOracle.queryFilter(optimisticOracle.filters.ProposePrice())).length).to.equal(0);
    });
    it("Decrease in final fee just reallocates some of final fee to bond", async function () {
        await weth.connect(dataWorker).approve(hubPool.address, consts.totalBond.mul(2));
        await hubPool
            .connect(dataWorker)
            .proposeRootBundle(consts.mockBundleEvaluationBlockNumbers, consts.mockPoolRebalanceLeafCount, consts.mockPoolRebalanceRoot, consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        const newFinalFee = consts.finalFee.div(2);
        const newBond = consts.totalBond.sub(newFinalFee);
        await store.setFinalFee(weth.address, { rawValue: newFinalFee });
        // Note: because the final fee is being halved, it just works out that the net transfer is bondAmount.
        await (0, utils_1.expect)(() => hubPool.connect(dataWorker).disputeRootBundle()).to.changeTokenBalances(weth, [dataWorker, hubPool, optimisticOracle, store], [
            consts.totalBond.mul(-1),
            consts.totalBond.mul(-1),
            consts.totalBond.add(newBond.div(2)),
            newFinalFee.add(newBond.div(2)),
        ]);
        // Data should be deleted from the contracts refundRequest struct.
        const rootBundle = await hubPool.rootBundleProposal();
        (0, utils_1.expect)(rootBundle.challengePeriodEndTimestamp).to.equal(0);
        (0, utils_1.expect)(rootBundle.unclaimedPoolRebalanceLeafCount).to.equal(0);
        (0, utils_1.expect)(rootBundle.poolRebalanceRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.relayerRefundRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.slowRelayRoot).to.equal(consts.zeroBytes32);
        (0, utils_1.expect)(rootBundle.claimedBitMap).to.equal(0); // no claims yet so everything should be marked at 0.
        (0, utils_1.expect)(rootBundle.proposer).to.equal(consts.zeroAddress);
        // Proposal/DVM request should have been made.
        (0, utils_1.expect)((await optimisticOracle.queryFilter(optimisticOracle.filters.ProposePrice())).length).to.equal(1);
    });
});
