import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Arbitrum_SendTokensAdapter, Arbitrum_SendTokensAdapterInterface } from "../../../contracts/chain-adapters/Arbitrum_SendTokensAdapter";
declare type Arbitrum_SendTokensAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Arbitrum_SendTokensAdapter__factory extends ContractFactory {
    constructor(...args: Arbitrum_SendTokensAdapterConstructorParams);
    deploy(_l1ERC20GatewayRouter: string, _l2RefundL2Address: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Arbitrum_SendTokensAdapter>;
    getDeployTransaction(_l1ERC20GatewayRouter: string, _l2RefundL2Address: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Arbitrum_SendTokensAdapter;
    connect(signer: Signer): Arbitrum_SendTokensAdapter__factory;
    static readonly bytecode = "0x610100346100d657601f610a8e38819003918201601f19168301916001600160401b038311848410176100da5780849260409485528339810103126100d65780516001600160a01b039182821682036100d6576020015191821682036100d657662386f26fc1000060805264012a05f20060a05260c05260e05260405161099f90816100ef82396080518181816102f40152818161056701526108f8015260a0518181816103980152818161062d01526108c3015260c0518181816101450152610737015260e05181818161035e01526105d40152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe604060808152600480361015610013575f80fd5b5f3560e01c806308f1ed151461075b5780631ba4a9cb146106ed57806328f2716e146106b257806352c8c75c146106505780639ae36685146105f85780639c3ba2001461058a578063e599477e146105325763e6eb8ade14610073575f80fd5b817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610455576100a461079c565b906024803567ffffffffffffffff9182821161045557366023830112156104555781840135936100d385610849565b926100e088519485610808565b858452602095868501913685838301011161045557815f92868a93018537860101528784805181010312610455575173ffffffffffffffffffffffffffffffffffffffff938482168092036104555788015161013a6108bd565b9081471061045557857f000000000000000000000000000000000000000000000000000000000000000016938a517fbda009fe000000000000000000000000000000000000000000000000000000008152848282015289818881895afa908115610528575f916104f2575b50878c51917fdd62ed3e0000000000000000000000000000000000000000000000000000000083523084840152169081888201528a81604481895afa80156104e85784905f906104b7575b6101fa9250610883565b8c51908b8201927f095ea7b30000000000000000000000000000000000000000000000000000000084528983015260448201526044815261023a816107bf565b8c518d81018181108c82111761048c576102ae938f937f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648f5f958695885281815201525190828a5af13d15610483573d61029f61029682610849565b93519384610808565b82523d5f8d84013e5b86610940565b80518a8115918215610463575b5050905015610455577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f5f988d948551918d8301967f0000000000000000000000000000000000000000000000000000000000000000885280808501528c60608501526060845261032d846107bf565b519e8f9b8c9a8b987f4fb1a07b000000000000000000000000000000000000000000000000000000008a52890152827f000000000000000000000000000000000000000000000000000000000000000016908801521660448601526064850152620493e060848501527f000000000000000000000000000000000000000000000000000000000000000060a485015260e060c4850152518060e48501526103db81610104968787019061091f565b011681010301925af18015610459576103f057005b3d805f853e6103ff8185610808565b830192828185031261045557805191821161045557019082601f830112156104555781519261043961043085610849565b95519586610808565b83855281848401011161045557806104539401910161091f565b005b5f80fd5b84513d5f823e3d90fd5b838092935001031261045557890151801515810361045557808a5f6102bb565b606091506102a8565b896041867f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b50508a81813d83116104e1575b6104ce8183610808565b8101031261045557836101fa91516101f0565b503d6104c4565b8d513d5f823e3d90fd5b90508981813d8311610521575b6105098183610808565b8101031261045557518781168103610455575f6101a5565b503d6104ff565b8c513d5f823e3d90fd5b8234610455575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261045557602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b8234610455575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610455576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8234610455575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261045557602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104555761068261079c565b5073ffffffffffffffffffffffffffffffffffffffff602435818116036104555760643590811603610455575f80fd5b8234610455575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104555760209051620493e08152f35b8234610455575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610455576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8234610455575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610455576020906107956108bd565b9051908152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361045557565b6080810190811067ffffffffffffffff8211176107db57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176107db57604052565b67ffffffffffffffff81116107db57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9190820180921161089057565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b620493e07f00000000000000000000000000000000000000000000000000000000000000008181029181159183041417156108905761091c907f0000000000000000000000000000000000000000000000000000000000000000610883565b90565b5f5b8381106109305750505f910152565b8181015183820152602001610921565b901561095a57815115610951575090565b3b156104555790565b50805190811561045557602001fdfea2646970667358221220222765d3e9fda5f1db4c69d0b19142ecab32a77d21c55e26fcc1b4d21570637e64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "_l1ERC20GatewayRouter";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l2RefundL2Address";
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
        readonly name: "l1ERC20GatewayRouter";
        readonly outputs: readonly [{
            readonly internalType: "contract ArbitrumL1ERC20GatewayLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2GasPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2MaxSubmissionCost";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "l2RefundL2Address";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Arbitrum_SendTokensAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Arbitrum_SendTokensAdapter;
}
export {};
