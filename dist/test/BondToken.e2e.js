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
exports.proposeRootBundle = void 0;
const BondToken_Fixture_1 = require("./fixtures/BondToken.Fixture");
const HubPool_Fixture_1 = require("./fixtures/HubPool.Fixture");
const utils_1 = require("../utils/utils");
const HubPool_ExecuteRootBundle_1 = require("./HubPool.ExecuteRootBundle");
const consts = __importStar(require("./constants"));
let bondToken, hubPool, timer;
let owner, dataworker, other, lp;
let weth, dai;
const proposeRootBundle = (hubPool, dataworker) => {
    return hubPool
        .connect(dataworker)
        .proposeRootBundle(consts.mockBundleEvaluationBlockNumbers, consts.mockPoolRebalanceLeafCount, consts.mockPoolRebalanceRoot, consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
};
exports.proposeRootBundle = proposeRootBundle;
describe("BondToken HubPool interactions", function () {
    beforeEach(async function () {
        let collateralWhitelist;
        [owner, dataworker, other, lp] = await utils_1.ethers.getSigners();
        ({ hubPool, timer, collateralWhitelist, weth, dai } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        ({ bondToken } = await (0, BondToken_Fixture_1.bondTokenFixture)(hubPool));
        await collateralWhitelist.addToWhitelist(bondToken.address);
        // Pre-seed the dataworker, because it always needs bondToken.
        await (0, utils_1.seedWallet)(dataworker, [], bondToken, consts.bondAmount.mul(3));
        // Configure HubPool bond. BondTokenFixture() pre-registers bondToken as accepted OO collateral.
        await (0, utils_1.expect)(hubPool.connect(owner).setBond(bondToken.address, consts.bondAmount))
            .to.emit(hubPool, "BondSet")
            .withArgs(bondToken.address, consts.bondAmount);
        // Set approvals with headroom.
        for (const signer of [dataworker, other]) {
            await bondToken.connect(signer).approve(hubPool.address, consts.totalBond.mul(5));
        }
        // Pre-approve the dataworker as a proposer.
        await (0, utils_1.expect)(bondToken.connect(owner).setProposer(dataworker.address, true))
            .to.emit(bondToken, "ProposerModified")
            .withArgs(dataworker.address, true);
        (0, utils_1.expect)(await bondToken.proposers(dataworker.address)).to.be.true;
    });
    it("Proposers can submit proposals to the HubPool", async function () {
        for (const allowedProposer of [false, true]) {
            const hubPoolBal = await bondToken.balanceOf(hubPool.address);
            const dataworkerBal = await bondToken.balanceOf(dataworker.address);
            // Update the permitted proposers mapping.
            await (0, utils_1.expect)(bondToken.connect(owner).setProposer(dataworker.address, allowedProposer))
                .to.emit(bondToken, "ProposerModified")
                .withArgs(dataworker.address, allowedProposer);
            (0, utils_1.expect)(await bondToken.proposers(dataworker.address)).to.equal(allowedProposer);
            if (!allowedProposer) {
                // Proposal unsuccessful; balances are unchanged.
                await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, dataworker)).to.be.revertedWith("Transfer not permitted");
                (0, utils_1.expect)((await bondToken.balanceOf(hubPool.address)).eq(hubPoolBal)).to.be.true;
                (0, utils_1.expect)((await bondToken.balanceOf(dataworker.address)).eq(dataworkerBal)).to.be.true;
            }
            else {
                // Proposal successful; bondAmount is transferred from proposer to HubPool.
                await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, dataworker)).to.emit(hubPool, "ProposeRootBundle");
                (0, utils_1.expect)((await hubPool.rootBundleProposal()).proposer).to.equal(dataworker.address);
                (0, utils_1.expect)(await bondToken.balanceOf(hubPool.address)).to.equal(hubPoolBal.add(consts.bondAmount));
                (0, utils_1.expect)((await bondToken.balanceOf(dataworker.address)).eq(dataworkerBal.sub(consts.bondAmount))).to.be.true;
            }
        }
    });
    // This test is duplicated from test/HubPool.executeRootBundle(), but uses the custom bond token instead.
    it("Bonds from undisputed proposals can be refunded to the proposer", async function () {
        await (0, utils_1.seedWallet)(lp, [dai], weth, consts.amountToLp.mul(10));
        await (0, HubPool_Fixture_1.enableTokensForLP)(owner, hubPool, weth, [weth, dai]);
        await weth.connect(lp).approve(hubPool.address, consts.amountToLp);
        await hubPool.connect(lp).addLiquidity(weth.address, consts.amountToLp);
        await dai.connect(lp).approve(hubPool.address, consts.amountToLp.mul(10)); // LP with 10000 DAI.
        await hubPool.connect(lp).addLiquidity(dai.address, consts.amountToLp.mul(10));
        const { leaves, tree } = await (0, HubPool_ExecuteRootBundle_1.constructSimpleTree)();
        await hubPool
            .connect(dataworker)
            .proposeRootBundle([3117, 3118], 2, tree.getHexRoot(), consts.mockRelayerRefundRoot, consts.mockSlowRelayRoot);
        // Advance time so the request can be executed and execute both leaves.
        await timer.setCurrentTime(Number(await timer.getCurrentTime()) + consts.refundProposalLiveness + 1);
        await hubPool.connect(dataworker).executeRootBundle(...Object.values(leaves[0]), tree.getHexProof(leaves[0]));
        // Second execution sends bond back to data worker.
        const bondAmount = consts.bondAmount.add(consts.finalFee);
        (0, utils_1.expect)(await hubPool.connect(dataworker).executeRootBundle(...Object.values(leaves[1]), tree.getHexProof(leaves[1]))).to.changeTokenBalances(bondToken, [dataworker, hubPool], [bondAmount, bondAmount.mul(-1)]);
    });
    it("Proposers can self-dispute", async function () {
        await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, dataworker)).to.emit(hubPool, "ProposeRootBundle");
        await (0, utils_1.expect)(hubPool.connect(dataworker).disputeRootBundle()).to.emit(hubPool, "RootBundleDisputed");
    });
    /**
     * Disallowed proposers can self-dispute: the pending root bundle is deleted before ABT transferFrom() is invoked.
     */
    it("Disallowed proposers can self-dispute", async function () {
        await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, dataworker)).to.emit(hubPool, "ProposeRootBundle");
        // Disallow the proposer (with a pending proposal).
        await (0, utils_1.expect)(bondToken.connect(owner).setProposer(dataworker.address, false))
            .to.emit(bondToken, "ProposerModified")
            .withArgs(dataworker.address, false);
        // Proposer can still dispute.
        await (0, utils_1.expect)(hubPool.connect(dataworker).disputeRootBundle())
            .to.emit(hubPool, "RootBundleDisputed")
            .withArgs(dataworker.address, await hubPool.getCurrentTime());
    });
    it("Non-proposers can conditionally send ABT to the HubPool", async function () {
        const bondAmount = consts.bondAmount;
        await (0, utils_1.seedWallet)(other, [], bondToken, bondAmount.mul(3));
        (0, utils_1.expect)((await bondToken.balanceOf(hubPool.address)).eq("0")).to.be.true;
        (0, utils_1.expect)((await bondToken.balanceOf(other.address)).eq(bondAmount.mul(3))).to.be.true;
        // No pending proposal => transfer permitted.
        await (0, utils_1.expect)(bondToken.connect(other).transfer(hubPool.address, bondAmount))
            .to.emit(bondToken, "Transfer")
            .withArgs(other.address, hubPool.address, bondAmount);
        (0, utils_1.expect)((await bondToken.balanceOf(hubPool.address)).eq(bondAmount)).to.be.true;
        (0, utils_1.expect)((await bondToken.balanceOf(other.address)).eq(bondAmount.mul(2))).to.be.true;
        // Pending proposal from a proposer => transfer permitted (emulates dispute).
        await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, dataworker)).to.emit(hubPool, "ProposeRootBundle");
        (0, utils_1.expect)((await bondToken.balanceOf(hubPool.address)).eq(bondAmount.mul(2))).to.be.true;
        await (0, utils_1.expect)(bondToken.connect(other).transfer(hubPool.address, bondAmount))
            .to.emit(bondToken, "Transfer")
            .withArgs(other.address, hubPool.address, bondAmount);
        (0, utils_1.expect)((await bondToken.balanceOf(hubPool.address)).eq(bondAmount.mul(3))).to.be.true;
        (0, utils_1.expect)((await bondToken.balanceOf(other.address)).eq(bondAmount)).to.be.true;
    });
    it("Non-proposers can not submit proposals to the HubPool", async function () {
        await (0, utils_1.seedWallet)(other, [], bondToken, consts.bondAmount);
        (0, utils_1.expect)(await bondToken.balanceOf(other.address)).to.equal(consts.bondAmount);
        await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, other)).to.be.revertedWith("Transfer not permitted");
    });
    it("Non-proposers can dispute root bundle proposals", async function () {
        await (0, utils_1.seedWallet)(other, [], bondToken, consts.bondAmount);
        (0, utils_1.expect)(await bondToken.balanceOf(other.address)).to.equal(consts.bondAmount);
        const hubPoolBal = await bondToken.balanceOf(hubPool.address);
        const dataworkerBal = await bondToken.balanceOf(dataworker.address);
        await (0, utils_1.expect)((0, exports.proposeRootBundle)(hubPool, dataworker)).to.emit(hubPool, "ProposeRootBundle");
        (0, utils_1.expect)((await hubPool.rootBundleProposal()).proposer).to.equal(dataworker.address);
        // Verify that other is not a proposer. HubPool is already an approved spender of other's bondToken.
        (0, utils_1.expect)(await bondToken.proposers(other.address)).to.be.false;
        await (0, utils_1.expect)(hubPool.connect(other).disputeRootBundle())
            .to.emit(hubPool, "RootBundleDisputed")
            .withArgs(other.address, await hubPool.getCurrentTime());
    });
});
