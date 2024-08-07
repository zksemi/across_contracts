"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpokePoolInterface__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "DepositsArePaused",
        type: "error",
    },
    {
        inputs: [],
        name: "FillsArePaused",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidCrossDomainAdmin",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidDepositorSignature",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidHubPool",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidRelayerFeePct",
        type: "error",
    },
    {
        inputs: [],
        name: "MaxTransferSizeExceeded",
        type: "error",
    },
    {
        inputs: [],
        name: "NotEOA",
        type: "error",
    },
    {
        inputs: [],
        name: "chainId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
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
    {
        inputs: [
            {
                internalType: "address",
                name: "depositor",
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
        name: "depositFor",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "rootBundleId",
                type: "uint256",
            },
        ],
        name: "emergencyDeleteRootBundle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "rootBundleId",
                type: "uint32",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "amountToReturn",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "chainId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256[]",
                        name: "refundAmounts",
                        type: "uint256[]",
                    },
                    {
                        internalType: "uint32",
                        name: "leafId",
                        type: "uint32",
                    },
                    {
                        internalType: "address",
                        name: "l2TokenAddress",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "refundAddresses",
                        type: "address[]",
                    },
                ],
                internalType: "struct SpokePoolInterface.RelayerRefundLeaf",
                name: "relayerRefundLeaf",
                type: "tuple",
            },
            {
                internalType: "bytes32[]",
                name: "proof",
                type: "bytes32[]",
            },
        ],
        name: "executeRelayerRefundLeaf",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "pause",
                type: "bool",
            },
        ],
        name: "pauseDeposits",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "pause",
                type: "bool",
            },
        ],
        name: "pauseFills",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "relayerRefundRoot",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "slowRelayRoot",
                type: "bytes32",
            },
        ],
        name: "relayRootBundle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newCrossDomainAdmin",
                type: "address",
            },
        ],
        name: "setCrossDomainAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "originToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "destinationChainId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "enable",
                type: "bool",
            },
        ],
        name: "setEnableRoute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newHubPool",
                type: "address",
            },
        ],
        name: "setHubPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class SpokePoolInterface__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SpokePoolInterface__factory = SpokePoolInterface__factory;
SpokePoolInterface__factory.abi = _abi;
