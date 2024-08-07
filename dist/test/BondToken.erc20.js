"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BondToken_Fixture_1 = require("./fixtures/BondToken.Fixture");
const utils_1 = require("../utils/utils");
const constants_1 = require("./constants");
const bondTokenName = "Across Bond Token";
const bondTokenSymbol = "ABT";
const bondTokenDecimals = 18;
let bondToken;
let owner, other, rando;
// Most of this functionality falls through to the underlying WETH9 implementation.
// Testing here just demonstrates that ABT doesn't break anything.
describe("BondToken ERC20 functions", function () {
    beforeEach(async function () {
        [owner, other, rando] = await utils_1.ethers.getSigners();
        ({ bondToken } = await (0, BondToken_Fixture_1.bondTokenFixture)());
    });
    it("Verify name, symbol and decimals", async function () {
        (0, utils_1.expect)(await bondToken.name()).to.equal(bondTokenName);
        (0, utils_1.expect)(await bondToken.symbol()).to.equal(bondTokenSymbol);
        (0, utils_1.expect)(await bondToken.decimals()).to.equal(bondTokenDecimals);
    });
    it("Anyone can deposit into ABT", async function () {
        for (const signer of [owner, other]) {
            const abt = bondToken.connect(signer);
            await (0, utils_1.expect)(abt.deposit({ value: constants_1.bondAmount }))
                .to.emit(bondToken, "Deposit")
                .withArgs(signer.address, constants_1.bondAmount);
            (0, utils_1.expect)((await abt.balanceOf(signer.address)).eq(constants_1.bondAmount)).to.be.true;
        }
    });
    it("ABT holders can withdraw", async function () {
        for (const signer of [owner, other, rando]) {
            await (0, utils_1.seedWallet)(signer, [], bondToken, constants_1.bondAmount);
            (0, utils_1.expect)((await bondToken.balanceOf(signer.address)).eq(constants_1.bondAmount)).to.be.true;
            await (0, utils_1.expect)(bondToken.connect(signer).withdraw(constants_1.bondAmount))
                .to.emit(bondToken, "Withdrawal")
                .withArgs(signer.address, constants_1.bondAmount);
            (0, utils_1.expect)((await bondToken.balanceOf(signer.address)).eq("0")).to.be.true;
        }
    });
    it("ABT holders can transfer", async function () {
        await (0, utils_1.seedWallet)(other, [], bondToken, constants_1.bondAmount);
        (0, utils_1.expect)((await bondToken.balanceOf(other.address)).eq(constants_1.bondAmount)).to.be.true;
        (0, utils_1.expect)((await bondToken.balanceOf(rando.address)).eq("0")).to.be.true;
        await (0, utils_1.expect)(bondToken.connect(other).transfer(rando.address, constants_1.bondAmount))
            .to.emit(bondToken, "Transfer")
            .withArgs(other.address, rando.address, constants_1.bondAmount);
        (0, utils_1.expect)((await bondToken.balanceOf(other.address)).eq("0")).to.be.true;
        (0, utils_1.expect)((await bondToken.balanceOf(rando.address)).eq(constants_1.bondAmount)).to.be.true;
    });
});
