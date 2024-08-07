"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/utils");
const utils_2 = require("../../utils/utils");
const HubPool_Fixture_1 = require("../fixtures/HubPool.Fixture");
let hubPool, succinctAdapter, mockSpoke;
let owner;
let telepathyBroadcaster;
const avalancheChainId = 43114;
describe("Succinct Chain Adapter", function () {
    beforeEach(async function () {
        [owner] = await utils_1.ethers.getSigners();
        ({ hubPool, mockSpoke } = await (0, HubPool_Fixture_1.hubPoolFixture)());
        telepathyBroadcaster = await (0, utils_2.createFake)("TelepathyBroadcasterMock");
        succinctAdapter = await (await (0, utils_2.getContractFactory)("Succinct_Adapter", owner)).deploy(telepathyBroadcaster.address, avalancheChainId);
        await hubPool.setCrossChainContracts(avalancheChainId, succinctAdapter.address, mockSpoke.address);
    });
    it("relayMessage calls spoke pool functions", async function () {
        const newAdmin = (0, utils_2.randomAddress)();
        const functionCallData = mockSpoke.interface.encodeFunctionData("setCrossDomainAdmin", [newAdmin]);
        telepathyBroadcaster.send.returns("0x0000000000000000000000000000000000000000000000000000000000000001");
        await (0, utils_1.expect)(hubPool.relaySpokePoolAdminFunction(avalancheChainId, functionCallData))
            .to.emit(succinctAdapter.attach(hubPool.address), "MessageRelayed")
            .withArgs(mockSpoke.address, functionCallData)
            .and.to.emit(succinctAdapter.attach(hubPool.address), "SuccinctMessageRelayed")
            .withArgs("0x0000000000000000000000000000000000000000000000000000000000000001", avalancheChainId, mockSpoke.address, functionCallData);
        (0, utils_1.expect)(telepathyBroadcaster.send).to.have.been.calledWith(avalancheChainId, mockSpoke.address, functionCallData);
    });
});
