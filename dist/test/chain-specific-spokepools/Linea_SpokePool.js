"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const utils_1 = require("../../utils/utils");
const utils_hre_1 = require("../../utils/utils.hre");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
const MerkleLib_utils_1 = require("../MerkleLib.utils");
const smock_1 = require("@defi-wonderland/smock");
let hubPool, lineaSpokePool, dai, weth, usdc;
let owner, relayer, rando;
let lineaMessageService, lineaTokenBridge, lineaUsdcBridge;
const lineaMessageServiceAbi = [
    {
        inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_fee", type: "uint256" },
            { internalType: "bytes", name: "_calldata", type: "bytes" },
        ],
        name: "sendMessage",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "sender",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minimumFeeInWei",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const lineaTokenBridgeAbi = [
    {
        inputs: [
            { internalType: "address", name: "_token", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "address", name: "_recipient", type: "address" },
        ],
        name: "bridgeToken",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const lineaUsdcBridgeAbi = [
    {
        inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
        ],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "usdc",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
describe("Linea Spoke Pool", function () {
    beforeEach(async function () {
        [owner, relayer, rando] = await utils_1.ethers.getSigners();
        ({ weth, dai, usdc, hubPool } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        lineaMessageService = await smock_1.smock.fake(lineaMessageServiceAbi, {
            address: "0x508Ca82Df566dCD1B0DE8296e70a96332cD644ec",
        });
        lineaMessageService.minimumFeeInWei.returns(0);
        lineaMessageService.sender.reset();
        lineaTokenBridge = await smock_1.smock.fake(lineaTokenBridgeAbi, { address: "0x353012dc4a9A6cF55c941bADC267f82004A8ceB9" });
        lineaUsdcBridge = await smock_1.smock.fake(lineaUsdcBridgeAbi, {
            address: "0xA2Ee6Fce4ACB62D95448729cDb781e3BEb62504A",
        });
        lineaUsdcBridge.usdc.returns(usdc.address);
        await owner.sendTransaction({ to: lineaMessageService.address, value: (0, utils_1.toWei)("1") });
        lineaSpokePool = await utils_hre_1.hre.upgrades.deployProxy(await (0, utils_1.getContractFactory)("Linea_SpokePool", owner), [
            0,
            lineaMessageService.address,
            lineaTokenBridge.address,
            lineaUsdcBridge.address,
            owner.address,
            hubPool.address,
        ], { kind: "uups", unsafeAllow: ["delegatecall"], constructorArgs: [weth.address, 60 * 60, 9 * 60 * 60] });
        await (0, utils_1.seedContract)(lineaSpokePool, relayer, [dai, usdc], weth, constants_1.amountHeldByPool);
    });
    it("Only cross domain owner upgrade logic contract", async function () {
        const implementation = await utils_hre_1.hre.upgrades.deployImplementation(await (0, utils_1.getContractFactory)("Linea_SpokePool", owner), {
            kind: "uups",
            unsafeAllow: ["delegatecall"],
            constructorArgs: [weth.address, 60 * 60, 9 * 60 * 60],
        });
        // upgradeTo fails unless called by cross domain admin
        await (0, utils_1.expect)(lineaSpokePool.connect(lineaMessageService.wallet).upgradeTo(implementation)).to.be.revertedWith("ONLY_COUNTERPART_GATEWAY");
        lineaMessageService.sender.returns(owner.address);
        // msg.sender must be lineaMessageService
        await (0, utils_1.expect)(lineaSpokePool.connect(owner).upgradeTo(implementation)).to.be.revertedWith("ONLY_COUNTERPART_GATEWAY");
        await lineaSpokePool.connect(lineaMessageService.wallet).upgradeTo(implementation);
    });
    it("Only cross domain owner can set l2MessageService", async function () {
        await (0, utils_1.expect)(lineaSpokePool.setL2MessageService(lineaMessageService.wallet)).to.be.reverted;
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).setL2MessageService(rando.address);
        (0, utils_1.expect)(await lineaSpokePool.l2MessageService()).to.equal(rando.address);
    });
    it("Only cross domain owner can set l2TokenBridge", async function () {
        await (0, utils_1.expect)(lineaSpokePool.setL2TokenBridge(lineaMessageService.wallet)).to.be.reverted;
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).setL2TokenBridge(rando.address);
        (0, utils_1.expect)(await lineaSpokePool.l2TokenBridge()).to.equal(rando.address);
    });
    it("Only cross domain owner can set l2UsdcBridge", async function () {
        await (0, utils_1.expect)(lineaSpokePool.setL2UsdcBridge(lineaMessageService.wallet)).to.be.reverted;
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).setL2UsdcBridge(rando.address);
        (0, utils_1.expect)(await lineaSpokePool.l2UsdcBridge()).to.equal(rando.address);
    });
    it("Only cross domain owner can relay admin root bundles", async function () {
        const { tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(dai.address, await lineaSpokePool.callStatic.chainId());
        await (0, utils_1.expect)(lineaSpokePool.relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot)).to.be.revertedWith("ONLY_COUNTERPART_GATEWAY");
    });
    it("Anti-DDoS message fee needs to be set", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(dai.address, await lineaSpokePool.callStatic.chainId());
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        lineaMessageService.sender.reset();
        lineaMessageService.minimumFeeInWei.returns(1);
        await (0, utils_1.expect)(lineaSpokePool.connect(relayer).executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]))).to.be.revertedWith("MESSAGE_FEE_MISMATCH");
    });
    it("Bridge tokens to hub pool correctly calls the L2 Token Bridge for ERC20", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(dai.address, await lineaSpokePool.callStatic.chainId());
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        // Simulate if the fee is positive to ensure that the contract unwraps enough ETH to cover the fee.
        const fee = (0, utils_1.toWei)("0.01");
        lineaMessageService.minimumFeeInWei.returns(fee);
        await lineaSpokePool
            .connect(relayer)
            .executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]), { value: fee });
        // Ensure that linea message service is paid the fee by the LineaSpokePool contract to send an L2 to L1 message.
        (0, utils_1.expect)(lineaTokenBridge.bridgeToken).to.have.been.calledWithValue(fee);
        // This should have sent tokens back to L1. Check the correct methods on the gateway are correctly called.
        (0, utils_1.expect)(lineaTokenBridge.bridgeToken).to.have.been.calledWith(dai.address, constants_1.amountToReturn, hubPool.address);
    });
    it("Bridge USDC to hub pool correctly calls the L2 USDC Bridge", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(usdc.address, await lineaSpokePool.callStatic.chainId());
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        const fee = (0, utils_1.toWei)("0.01");
        lineaMessageService.minimumFeeInWei.returns(fee);
        await lineaSpokePool
            .connect(relayer)
            .executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]), { value: fee });
        // This should have sent tokens back to L1. Check the correct methods on the gateway are correctly called.
        (0, utils_1.expect)(lineaUsdcBridge.depositTo).to.have.been.calledWith(constants_1.amountToReturn, hubPool.address);
        (0, utils_1.expect)(lineaUsdcBridge.depositTo).to.have.been.calledWithValue(fee);
    });
    it("Bridge ETH to hub pool correctly calls the Standard L2 Bridge for WETH, including unwrap", async function () {
        const { leaves, tree } = await (0, MerkleLib_utils_1.constructSingleRelayerRefundTree)(weth.address, await lineaSpokePool.callStatic.chainId());
        lineaMessageService.sender.returns(owner.address);
        await lineaSpokePool.connect(lineaMessageService.wallet).relayRootBundle(tree.getHexRoot(), constants_1.mockTreeRoot);
        const fee = (0, utils_1.toWei)("0.01");
        lineaMessageService.minimumFeeInWei.returns(fee);
        // Executing the refund leaf should cause spoke pool to unwrap WETH to ETH to prepare to send it as msg.value
        // to the ERC20 bridge. This results in a net decrease in WETH balance.
        await (0, utils_1.expect)(() => lineaSpokePool
            .connect(relayer)
            .executeRelayerRefundLeaf(0, leaves[0], tree.getHexProof(leaves[0]), { value: fee })).to.changeTokenBalance(weth, lineaSpokePool, constants_1.amountToReturn.mul(-1));
        (0, utils_1.expect)(lineaMessageService.sendMessage).to.have.been.calledWith(hubPool.address, fee, "0x");
        (0, utils_1.expect)(lineaMessageService.sendMessage).to.have.been.calledWithValue(constants_1.amountToReturn.add(fee));
    });
});
