import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintableERC1155, MintableERC1155Interface } from "../../../contracts/erc1155/MintableERC1155";
declare type MintableERC1155ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintableERC1155__factory extends ContractFactory {
    constructor(...args: MintableERC1155ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MintableERC1155>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MintableERC1155;
    connect(signer: Signer): MintableERC1155__factory;
    static readonly bytecode = "0x60803461011d5760208101906001600160401b03821181831017610109575f9160405252600254600190600181811c911680156100ff575b60208210146100eb57601f81116100a4575b5f600281905560038054336001600160a01b031982168117909255604051926001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36115ff90816101228239f35b60025f52601f0160051c7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace908101905b8181106100e15750610049565b5f815582016100d4565b634e487b7160e01b5f52602260045260245ffd5b90607f1690610037565b634e487b7160e01b5f52604160045260245ffd5b5f80fdfe604060808152600480361015610013575f80fd5b5f3560e01c918262fdd58e14610fcb57826301ffc9a714610ede5782630bb78ec114610e865782630e89341c14610e86578263162094c414610c165782632eb2c2d6146109aa5782634e1273f414610884578263715018a6146107e8578263754e5e371461053f5782638da5cb5b146104ee578263a22cb46514610421578263e985e9c5146103a8578263f242432a1461016b57505063f2fde38b146100b7575f80fd5b346101675760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610167576100ee611017565b6100f6611459565b73ffffffffffffffffffffffffffffffffffffffff80911690811561016757600354827fffffffffffffffffffffffff0000000000000000000000000000000000000000821617600355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b5f80fd5b346101675760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610167576101a2611017565b6101aa61103a565b90604435926064359060843567ffffffffffffffff8111610167576101d29036908801611315565b9473ffffffffffffffffffffffffffffffffffffffff80941693338514801561038a575b156101675785169182156101675761020d82611593565b5061021784611593565b50815f526020955f8752815f20865f528752815f2054858110610167578590845f525f8952835f20885f52895203825f2055825f525f8752815f20845f528752815f2061026586825461147a565b905583868351858152878a8201527fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62853392a43b61029f57005b85946102f85f9251988996879586947ff23a6e61000000000000000000000000000000000000000000000000000000009d8e8752339087015260248601526044850152606484015260a0608484015260a48301906111dd565b03925af19182915f9361035b575b5050610332576103146114ec565b6308c379a014610322575f80fd5b61032a611507565b610167575f80fd5b7fffffffff00000000000000000000000000000000000000000000000000000000160361016757005b61037b929350803d10610383575b61037381836110ae565b8101906114b4565b908380610306565b503d610369565b50845f526001602052825f20335f5260205260ff835f2054166101f6565b3461016757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610167576020906103e1611017565b6103e961103a565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f52825260ff815f20541690519015158152f35b3461016757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016757610457611017565b602435908115158092036101675773ffffffffffffffffffffffffffffffffffffffff169182331461016757335f526001602052805f20835f52602052805f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a3005b34610167575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101675760209073ffffffffffffffffffffffffffffffffffffffff600354169051908152f35b90346101675760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016757803590602467ffffffffffffffff8135818111610167576105939036908501611333565b93604492604435936105a3611459565b5f5b875181101561075d5773ffffffffffffffffffffffffffffffffffffffff6105cd828a611418565b51168951602080820182811089821117610732578c525f825282156101675788838b945f8f6105fb8c611593565b5061060585611593565b508b8252818652808220838352865280822061062286825461147a565b90557fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628151918d835286888401523392a48d813b610669575b5050505050506001016105a5565b908392915180809681947ff23a6e6100000000000000000000000000000000000000000000000000000000998a845233908401528c83015f90528d8c84015260648301526084820160a0905260a482016106c2916111dd565b03915a905f91f19182915f93610713575b50506106e1576103146114ec565b7fffffffff00000000000000000000000000000000000000000000000000000000160361016757868a8088818d61065b565b61072a929350803d106103835761037381836110ae565b908c806106d3565b8660418c7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8789878682519260808085019133865260209360208701528501528451809152602060a085019501915f5b8281106107be577f13d0a346ea6c350592dd539c68d5ff6d61d6b8834695625d09834638717193e08680898860608301520390a1005b835173ffffffffffffffffffffffffffffffffffffffff1687529581019592810192600101610788565b34610167575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101675761081e611459565b5f73ffffffffffffffffffffffffffffffffffffffff6003547fffffffffffffffffffffffff00000000000000000000000000000000000000008116600355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461016757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101675767ffffffffffffffff8235818111610167576108d19036908501611333565b92602435918211610167576108e8913691016112b5565b9180519083518203610167577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06109366109218461129d565b9361092e865195866110ae565b80855261129d565b013660208401375f5b8151811015610991578061098073ffffffffffffffffffffffffffffffffffffffff61096d60019486611418565b51166109798389611418565b51906113e3565b61098a8286611418565b520161093f565b8351602080825281906109a6908201866113b0565b0390f35b34610167577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60a081360112610167576109e2611017565b926109eb61103a565b9267ffffffffffffffff9160443583811161016757610a0d90369083016112b5565b9060643584811161016757610a2590369083016112b5565b9360843590811161016757610a3d9036908301611315565b73ffffffffffffffffffffffffffffffffffffffff809816973389148015610bf8575b15610167578351865103610167578716958615610167575f5b8451811015610af057610a8c8186611418565b5190610a988189611418565b51825f5260205f8152885f208d5f528152885f20549382851061016757826001958f835f525f85528c5f20905f528452038a5f20555f525f8152885f20908b5f5252610ae8885f2091825461147a565b905501610a79565b5088929694888685897f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb855186815280610b3f610b308d8a8401906113b0565b828103602084015233956113b0565b0390a43b610b4957005b5195869485947fbc197c8100000000000000000000000000000000000000000000000000000000998a8752339087015260248601526044850160a0905260a48501610b93916113b0565b82858203016064860152610ba6916113b0565b90838203016084840152610bb9916111dd565b03815a6020945f91f15f9181610bd7575b50610332576103146114ec565b610bf191925060203d6020116103835761037381836110ae565b9083610bca565b50885f526001602052845f20335f5260205260ff855f205416610a60565b903461016757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610167578035906024359267ffffffffffffffff93848111610167573660238201121561016757610c7b9036906024818601359101611239565b91610c84611459565b835f52602094818652610c99835f205461105d565b61016757845f52818652825f20918451918211610e5a5750610cbb825461105d565b601f8111610e17575b5085601f8211600114610d535791817f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b96979492610d43945f91610d48575b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c19161790555b519282849384528301906111dd565b0390a2005b905086015189610d03565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0821690835f52875f20915f5b818110610e00575092610d439492600192827f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b9a9b989610610dc9575b5050811b019055610d34565b8801517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690558980610dbd565b91928960018192868b015181550194019201610d80565b825f52865f20601f830160051c810191888410610e50575b601f0160051c01905b818110610e455750610cc4565b5f8155600101610e38565b9091508190610e2f565b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b346101675760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016757816109a692355f52602052610ecb815f2061111c565b90519182916020835260208301906111dd565b90346101675760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016757357fffffffff000000000000000000000000000000000000000000000000000000008116809103610167576020917fd9b67a26000000000000000000000000000000000000000000000000000000008214918215610fa1575b8215610f77575b50519015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000014915083610f6e565b7f0e89341c0000000000000000000000000000000000000000000000000000000081149250610f67565b3461016757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261016757602090611010611007611017565b602435906113e3565b9051908152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361016757565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361016757565b90600182811c921680156110a4575b602083101461107757565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b91607f169161106c565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176110ef57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b9060405191825f825461112e8161105d565b908184526020946001916001811690815f1461119c575060011461115e575b50505061115c925003836110ae565b565b5f90815285812095935091905b81831061118457505061115c93508201015f808061114d565b8554888401850152948501948794509183019161116b565b91505061115c9593507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0091501682840152151560051b8201015f808061114d565b91908251928382525f5b8481106112255750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6020809697860101520116010190565b6020818301810151848301820152016111e7565b92919267ffffffffffffffff82116110ef576040519161128160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601846110ae565b829481845281830111610167578281602093845f960137010152565b67ffffffffffffffff81116110ef5760051b60200190565b9080601f830112156101675760209082356112cf8161129d565b936112dd60405195866110ae565b81855260208086019260051b82010192831161016757602001905b828210611306575050505090565b813581529083019083016112f8565b9080601f830112156101675781602061133093359101611239565b90565b9080601f8301121561016757602090823561134d8161129d565b9361135b60405195866110ae565b81855260208086019260051b82010192831161016757602001905b828210611384575050505090565b813573ffffffffffffffffffffffffffffffffffffffff81168103610167578152908301908301611376565b9081518082526020808093019301915f5b8281106113cf575050505090565b8351855293810193928101926001016113c1565b73ffffffffffffffffffffffffffffffffffffffff16908115610167575f525f60205260405f20905f5260205260405f205490565b805182101561142c5760209160051b010190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff60035416330361016757565b9190820180921161148757565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9081602091031261016757517fffffffff00000000000000000000000000000000000000000000000000000000811681036101675790565b5f9060033d116114f857565b905060045f803e5f5160e01c90565b5f60443d10611330576040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc91823d016004833e815167ffffffffffffffff918282113d6024840111176115825781840194855193841161158a573d850101602084870101116115825750611330929101602001906110ae565b949350505050565b50949350505050565b604051906040820182811067ffffffffffffffff8211176110ef576040526001825260208201602036823782511561142c57529056fea2646970667358221220f956f2a60036d57ea2b161d84c666617bbb4b85f164291fe0822995412203cfd64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "recipients";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "Airdrop";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "TransferBatch";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "URI";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "_tokenURIs";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "recipients";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "airdrop";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }];
        readonly name: "balanceOfBatch";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "ids";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeBatchTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "safeTransferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "setApprovalForAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "tokenURI";
            readonly type: "string";
        }];
        readonly name: "setTokenURI";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "uri";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): MintableERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintableERC1155;
}
export {};
