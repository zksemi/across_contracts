import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MulticallHandler, MulticallHandlerInterface } from "../../../contracts/handlers/MulticallHandler";
declare type MulticallHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MulticallHandler__factory extends ContractFactory {
    constructor(...args: MulticallHandlerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MulticallHandler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MulticallHandler;
    connect(signer: Signer): MulticallHandler__factory;
    static readonly bytecode = "0x6080806040523461001a5760015f55610bbb908161001f8239f35b5f80fdfe60406080815260048036101561001e575b5050361561001c575f80fd5b005b5f3560e01c9081633a5be8cb14610333578163a58d50d3146100b5575063ef8738d31461004b5780610010565b346100b1577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b1576100806103c5565b60243573ffffffffffffffffffffffffffffffffffffffff811681036100b15761001c916100ac610b29565b61093b565b5f80fd5b9050346100b157602091827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b15767ffffffffffffffff9082358281116100b157366023820112156100b1578084013594602491610117876104f2565b9461012485519687610431565b878652828601908460059960051b840101923684116100b157858101925b848410610296575050505050610156610b29565b8351955f5b87811061016457005b855181101561026b578281831b870101518381019081515115158061024b575b61020c575f91818873ffffffffffffffffffffffffffffffffffffffff859451169101519151918783519301915af16101bb61060f565b50156101c95760010161015b565b8661020887878781519586957fe462c440000000000000000000000000000000000000000000000000000000008752860152840152604483019061054c565b0390fd5b86517fe237730c000000000000000000000000000000000000000000000000000000008152808a0184905280870188905280610208604482018b61054c565b5073ffffffffffffffffffffffffffffffffffffffff8151163b15610184565b836032887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b83358381116100b157820160607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc82360301126100b1578851916102d9836103e8565b8882013573ffffffffffffffffffffffffffffffffffffffff811681036100b15783526044820135928584116100b157606489949361031e86958d36918401016104ac565b8584015201358b820152815201930192610142565b346100b15760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100b15761036a6103c5565b9060443573ffffffffffffffffffffffffffffffffffffffff8116036100b1576064359067ffffffffffffffff82116100b1576103a9913691016104ac565b60025f54146100b1576103bf9160025f5561063e565b60015f55005b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100b157565b6060810190811067ffffffffffffffff82111761040457604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761040457604052565b67ffffffffffffffff811161040457601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f820112156100b1578035906104c382610472565b926104d16040519485610431565b828452602083830101116100b157815f926020809301838601378301015290565b67ffffffffffffffff81116104045760051b60200190565b519073ffffffffffffffffffffffffffffffffffffffff821682036100b157565b5f5b83811061053c5750505f910152565b818101518382015260200161052d565b908082519081815260208091019281808460051b8301019501935f915b8483106105795750505050505090565b90919293949584806001927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090818682030187528a5191601f606073ffffffffffffffffffffffffffffffffffffffff855116845285850151948187860152855180928601526105f18260809789898901910161052b565b60408091015190850152011601019801930193019194939290610569565b3d15610639573d9061062082610472565b9161062e6040519384610431565b82523d5f602084013e565b606090565b81516020908301928184019382828203126100b1578282015167ffffffffffffffff928382116100b157019060409182818303126100b15782519183830183811086821117610404578452858201518581116100b15782019088603f830112156100b157868201516106af816104f2565b996106bc87519b8c610431565b818b5286898c019260051b850101938185116100b157908188809695949301925b85841061086f575050505050506106f7918884520161050a565b938082019385855273ffffffffffffffffffffffffffffffffffffffff809616156107fa57506107b296505f808351855161079281610766878201947fa58d50d3000000000000000000000000000000000000000000000000000000008652886024840152604483019061054c565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08101835282610431565b519082305af16107a061060f565b50156107b4575b50505051169061093b565b565b7f5296f22c5d0413b66d0bf45c479c4e2ca5b278634bdbd028b48e49502105f9669151906107ef86865116945192828493845283019061054c565b0390a25f80806107a7565b94509250509250303b156100b157610847935f91845195869283927fa58d50d30000000000000000000000000000000000000000000000000000000084526004840152602483019061054c565b038183305af180156108655761085c57505050565b82116104045752565b82513d5f823e3d90fd5b9091928094959650518a81116100b15782019060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083880301126100b1578951906108ba826103e8565b6108c58b840161050a565b825260608301518c81116100b15783019185605f840112156100b157828c01518c946108fc6108f383610472565b96519687610431565b81865287606083870101116100b1578f9561092160809388976060898501910161052b565b8584015201518c82015281520193019190889594936106dd565b73ffffffffffffffffffffffffffffffffffffffff91908216908115610af957604051927f70a082310000000000000000000000000000000000000000000000000000000084523060048501526020918285602481875afa948515610aee575f95610abf575b50846109af575b5050505050565b16906040518181017fa9059cbb000000000000000000000000000000000000000000000000000000008152836024830152856044830152604482526080820167ffffffffffffffff91838210838311176104045760c084019283118284101761040457610a5b93855f94938594604052527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082885af1610a5461060f565b9085610b5c565b8051918215918215610a9f575b50509050156100b1577f74d3741ef03417659087d2ec6af11dade8713f9b7f592569d60cf1ea0c9a44555f80a45f808080806109a8565b8092508193810103126100b157015180151581036100b157805f80610a68565b9094508281813d8311610ae7575b610ad78183610431565b810103126100b15751935f6109a1565b503d610acd565b6040513d5f823e3d90fd5b9147915081610b0757505050565b8147106100b1575f92839283928392165af1610b2161060f565b50156100b157565b303303610b3257565b60046040517f29c3b7ee000000000000000000000000000000000000000000000000000000008152fd5b9015610b7657815115610b6d575090565b3b156100b15790565b5080519081156100b157602001fdfea264697066735822122049a0f3490694fd8e8abd28c37de2173fe89aa2fbe486b51969942a1513f56da764736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "CallReverted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "InvalidCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotSelf";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly indexed: false;
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fallbackRecipient";
            readonly type: "address";
        }];
        readonly name: "CallsFailed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "DrainedTokens";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly internalType: "struct MulticallHandler.Call[]";
            readonly name: "calls";
            readonly type: "tuple[]";
        }];
        readonly name: "attemptCalls";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "destination";
            readonly type: "address";
        }];
        readonly name: "drainLeftoverTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "handleV3AcrossMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): MulticallHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MulticallHandler;
}
export {};
