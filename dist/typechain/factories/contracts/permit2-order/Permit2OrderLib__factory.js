"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permit2OrderLib__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "AfterDeadline",
        type: "error",
    },
    {
        inputs: [],
        name: "InputAndCollateralNotEqual",
        type: "error",
    },
    {
        inputs: [],
        name: "MultipleOutputsNotAllowed",
        type: "error",
    },
    {
        inputs: [],
        name: "ValidationContractNotAllowed",
        type: "error",
    },
    {
        inputs: [],
        name: "WrongSettlerContract",
        type: "error",
    },
];
const _bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220def1476ea4027d4bb7380bc34a23a2785ac2a345b30f98cca491d9a11df3bfd264736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class Permit2OrderLib__factory extends ethers_1.ContractFactory {
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
exports.Permit2OrderLib__factory = Permit2OrderLib__factory;
Permit2OrderLib__factory.bytecode = _bytecode;
Permit2OrderLib__factory.abi = _abi;
