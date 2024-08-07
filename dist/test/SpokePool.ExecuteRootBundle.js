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
const consts = __importStar(require("./constants"));
const SpokePool_Fixture_1 = require("./fixtures/SpokePool.Fixture");
const MerkleLib_utils_1 = require("./MerkleLib.utils");
let spokePool, destErc20, weth;
let dataWorker, relayer, rando;
let destinationChainId;
async function constructSimpleTree(l2Token, destinationChainId) {
    const leaves = (0, MerkleLib_utils_1.buildRelayerRefundLeaves)([destinationChainId, destinationChainId], // Destination chain ID.
    [consts.amountToReturn, (0, utils_1.toBN)(0)], // amountToReturn.
    [l2Token.address, l2Token.address], // l2Token.
    [[relayer.address, rando.address], []], // refundAddresses.
    [[consts.amountToRelay, consts.amountToRelay], []] // refundAmounts.
    );
    const leavesRefundAmount = leaves
        .map((leaf) => leaf.refundAmounts.reduce((bn1, bn2) => bn1.add(bn2), (0, utils_1.toBN)(0)))
        .reduce((bn1, bn2) => bn1.add(bn2), (0, utils_1.toBN)(0));
    const tree = await (0, MerkleLib_utils_1.buildRelayerRefundTree)(leaves);
    return { leaves, leavesRefundAmount, tree };
}
describe("SpokePool Root Bundle Execution", function () {
    beforeEach(async function () {
        [dataWorker, relayer, rando] = await utils_1.ethers.getSigners();
        ({ destErc20, spokePool, weth } = await (0, SpokePool_Fixture_1.spokePoolFixture)());
        destinationChainId = Number(await spokePool.chainId());
        // Send funds to SpokePool.
        await (0, utils_1.seedContract)(spokePool, dataWorker, [destErc20], weth, consts.amountHeldByPool);
    });
    it("Execute relayer root correctly sends tokens to recipients", async function () {
        const { leaves, leavesRefundAmount, tree } = await constructSimpleTree(destErc20, destinationChainId);
        // Store new tree.
        await spokePool.connect(dataWorker).relayRootBundle(tree.getHexRoot(), // relayer refund root. Generated from the merkle tree constructed before.
        consts.mockSlowRelayRoot);
        // Distribute the first leaf.
        await spokePool.connect(dataWorker).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]));
        // Relayers should be refunded
        (0, utils_1.expect)(await destErc20.balanceOf(spokePool.address)).to.equal(consts.amountHeldByPool.sub(leavesRefundAmount));
        (0, utils_1.expect)(await destErc20.balanceOf(relayer.address)).to.equal(consts.amountToRelay);
        (0, utils_1.expect)(await destErc20.balanceOf(rando.address)).to.equal(consts.amountToRelay);
        // Check events.
        let relayTokensEvents = await spokePool.queryFilter(spokePool.filters.ExecutedRelayerRefundRoot());
        (0, utils_1.expect)(relayTokensEvents[0].args?.l2TokenAddress).to.equal(destErc20.address);
        (0, utils_1.expect)(relayTokensEvents[0].args?.leafId).to.equal(0);
        (0, utils_1.expect)(relayTokensEvents[0].args?.chainId).to.equal(destinationChainId);
        (0, utils_1.expect)(relayTokensEvents[0].args?.amountToReturn).to.equal(consts.amountToReturn);
        (0, utils_1.expect)(relayTokensEvents[0].args?.refundAmounts.map((v) => v.toString())).to.deep.equal([consts.amountToRelay, consts.amountToRelay].map((v) => v.toString()));
        (0, utils_1.expect)(relayTokensEvents[0].args?.refundAddresses).to.deep.equal([relayer.address, rando.address]);
        // Should emit TokensBridged event if amountToReturn is positive.
        let tokensBridgedEvents = await spokePool.queryFilter(spokePool.filters.TokensBridged());
        (0, utils_1.expect)(tokensBridgedEvents.length).to.equal(1);
        // Does not attempt to bridge tokens if amountToReturn is 0. Execute a leaf where amountToReturn is 0.
        await spokePool.connect(dataWorker).executeRelayerRefundLeaf(0, leaves[1], tree.getHexProof(leaves[1]));
        // Show that a second DistributedRelayRefund event was emitted but not a second TokensBridged event.
        relayTokensEvents = await spokePool.queryFilter(spokePool.filters.ExecutedRelayerRefundRoot());
        (0, utils_1.expect)(relayTokensEvents.length).to.equal(2);
        tokensBridgedEvents = await spokePool.queryFilter(spokePool.filters.TokensBridged());
        (0, utils_1.expect)(tokensBridgedEvents.length).to.equal(1);
    });
    it("Execution rejects invalid leaf, tree, proof combinations", async function () {
        const { leaves, tree } = await constructSimpleTree(destErc20, destinationChainId);
        await spokePool.connect(dataWorker).relayRootBundle(tree.getHexRoot(), // distribution root. Generated from the merkle tree constructed before.
        consts.mockSlowRelayRoot);
        // Take the valid root but change some element within it. This will change the hash of the leaf
        // and as such the contract should reject it for not being included within the merkle tree for the valid proof.
        const badLeaf = { ...leaves[0], chainId: 13371 };
        await (0, utils_1.expect)(spokePool.connect(dataWorker).executeRelayerRefundLeaf(0, badLeaf, tree.getHexProof(leaves[0]))).to.be
            .reverted;
        // Reverts if the distribution root index is incorrect.
        await (0, utils_1.expect)(spokePool.connect(dataWorker).executeRelayerRefundLeaf(1, leaves[0], tree.getHexProof(leaves[0]))).to
            .be.reverted;
    });
    it("Cannot refund leaf with chain ID for another network", async function () {
        // Create tree for another chain ID
        const { leaves, tree } = await constructSimpleTree(destErc20, 13371);
        await spokePool.connect(dataWorker).relayRootBundle(tree.getHexRoot(), // distribution root. Generated from the merkle tree constructed before.
        consts.mockSlowRelayRoot);
        // Root is valid and leaf is contained in tree, but chain ID doesn't match pool's chain ID.
        await (0, utils_1.expect)(spokePool.connect(dataWorker).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]))).to
            .be.reverted;
    });
    it("Execution rejects double claimed leaves", async function () {
        const { leaves, tree } = await constructSimpleTree(destErc20, destinationChainId);
        await spokePool.connect(dataWorker).relayRootBundle(tree.getHexRoot(), // distribution root. Generated from the merkle tree constructed before.
        consts.mockSlowRelayRoot);
        // First claim should be fine. Second claim should be reverted as you cant double claim a leaf.
        await spokePool.connect(dataWorker).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]));
        await (0, utils_1.expect)(spokePool.connect(dataWorker).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]))).to
            .be.reverted;
    });
    describe("_distributeRelayerRefunds", function () {
        it("refund address length mismatch", async function () {
            await (0, utils_1.expect)(spokePool
                .connect(dataWorker)
                .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(1), [consts.amountToRelay, consts.amountToRelay, (0, utils_1.toBN)(0)], 0, destErc20.address, [relayer.address, rando.address])).to.be.revertedWith("InvalidMerkleLeaf");
        });
        describe("amountToReturn > 0", function () {
            it("calls _bridgeTokensToHubPool", async function () {
                await (0, utils_1.expect)(spokePool
                    .connect(dataWorker)
                    .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(1), [], 0, destErc20.address, []))
                    .to.emit(spokePool, "BridgedToHubPool")
                    .withArgs((0, utils_1.toBN)(1), destErc20.address);
            });
            it("emits TokensBridged", async function () {
                await (0, utils_1.expect)(spokePool
                    .connect(dataWorker)
                    .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(1), [], 0, destErc20.address, []))
                    .to.emit(spokePool, "TokensBridged")
                    .withArgs((0, utils_1.toBN)(1), destinationChainId, 0, destErc20.address, dataWorker.address);
            });
        });
        describe("amountToReturn = 0", function () {
            it("does not call _bridgeTokensToHubPool", async function () {
                await (0, utils_1.expect)(spokePool
                    .connect(dataWorker)
                    .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(0), [], 0, destErc20.address, [])).to.not.emit(spokePool, "BridgedToHubPool");
            });
            it("does not emit TokensBridged", async function () {
                await (0, utils_1.expect)(spokePool
                    .connect(dataWorker)
                    .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(0), [], 0, destErc20.address, [])).to.not.emit(spokePool, "TokensBridged");
            });
        });
        describe("some refundAmounts > 0", function () {
            it("sends one Transfer per nonzero refundAmount", async function () {
                await (0, utils_1.expect)(() => spokePool
                    .connect(dataWorker)
                    .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(1), [consts.amountToRelay, consts.amountToRelay, (0, utils_1.toBN)(0)], 0, destErc20.address, [relayer.address, rando.address, rando.address])).to.changeTokenBalances(destErc20, [spokePool, relayer, rando], [consts.amountToRelay.mul(-2), consts.amountToRelay, consts.amountToRelay]);
                const transferLogCount = (await destErc20.queryFilter(destErc20.filters.Transfer(spokePool.address))).length;
                (0, utils_1.expect)(transferLogCount).to.equal(2);
            });
            it("also bridges tokens to hub pool if amountToReturn > 0", async function () {
                await (0, utils_1.expect)(spokePool
                    .connect(dataWorker)
                    .distributeRelayerRefunds(destinationChainId, (0, utils_1.toBN)(1), [consts.amountToRelay, consts.amountToRelay, (0, utils_1.toBN)(0)], 0, destErc20.address, [relayer.address, rando.address, rando.address]))
                    .to.emit(spokePool, "BridgedToHubPool")
                    .withArgs((0, utils_1.toBN)(1), destErc20.address);
            });
        });
    });
});
