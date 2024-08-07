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
const constants = __importStar(require("./constants"));
let configStore;
let owner, other;
describe("Config Store", function () {
    beforeEach(async function () {
        [owner, other] = await utils_1.ethers.getSigners();
        configStore = await (await (0, utils_1.getContractFactory)("AcrossConfigStore", owner)).deploy();
    });
    it("Updating token config", async function () {
        const l1Token = (0, utils_1.randomAddress)();
        const value = JSON.stringify({
            rateModel: constants.sampleRateModel,
            tokenTransferThreshold: constants.l1TokenTransferThreshold,
        });
        await (0, utils_1.expect)(configStore.connect(other).updateTokenConfig(l1Token, value)).to.be.revertedWith("Ownable: caller is not the owner");
        await (0, utils_1.expect)(configStore.connect(owner).updateTokenConfig(l1Token, value))
            .to.emit(configStore, "UpdatedTokenConfig")
            .withArgs(l1Token, value);
        (0, utils_1.expect)(await configStore.l1TokenConfig(l1Token)).to.equal(value);
    });
    it("Updating global config", async function () {
        const key = (0, utils_1.utf8ToHex)("MAX_POOL_REBALANCE_LEAF_SIZE");
        const value = constants.maxRefundsPerRelayerRefundLeaf.toString();
        await (0, utils_1.expect)(configStore.connect(other).updateGlobalConfig(key, value)).to.be.revertedWith("Ownable: caller is not the owner");
        await (0, utils_1.expect)(configStore.connect(owner).updateGlobalConfig(key, value))
            .to.emit(configStore, "UpdatedGlobalConfig")
            .withArgs(key, value);
        (0, utils_1.expect)(await configStore.globalConfig(key)).to.equal(value);
    });
});
