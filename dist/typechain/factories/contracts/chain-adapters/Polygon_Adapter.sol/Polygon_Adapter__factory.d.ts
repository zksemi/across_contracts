import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Polygon_Adapter, Polygon_AdapterInterface } from "../../../../contracts/chain-adapters/Polygon_Adapter.sol/Polygon_Adapter";
declare type Polygon_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Polygon_Adapter__factory extends ContractFactory {
    constructor(...args: Polygon_AdapterConstructorParams);
    deploy(_rootChainManager: string, _fxStateSender: string, _depositManager: string, _erc20Predicate: string, _l1Matic: string, _l1Weth: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Polygon_Adapter>;
    getDeployTransaction(_rootChainManager: string, _fxStateSender: string, _depositManager: string, _erc20Predicate: string, _l1Matic: string, _l1Weth: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Polygon_Adapter;
    connect(signer: Signer): Polygon_Adapter__factory;
    static readonly bytecode = "0x6101a034620001a7576200152438819003601f8101601f191683016001600160401b03811184821017620001ab5783928291604052833961010092839181010312620001a7578051906001600160a01b038083168303620001a7576020820151928184168403620001a7576040830151938285168503620001a7576200008860608501620001bf565b916200009760808601620001bf565b9360a0860151958187168703620001a75760c0810151908282168203620001a75760e001519182168203620001a75760a05260c052600760805260e05285526101209384526101409081526101609182526101809283526040519361134f9586620001d587396080518681816104570152610835015260a0518681816106fe01528181610e510152610fb2015260c0518681816103f8015281816106cf0152818161073a015281816107a3015261093b015260e051868181610389015281816105a90152610c7b01525185818161015301526101fe015251848181610b000152610ed801525183818160e10152610c2901525182818161031a0152610aaa0152518181816105070152610f460152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b0382168203620001a75756fe6080806040526004361015610012575f80fd5b5f905f3560e01c90816311eac85514610f6a575080631efd482a14610efc57806337a9c98314610e8e57806352c8c75c1461047b5780636e4009831461041c5780639748cf7c146103ad578063aeeeae9b1461033e578063c55e9e36146102cf578063e6eb8ade14610177578063f5ebf4c4146101085763fd5f2d8314610097575f80fd5b3461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b80fd5b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610105576101aa610fd6565b60243567ffffffffffffffff918282116102bc57366023830112156102bc5781600401359283116102bc57602482019160248436920101116102bc578373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b156102cb578160405180927fb47204770000000000000000000000000000000000000000000000000000000082528183816102608b8b8b60048501611097565b03925af180156102c0576102a8575b50506102a27f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac49360405193849384611097565b0390a180f35b6102b190610ff9565b6102bc57835f61026f565b8380fd5b6040513d84823e3d90fd5b5080fd5b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461010557807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010557602060405163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a28576104ae610fd6565b60243573ffffffffffffffffffffffffffffffffffffffff81168103610a28576064359073ffffffffffffffffffffffffffffffffffffffff82168203610a28578373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168073ffffffffffffffffffffffffffffffffffffffff8616145f146106b657803b156102cb578180916024604051809481937f2e1a7d4d00000000000000000000000000000000000000000000000000000000835260443560048401525af180156102c0576106a2575b5073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b156102cb5781602491604051928380927f4faa8a2600000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff89166004830152604435905af180156102c05761068a575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b955b81604051951685521660208401526044356040840152166060820152a180f35b61069690949294610ff9565b6102bc5791835f61062b565b6106ab90610ff9565b6102bc57835f610591565b505073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016151580610e39575b15610a93577f000000000000000000000000000000000000000000000000000000000000000061076060443573ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016836110f8565b6040517fcb75c11c00000000000000000000000000000000000000000000000000000000815260208160048173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa908115610a34578691610a3f575b50602073ffffffffffffffffffffffffffffffffffffffff916024604051809481937fa56ec6320000000000000000000000000000000000000000000000000000000083528188166004840152165afa908115610a345786916109fe575b50907f000000000000000000000000000000000000000000000000000000000000000063ffffffff1690604435805b6108a957505050509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9561066a565b838111156109f857835b6040517f6fd3504e00000000000000000000000000000000000000000000000000000000815281600482015284602482015273ffffffffffffffffffffffffffffffffffffffff8816604482015273ffffffffffffffffffffffffffffffffffffffff841660648201526020816084818d73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af180156109ed576109a5575b5081039081116109785780610860565b6024887f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b6020813d6020116109e5575b816109be60209383611056565b810103126109e1575167ffffffffffffffff8116036109dd575f610968565b8880fd5b8980fd5b3d91506109b1565b6040513d8c823e3d90fd5b806108b3565b90506020813d602011610a2c575b81610a1960209383611056565b81010312610a2857515f610831565b5f80fd5b3d9150610a0c565b6040513d88823e3d90fd5b90506020813d602011610a8b575b81610a5a60209383611056565b81010312610a87575173ffffffffffffffffffffffffffffffffffffffff81168103610a875760206107d3565b8580fd5b3d9150610a4d565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416145f14610c21578373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016610b436044358273ffffffffffffffffffffffffffffffffffffffff88166110f8565b803b156102cb578180916064604051809481937f8b9e4f9300000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff8b16600484015273ffffffffffffffffffffffffffffffffffffffff8a16602484015260443560448401525af180156102c057610c09575b50509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9561066a565b610c1590949294610ff9565b6102bc5791835f610bc6565b610c646044357f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff86166110f8565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660405190602091604435602082015260208152610cb78161103a565b813b15610a285790916040519283917fe3dec8fb00000000000000000000000000000000000000000000000000000000835273ffffffffffffffffffffffffffffffffffffffff8716600484015273ffffffffffffffffffffffffffffffffffffffff88166024840152606060448401528351908160648501525f5b828110610e225750505f8094506084847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f858585859886010152011681010301925af18015610e1757610dc5575b509173ffffffffffffffffffffffffffffffffffffffff608092817fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9561066a565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b93919450608092610e0b73ffffffffffffffffffffffffffffffffffffffff92610ff9565b5f959294509250610d83565b6040513d5f823e3d90fd5b808601820151878201608401528694508101610d33565b5073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416146106f7565b34610a28575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a2857602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610a28575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a2857602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610a28575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610a285760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610a2857565b67ffffffffffffffff811161100d57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040810190811067ffffffffffffffff82111761100d57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761100d57604052565b9183606094601f9273ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09516865260406020870152816040870152868601375f8582860101520116010190565b9073ffffffffffffffffffffffffffffffffffffffff80921691604051917fdd62ed3e00000000000000000000000000000000000000000000000000000000835230600484015216908160248201526020938482604481875afa918215610e17575f926112c1575b5081018091116112945760405190848201927f095ea7b300000000000000000000000000000000000000000000000000000000845260248301526044820152604481526080810167ffffffffffffffff928282108483111761100d575f92868385946040526111ce8161103a565b527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082865af13d15611287573d91821161100d5761124f9260405192611242867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160185611056565b83523d5f8685013e6112f0565b8051918215918215611267575b5050905015610a2857565b809250819381010312610a285701518015158103610a2857805f8061125c565b61124f92606092506112f0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9091508481813d83116112e9575b6112d98183611056565b81010312610a285751905f611160565b503d6112cf565b901561130a57815115611301575090565b3b15610a285790565b508051908115610a2857602001fdfea26469706673582212208c876b7224ac678489a4b9babc208718e222d2ec1f321a8650a66133fd3b1c6564736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IRootChainManager";
            readonly name: "_rootChainManager";
            readonly type: "address";
        }, {
            readonly internalType: "contract IFxStateSender";
            readonly name: "_fxStateSender";
            readonly type: "address";
        }, {
            readonly internalType: "contract DepositManager";
            readonly name: "_depositManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_erc20Predicate";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l1Matic";
            readonly type: "address";
        }, {
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_l1Usdc";
            readonly type: "address";
        }, {
            readonly internalType: "contract ITokenMessenger";
            readonly name: "_cctpTokenMessenger";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "MessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "TokensRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEPOSIT_MANAGER";
        readonly outputs: readonly [{
            readonly internalType: "contract DepositManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ERC20_PREDICATE";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "FX_STATE_SENDER";
        readonly outputs: readonly [{
            readonly internalType: "contract IFxStateSender";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_MATIC";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_WETH";
        readonly outputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROOT_CHAIN_MANAGER";
        readonly outputs: readonly [{
            readonly internalType: "contract IRootChainManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cctpTokenMessenger";
        readonly outputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recipientCircleDomainId";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "relayMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "usdcToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Polygon_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Polygon_Adapter;
}
export {};
