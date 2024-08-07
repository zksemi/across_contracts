"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpokePoolVerifier__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract SpokePoolInterface",
                name: "spokePool",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "address",
                name: "originToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                internalType: "int64",
                name: "relayerFeePct",
                type: "int64",
            },
            {
                internalType: "uint32",
                name: "quoteTimestamp",
                type: "uint32",
            },
            {
                internalType: "bytes",
                name: "message",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "maxCount",
                type: "uint256",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x608080604052346100165761034b908161001c8239f35b600080fdfe600436101561000d57600080fd5b6000803560e01c63e0db3fcf1461002357600080fd5b610120807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103115773ffffffffffffffffffffffffffffffffffffffff600435818116810361030d576024359282841684036103095760443583811681036103055760a4358060070b81036103015760c4359063ffffffff8216820361029b5760e43567ffffffffffffffff81116102fd57366023820112156102fd57806004013567ffffffffffffffff81116102d0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f84011601166080016080811067ffffffffffffffff8211176102a357908a929160405280608052366024828401011161029f57602091819060240160a0376080010152606435340361029b578585163b1561029b578585163b1561029b57859694929163ffffffff91878a9896946040519a8b997f541f4f14000000000000000000000000000000000000000000000000000000008b523360048c01521660248a01521660448801526064356064880152608435608488015260070b60a48701521660c485015260e484015260805180610124850152845b8181106102805750908391827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6101449389858286010152610104803590850152011681010301923491165af1801561027557610233575080f35b67ffffffffffffffff81116102485760405280f35b6024827f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b6040513d84823e3d90fd5b60a081015187820161014401528795508694506020016101d6565b8780fd5b8280fd5b60248b7f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b60248a7f4e487b710000000000000000000000000000000000000000000000000000000081526041600452fd5b8880fd5b8680fd5b8580fd5b8480fd5b8380fd5b5080fdfea26469706673582212204f81f550f00970671d0755020f959a6599fd76306000e67b424172e1089b949a64736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
class SpokePoolVerifier__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SpokePoolVerifier__factory = SpokePoolVerifier__factory;
SpokePoolVerifier__factory.bytecode = _bytecode;
SpokePoolVerifier__factory.abi = _abi;
