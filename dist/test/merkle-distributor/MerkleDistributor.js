"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/utils");
const common_1 = require("@uma/common");
const constants_1 = require("../constants");
// Contract instances
let merkleDistributor;
let rewardToken;
let accounts;
let contractCreator;
let otherAddress;
// Test variables
let merkleTree;
const hashFn = (input) => input.toString("hex");
let windowIndex;
const sampleIpfsHash = "";
const createLeaf = (recipient) => {
    (0, utils_1.expect)(Object.keys(recipient).every((val) => ["account", "amount", "accountIndex"].includes(val))).to.be.true;
    return Buffer.from(utils_1.ethers.utils
        .solidityKeccak256(["address", "uint256", "uint256"], [recipient.account, recipient.amount, recipient.accountIndex])
        .slice(2), "hex");
};
describe("AcrossMerkleDistributor", () => {
    beforeEach(async () => {
        accounts = await utils_1.ethers.getSigners();
        [contractCreator, otherAddress] = accounts;
        merkleDistributor = await (await (0, utils_1.getContractFactory)("AcrossMerkleDistributor", contractCreator)).deploy();
        rewardToken = await (await (0, utils_1.getContractFactory)("ExpandedERC20", contractCreator)).deploy(`Test Token #1`, `T1`, 18);
        await rewardToken.addMember(constants_1.TokenRolesEnum.MINTER, contractCreator.address);
        await rewardToken.connect(contractCreator).mint(contractCreator.address, common_1.MAX_UINT_VAL);
        await rewardToken.connect(contractCreator).approve(merkleDistributor.address, common_1.MAX_UINT_VAL);
    });
    describe("Basic lifecycle", () => {
        it("Only admin can whitelist claimers", async function () {
            await (0, utils_1.expect)(merkleDistributor.connect(otherAddress).whitelistClaimer(otherAddress.address, true)).to.be.reverted;
        });
        it("claim", async () => {
            const totalRewardAmount = (0, utils_1.toBN)((0, utils_1.toWei)("100")).toString();
            const leaf = createLeaf({
                account: otherAddress.address,
                amount: totalRewardAmount,
                accountIndex: 0,
            });
            merkleTree = new common_1.MerkleTree([leaf], hashFn);
            // Expect this merkle root to be at the first index.
            windowIndex = 0;
            // Seed the merkleDistributor with the root of the tree and additional information.
            await merkleDistributor
                .connect(contractCreator)
                .setWindow(totalRewardAmount, rewardToken.address, merkleTree.getRoot(), sampleIpfsHash);
            // Only claim recipient can claim
            await (0, utils_1.expect)(merkleDistributor.connect(contractCreator).claim({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            })).to.be.revertedWith("invalid claimer");
            const balanceBefore = await rewardToken.balanceOf(otherAddress.address);
            // Claimer can claim:
            await (0, utils_1.expect)(merkleDistributor.connect(otherAddress).claim({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            }))
                .to.emit(merkleDistributor, "Claimed")
                .withArgs(otherAddress.address, 0, otherAddress.address, 0, totalRewardAmount, rewardToken.address);
            // Balance should be sent to claim recipient.
            (0, utils_1.expect)((await rewardToken.balanceOf(otherAddress.address)).sub(balanceBefore)).to.equal(totalRewardAmount);
            // Cannot claim again
            await (0, utils_1.expect)(merkleDistributor.connect(otherAddress).claim({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            })).to.be.revertedWith("Account has already claimed for this window");
        });
        it("claimMulti", async () => {
            const totalRewardAmount = (0, utils_1.toBN)((0, utils_1.toWei)("100")).toString();
            const leaf1 = createLeaf({
                account: otherAddress.address,
                amount: totalRewardAmount,
                accountIndex: 0,
            });
            const leaf2 = createLeaf({
                account: otherAddress.address,
                amount: totalRewardAmount,
                accountIndex: 1,
            });
            merkleTree = new common_1.MerkleTree([leaf1, leaf2], hashFn);
            // Expect this merkle root to be at the first index.
            windowIndex = 0;
            // Seed the merkleDistributor with the root of the tree and additional information.
            await merkleDistributor
                .connect(contractCreator)
                .setWindow((0, utils_1.toBN)(totalRewardAmount).mul(2), rewardToken.address, merkleTree.getRoot(), sampleIpfsHash);
            const claim1 = {
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf1),
            };
            const claim2 = {
                windowIndex,
                account: otherAddress.address,
                accountIndex: 1,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf2),
            };
            // Only claim recipient can claim
            await (0, utils_1.expect)(merkleDistributor.connect(contractCreator).claimMulti([claim1, claim2])).to.be.revertedWith("invalid claimer");
            const balanceBefore = await rewardToken.balanceOf(otherAddress.address);
            // Claimer can claim:
            await (0, utils_1.expect)(() => merkleDistributor.connect(otherAddress).claimMulti([claim1, claim2])).to.changeTokenBalances(rewardToken, [otherAddress], [(0, utils_1.toBN)(totalRewardAmount).mul(2)]);
            // Balance should be sent to claim recipient.
            (0, utils_1.expect)((await rewardToken.balanceOf(otherAddress.address)).sub(balanceBefore)).to.equal((0, utils_1.toBN)(totalRewardAmount).mul(2));
            // Cannot claim again
            await (0, utils_1.expect)(merkleDistributor.connect(otherAddress).claimMulti([claim1, claim2])).to.be.revertedWith("Account has already claimed for this window");
        });
        it("claimFor: events", async () => {
            const totalRewardAmount = (0, utils_1.toBN)((0, utils_1.toWei)("100")).toString();
            const leaf = createLeaf({
                account: otherAddress.address,
                amount: totalRewardAmount,
                accountIndex: 0,
            });
            merkleTree = new common_1.MerkleTree([leaf], hashFn);
            // Expect this merkle root to be at the first index.
            windowIndex = 0;
            // Seed the merkleDistributor with the root of the tree and additional information.
            await merkleDistributor
                .connect(contractCreator)
                .setWindow(totalRewardAmount, rewardToken.address, merkleTree.getRoot(), sampleIpfsHash);
            // Only whitelisted caller can claim
            const balanceBefore = await rewardToken.balanceOf(contractCreator.address);
            await (0, utils_1.expect)(merkleDistributor.connect(contractCreator).claimFor({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            })).to.be.revertedWith("unwhitelisted claimer");
            // Whitelisted claimer can claim:
            await merkleDistributor.whitelistClaimer(contractCreator.address, true);
            // Can claim on behalf of another user
            await (0, utils_1.expect)(merkleDistributor.connect(contractCreator).claimFor({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            }))
                .to.emit(merkleDistributor, "Claimed")
                .withArgs(contractCreator.address, 0, otherAddress.address, 0, totalRewardAmount, rewardToken.address);
            // Balance should be sent to whitelited claimer, not claim recipient.
            (0, utils_1.expect)((await rewardToken.balanceOf(contractCreator.address)).sub(balanceBefore)).to.equal(totalRewardAmount);
            (0, utils_1.expect)(await rewardToken.balanceOf(otherAddress.address)).to.equal(0);
            // Cannot claim again
            await (0, utils_1.expect)(merkleDistributor.connect(contractCreator).claimFor({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            })).to.be.revertedWith("Account has already claimed for this window");
            // Can unwhitelist claimer
            await merkleDistributor.whitelistClaimer(contractCreator.address, false);
            await (0, utils_1.expect)(merkleDistributor.connect(contractCreator).claimFor({
                windowIndex,
                account: otherAddress.address,
                accountIndex: 0,
                amount: totalRewardAmount,
                merkleProof: merkleTree.getProof(leaf),
            })).to.be.revertedWith("unwhitelisted claimer");
            // Emits ClaimFor event
            const eventFilter = merkleDistributor.filters.ClaimFor;
            const events = await merkleDistributor.queryFilter(eventFilter());
            (0, utils_1.expect)(events[0]?.args?.caller).to.equal(contractCreator.address);
            (0, utils_1.expect)(events[0]?.args?.account).to.equal(otherAddress.address);
        });
    });
});
