import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Arbitrum_Adapter, Arbitrum_AdapterInterface } from "../../../../contracts/chain-adapters/Arbitrum_Adapter.sol/Arbitrum_Adapter";
declare type Arbitrum_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Arbitrum_Adapter__factory extends ContractFactory {
    constructor(...args: Arbitrum_AdapterConstructorParams);
    deploy(_l1ArbitrumInbox: string, _l1ERC20GatewayRouter: string, _l2RefundL2Address: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Arbitrum_Adapter>;
    getDeployTransaction(_l1ArbitrumInbox: string, _l1ERC20GatewayRouter: string, _l2RefundL2Address: string, _l1Usdc: string, _cctpTokenMessenger: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Arbitrum_Adapter;
    connect(signer: Signer): Arbitrum_Adapter__factory;
    static readonly bytecode = "0x6101403461012257601f61123f38819003918201601f19168301916001600160401b038311848410176101265780849260a094604052833981010312610122578051906001600160a01b03908183168303610122576020810151918083168303610122576040820151918183168303610122576060810151908282168203610122576080015191821682036101225760a05260c052600360805261010092835261012091825260e05260405190611104928361013b84396080518381816105ae015261072a015260a05183818161067301528181610b7c0152610cc5015260c0518381816105500152610643015260e0518381816101c0015281816103c20152610ad401525182818161021a015261030801525181818161046b01526109140152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604081815260049182361015610015575f80fd5b5f3560e01c90816306dd524814610ce95750806311eac85514610c7b5780631fc1ba7614610be057806328f2716e14610ba557806352c8c75c146105d25780636e400983146105745780639748cf7c14610506578063a2531669146104c7578063a567bbf01461048f578063b077d39914610421578063c735281e146103e6578063cc7a329014610378578063e5216af71461032c578063e585cc47146102be5763e6eb8ade146100c4575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576100f5610d24565b916024359167ffffffffffffffff83116102a957366023840112156102a957828201359361012285610dd1565b9461012f83519687610d90565b80865260209436602483830101116102a957815f926024889301838a01378701015266470de4df820000908147106102a957849073ffffffffffffffffffffffffffffffffffffffff8091855194859384927f679b6ded0000000000000000000000000000000000000000000000000000000084521680988301525f6024830152662386f26fc100006044830152827f0000000000000000000000000000000000000000000000000000000000000000168060648401526084830152621e848060a483015264012a05f20060c483015261010060e48301528161021661010482018c610e8e565b03927f0000000000000000000000000000000000000000000000000000000000000000165af180156102b457610286575b507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac493818061028193519586958652850152830190610e8e565b0390a1005b8390813d83116102ad575b61029b8183610d90565b810103126102a9575f610247565b5f80fd5b503d610291565b82513d5f823e3d90fd5b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051736b175474e89094c44da98b954eedeac495271d0f8152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051621e84808152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a957602090515f8152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051662386f26fc100008152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a957610606610d24565b91602490813573ffffffffffffffffffffffffffffffffffffffff8082168092036102a95760648035828116966044803597928990036102a957847f00000000000000000000000000000000000000000000000000000000000000001680151580610b78575b156108f8577f00000000000000000000000000000000000000000000000000000000000000009061069e8a8284610ed1565b88517fcb75c11c00000000000000000000000000000000000000000000000000000000815260209283828781865afa9182156108b1578993929185915f936108bb575b50841691888d51809681937fa56ec632000000000000000000000000000000000000000000000000000000008352868c840152165afa9283156108b1575f93610882575b5091967f000000000000000000000000000000000000000000000000000000000000000063ffffffff1692908c805b6107a25750505050505050505050917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b959391608095935b82519516855260208501528301526060820152a1005b8c8f8b83111561087b578b915b51907f6fd3504e000000000000000000000000000000000000000000000000000000008252828b830152878c83015289820152848482015287816084815f8a5af1801561087157610836575b50810390811161080b5780610754565b886011897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8781813d831161086a575b61084b8183610d90565b810103126102a9575167ffffffffffffffff8116036102a9575f6107fb565b503d610841565b8f513d5f823e3d90fd5b82916107af565b9092508381813d83116108aa575b61089a8183610d90565b810103126102a95751915f610725565b503d610890565b8b513d5f823e3d90fd5b9250935081813d83116108f1575b6108d38183610d90565b810103126102a957519188831683036102a9578389809492906106e1565b503d6108c9565b505091506628db3066eac0009796959497908147106102a957837f0000000000000000000000000000000000000000000000000000000000000000168951927fbda009fe000000000000000000000000000000000000000000000000000000008452858a169081868601526020858581865afa948515610b6e578a958a915f91610b29575b50906109899184610ed1565b8b5195662386f26fc1000060208801528c808801525f6060880152606087526109b187610d47565b8c736b175474e89094c44da98b954eedeac495271d0f8403610a9c575f9697610a309151988997889687957fd2ce7d650000000000000000000000000000000000000000000000000000000087528601528401528b6044840152620493e0606484015264012a05f200608484015260c060a484015260c4830190610e8e565b03925af18015610a925791608096959493917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9893610a70575b5061078c565b610a8b903d805f833e610a838183610d90565b810190610e2c565b505f610a6a565b87513d5f823e3d90fd5b5f9650610a309051978896879586947f4fb1a07b0000000000000000000000000000000000000000000000000000000086528501528a7f000000000000000000000000000000000000000000000000000000000000000016908401528c60448401528b6064840152620493e0608484015264012a05f20060a484015260e060c484015260e4830190610e8e565b92965050506020813d602011610b66575b81610b4760209383610d90565b810103126102a957519386851685036102a9578994899061098961097d565b3d9150610b3a565b8c513d5f823e3d90fd5b50857f000000000000000000000000000000000000000000000000000000000000000016868c161461066c565b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95760209051620493e08152f35b50346102a95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a95781359063ffffffff82168092036102a95764012a05f2009180830292830403610c4f57662386f26fc10000918201809211610c4f576020925051908152f35b6011837f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b50346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346102a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a9578064012a05f20060209252f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102a957565b6080810190811067ffffffffffffffff821117610d6357604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610d6357604052565b67ffffffffffffffff8111610d6357601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f5b838110610e1c5750505f910152565b8181015183820152602001610e0d565b6020818303126102a95780519067ffffffffffffffff82116102a9570181601f820112156102a9578051610e5f81610dd1565b92610e6d6040519485610d90565b818452602082840101116102a957610e8b9160208085019101610e0b565b90565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610eca81518092818752878088019101610e0b565b0116010190565b73ffffffffffffffffffffffffffffffffffffffff8091166040918251937fdd62ed3e000000000000000000000000000000000000000000000000000000008552306004860152168060248501526020948585604481865afa94851561109b575f9561106c575b50840180941161103f57825193858501917f095ea7b30000000000000000000000000000000000000000000000000000000083526024860152604485015260448452610f8384610d47565b8251908382019082821067ffffffffffffffff831117610d6357610ffe957f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564885f95869589528181520152519082855af1903d15611036573d610ff1610fe882610dd1565b94519485610d90565b83523d5f8685013e6110a5565b8051918215918215611016575b50509050156102a957565b8092508193810103126102a957015180151581036102a957805f8061100b565b606092506110a5565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b9094508581813d8311611094575b6110848183610d90565b810103126102a95751935f610f38565b503d61107a565b84513d5f823e3d90fd5b90156110bf578151156110b6575090565b3b156102a95790565b5080519081156102a957602001fdfea2646970667358221220abeed2c6aa23c0edeb879dfcc62e7ceb43c78fb9a79aaa71949875e09a39da8464736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ArbitrumL1InboxLike";
            readonly name: "_l1ArbitrumInbox";
            readonly type: "address";
        }, {
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "_l1ERC20GatewayRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l2RefundL2Address";
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
        readonly name: "L1_DAI";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_ERC20_GATEWAY_ROUTER";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_INBOX";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1InboxLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_CALL_VALUE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_PRICE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_MAX_SUBMISSION_COST";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_REFUND_L2_ADDRESS";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RELAY_MESSAGE_L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "RELAY_TOKENS_L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
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
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "l2GasLimit";
            readonly type: "uint32";
        }];
        readonly name: "getL1CallValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
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
    static createInterface(): Arbitrum_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Arbitrum_Adapter;
}
export {};
