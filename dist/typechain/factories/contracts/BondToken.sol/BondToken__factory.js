"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondToken__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ExtendedHubPoolInterface",
                name: "_hubPool",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "guy",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "Deposit",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "ProposerModified",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "Withdrawal",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [],
        name: "HUB_POOL",
        outputs: [
            {
                internalType: "contract ExtendedHubPoolInterface",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "guy",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "balanceOf",
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
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "proposers",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                internalType: "bool",
                name: "enabled",
                type: "bool",
            },
        ],
        name: "setProposer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
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
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "src",
                type: "address",
            },
            {
                internalType: "address",
                name: "dst",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amt",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "wad",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60a0346200015b57601f620010b538819003918201601f19168301916001600160401b038311848410176200015f578084926020946040528339810103126200015b57516001600160a01b0380821682036200015b576200006b620000655f5462000173565b620001ae565b601a6c2bb930b83832b21022ba3432b960991b015f55620000986200009260015462000173565b62000201565b6008630ae8aa8960e31b016001556002805460ff19166012179055600580546001600160a01b03198116339081179092559091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a362000100620000655f5462000173565b60227020b1b937b9b9902137b732102a37b5b2b760791b015f556200012b6200009260015462000173565b60066210509560ea1b01600155608052604051610e5c90816200025982396080518181816106580152610af60152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b90600182811c92168015620001a3575b60208310146200018f57565b634e487b7160e01b5f52602260045260245ffd5b91607f169162000183565b601f8111620001ba5750565b5f8052601f0160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563908101905b818110620001f5575050565b5f8155600101620001e9565b601f81116200020d5750565b60015f81905290601f0160051c7fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6908101905b8181106200024d57505050565b5f815582016200024056fe6080604081815260048036101561002c575b505050361561002457610022610dbe565b005b610022610dbe565b5f3560e01c92836306fdde03146108e957508263095ea7b31461084f57826318160ddd1461081757826318177497146107b057826323b872dd146107615782632e1a7d4d146106bb578263313ce5671461067c578263597517bb1461060e57826370a08231146105ac578263715018a6146105105782638da5cb5b146104be57826395d89b4114610367578263a9059cbb14610317578263d0e30db0146102e6578263dd62ed3e1461027357508163e9ed9b64146101ab575063f2fde38b146100f7575f8080610011565b346101a75760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75761012e610a93565b610136610e05565b73ffffffffffffffffffffffffffffffffffffffff8091169081156101a757600554827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b5f80fd5b346101a757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a7576101e1610a93565b906024358015158091036101a75773ffffffffffffffffffffffffffffffffffffffff7f4b2ff56cb8140854564224bc2ac25e8d8af40e193e614c06198454b2c580d9619361022e610e05565b1690815f526006602052825f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff831617905582519182526020820152a1005b90346101a757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a7576020916102ad610a93565b6102b5610ab6565b9173ffffffffffffffffffffffffffffffffffffffff8092165f528452825f2091165f528252805f20549051908152f35b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a757610022610dbe565b50346101a757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75760209061035e610354610a93565b6024359033610ad9565b90519015158152f35b90346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a7578051905f9260018054908160011c916001811680156104b4575b6020948585108214610488575083875290811561044a57506001146103f0575b5050506103e2826103ec9403836109c1565b5191829182610a2f565b0390f35b60015f9081529295507fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061043757505050826103ec946103e292820101946103d0565b805486850188015292860192810161041b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016868501525050151560051b83010192506103e2826103ec6103d0565b6022907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b92607f16926103b0565b50346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75760209073ffffffffffffffffffffffffffffffffffffffff600554169051908152f35b346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a757610546610e05565b5f73ffffffffffffffffffffffffffffffffffffffff6005547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b50346101a75760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75760209073ffffffffffffffffffffffffffffffffffffffff6105fc610a93565b165f5260038252805f20549051908152f35b50346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a7576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75760209060ff600254169051908152f35b346101a75760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a7573590335f526003602052805f2080548381106101a7578361070a91610d77565b9055815f8115610758575b5f80809381933390f11561074f57519081527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560203392a2005b513d5f823e3d90fd5b506108fc610715565b50346101a75760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75760209061035e61079f610a93565b6107a7610ab6565b60443591610ad9565b50346101a75760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75760209073ffffffffffffffffffffffffffffffffffffffff610800610a93565b165f526006825260ff815f20541690519015158152f35b50346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a75751478152602090f35b90346101a757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a757602091610889610a93565b9060243590335f52845273ffffffffffffffffffffffffffffffffffffffff835f20921691825f52845280835f205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b82346101a7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101a7575f925f5460018160011c916001811680156109b7575b6020948585108214610488575083875290811561044a575060011461095f575050506103e2826103ec9403836109c1565b5f8080529295507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b8284106109a457505050826103ec946103e292820101946103d0565b8054868501880152928601928101610988565b92607f169261092e565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610a0257604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6020808252825181830181905293925f5b858110610a7f575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b818101830151848201604001528201610a40565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101a757565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101a757565b73ffffffffffffffffffffffffffffffffffffffff9182169291907f00000000000000000000000000000000000000000000000000000000000000008216848114610c3b575b501690815f5260206003815260409180835f2054106101a7573384141580610c02575b610ba1575b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92845f5260038352805f20610b7e838254610d77565b9055855f5260038352805f20610b95838254610db1565b905551908152a3600190565b835f5260048252825f20335f52825280835f2054106101a7577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92845f5260048352805f20335f528352805f20610bf9838254610d77565b90559250610b47565b5060048252825f20335f5282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff835f20541415610b42565b828216805f526006602052604060ff815f205416928315610c65575b505050156101a7575f610b1f565b600492935060e0908251938480927f4144fd610000000000000000000000000000000000000000000000000000000082525afa918215610d6d57908592915f92610cbb575b5050608001511614155f8080610c57565b9150915060e0813d60e011610d65575b81610cd860e093836109c1565b810103126101a75781519160e0830183811067ffffffffffffffff821117610a025781528151835260208201516020840152808201519083015260608101516060830152608081015185811681036101a757608083015260a08101519060ff821682036101a75760c09160a0840152015163ffffffff811681036101a75760c0820152839060805f610caa565b3d9150610ccb565b50513d5f823e3d90fd5b91908203918211610d8457565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b91908201809211610d8457565b335f52600360205260405f20610dd5348254610db1565b90556040513481527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60203392a2565b73ffffffffffffffffffffffffffffffffffffffff6005541633036101a75756fea2646970667358221220a3edcc0069dc23ea91f0834e3da8b640dc9f09b4c832d77c22857b3ae15d4a2764736f6c63430008170033";
const isSuperArgs = (xs) => xs.length > 1;
class BondToken__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_hubPool, overrides) {
        return super.deploy(_hubPool, overrides || {});
    }
    getDeployTransaction(_hubPool, overrides) {
        return super.getDeployTransaction(_hubPool, overrides || {});
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
exports.BondToken__factory = BondToken__factory;
BondToken__factory.bytecode = _bytecode;
BondToken__factory.abi = _abi;
