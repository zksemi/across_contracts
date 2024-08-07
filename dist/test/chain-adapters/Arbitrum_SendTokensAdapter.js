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
const consts = __importStar(require("../constants"));
const utils_1 = require("../../utils/utils");
const utils_2 = require("../../utils/utils");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
let hubPool, arbitrumAdapter, weth, mockSpoke;
let gatewayAddress;
let owner, liquidityProvider, refundAddress;
let l1ERC20GatewayRouter;
const arbitrumChainId = 42161;
describe("Arbitrum Chain SendTokens Emergency Adapter", function () {
    beforeEach(async function () {
        [owner, liquidityProvider, refundAddress] = await utils_1.ethers.getSigners();
        ({ weth, hubPool, mockSpoke } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        // Send tokens to HubPool directly.
        await (0, utils_2.seedWallet)(owner, [], weth, consts.amountToLp);
        await weth.transfer(hubPool.address, consts.amountToLp);
        l1ERC20GatewayRouter = await (0, utils_1.createFake)("ArbitrumMockErc20GatewayRouter");
        gatewayAddress = (0, utils_2.randomAddress)();
        l1ERC20GatewayRouter.getGateway.returns(gatewayAddress);
        arbitrumAdapter = await (await (0, utils_2.getContractFactory)("Arbitrum_SendTokensAdapter", owner)).deploy(l1ERC20GatewayRouter.address, refundAddress.address);
        // Seed the HubPool some funds so it can send L1->L2 messages.
        await hubPool.connect(liquidityProvider).loadEthForL2Calls({ value: (0, utils_1.toWei)("1") });
        await hubPool.setCrossChainContracts(arbitrumChainId, arbitrumAdapter.address, mockSpoke.address);
    });
    it("relayMessage sends desired ERC20 in specified amount to SpokePool", async function () {
        const tokensToSendToL2 = consts.amountToLp;
        const message = utils_1.defaultAbiCoder.encode(["address", "uint256"], [weth.address, tokensToSendToL2]);
        (0, utils_1.expect)(await hubPool.relaySpokePoolAdminFunction(arbitrumChainId, message)).to.changeEtherBalances([l1ERC20GatewayRouter], [(0, utils_1.toBN)(consts.sampleL2MaxSubmissionCost).add((0, utils_1.toBN)(consts.sampleL2Gas).mul(consts.sampleL2GasPrice))]);
        (0, utils_1.expect)(l1ERC20GatewayRouter.outboundTransferCustomRefund).to.have.been.calledOnce;
        (0, utils_1.expect)(await weth.allowance(hubPool.address, gatewayAddress)).to.equal(tokensToSendToL2);
        const maxSubmissionCostMessage = utils_1.defaultAbiCoder.encode(["uint256", "bytes"], [consts.sampleL2MaxSubmissionCost, "0x"]);
        (0, utils_1.expect)(l1ERC20GatewayRouter.outboundTransferCustomRefund).to.have.been.calledWith(weth.address, refundAddress.address, mockSpoke.address, tokensToSendToL2, consts.sampleL2GasSendTokens, consts.sampleL2GasPrice, maxSubmissionCostMessage);
    });
});
