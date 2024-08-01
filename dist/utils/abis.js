"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCTPTokenMinterInterface = exports.CCTPTokenMessengerInterface = void 0;
exports.CCTPTokenMessengerInterface = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
            },
            {
                internalType: "bytes32",
                name: "mintRecipient",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "burnToken",
                type: "address",
            },
        ],
        name: "depositForBurn",
        outputs: [
            {
                internalType: "uint64",
                name: "_nonce",
                type: "uint64",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "localMinter",
        outputs: [{ internalType: "contract ITokenMinter", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
];
exports.CCTPTokenMinterInterface = [
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "burnLimitsPerMessage",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
];
