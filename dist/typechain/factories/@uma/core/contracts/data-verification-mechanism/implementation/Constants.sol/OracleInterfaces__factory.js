"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OracleInterfaces__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "Bridge",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ChildMessenger",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "CollateralWhitelist",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "FinancialContractsAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "GenericHandler",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "IdentifierWhitelist",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OptimisticOracle",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OptimisticOracleV2",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OptimisticOracleV3",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Oracle",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OracleHub",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OracleSpoke",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Registry",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "SkinnyOptimisticOracle",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "Store",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080806040523461001a576105d7908161001f823930815050f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f3560e01c908163079b6c6314610550575080631a0fbfb3146104fd5780631a4dbd1c146104aa5780632a71e5b31461045757806342e90c33146104045780634596ac9b146103b1578063473e7ccd1461035e5780634f4a180b1461030b578063598dd097146102b85780635fa2ef10146102655780637608ea2f146102125780637db9743b146101bf5780638adca47f1461016c578063f02f8e83146101195763f24a534e146100c3575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7261636c6500000000000000000000000000000000000000000000000000008152f35b5f80fd5b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7074696d69737469634f7261636c65563300000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7261636c6553706f6b650000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f52656769737472790000000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7261636c6548756200000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f42726964676500000000000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f436f6c6c61746572616c57686974656c697374000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4964656e74696669657257686974656c697374000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7074696d69737469634f7261636c65563200000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f536b696e6e794f7074696d69737469634f7261636c65000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f53746f72650000000000000000000000000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f46696e616e6369616c436f6e74726163747341646d696e0000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4f7074696d69737469634f7261636c65000000000000000000000000000000008152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557602090517f4368696c644d657373656e6765720000000000000000000000000000000000008152f35b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011557807f47656e6572696348616e646c657200000000000000000000000000000000000060209252f3fea26469706673582212201019f2b4113ac0d07b6646f38d322b3e62e0a8f00ba67c4c67fdf7961845136664736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class OracleInterfaces__factory extends ethers_1.ContractFactory {
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
exports.OracleInterfaces__factory = OracleInterfaces__factory;
OracleInterfaces__factory.bytecode = _bytecode;
OracleInterfaces__factory.abi = _abi;
