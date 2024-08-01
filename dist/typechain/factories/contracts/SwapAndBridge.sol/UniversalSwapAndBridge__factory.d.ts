import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UniversalSwapAndBridge, UniversalSwapAndBridgeInterface } from "../../../contracts/SwapAndBridge.sol/UniversalSwapAndBridge";
declare type UniversalSwapAndBridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniversalSwapAndBridge__factory extends ContractFactory {
    constructor(...args: UniversalSwapAndBridgeConstructorParams);
    deploy(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<UniversalSwapAndBridge>;
    getDeployTransaction(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): UniversalSwapAndBridge;
    connect(signer: Signer): UniversalSwapAndBridge__factory;
    static readonly bytecode = "0x604060c0604052346200017457620011e2908138038062000020816200018c565b9384398201606083820312620001745782516001600160a01b039290919083831683036200017457602094858101519485168503620001745760408101516001600160401b03918282116200017457019280601f850112156200017457835191821162000178576005938260051b9088806200009e8185016200018c565b80968152019282010192831162000174578801905b8282106200015257505050600195869560ff19956001875f5416175f5560805260a0525f955b62000116575b60405161102f9081620001b3823960805181818161011f0152610d93015260a0518181816102f9015281816108420152610d3a0152f35b81518610156200014c5786809663ffffffff60e01b8382881b86010151165f52818352845f2082888254161790550195620000d9565b620000df565b81516001600160e01b03198116810362000174578152908801908801620000b3565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b03811183821017620001785760405256fe60806040526004361015610011575f80fd5b5f3560e01c80638021fef7146100da57806385f168eb1461005f578063ac9650d81461005a578063b50e44b8146100555763c51e5eb914610050575f80fd5b61034a565b6102af565b610227565b346100d65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036100d6575f526001602052602060ff60405f2054166040519015158152f35b5f80fd5b346100d6575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660805260206080f35b5f9103126100d657565b5f5b8381106101635750505f910152565b8181015183820152602001610154565b602080820190808352835180925260408301928160408460051b8301019501935f915b8483106101a65750505050505090565b909192939495848080837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8c5161021381518092818752878088019101610152565b011601019801930193019194939290610196565b346100d65760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d65767ffffffffffffffff6004358181116100d657366023820112156100d65780600401359182116100d6573660248360051b830101116100d6576102ab91602461029f9201610621565b60405191829182610173565b0390f35b346100d6575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d657602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b73ffffffffffffffffffffffffffffffffffffffff8116036100d657565b90816101409103126100d65790565b346100d65760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d6576004356103858161031d565b602435906103928261031d565b67ffffffffffffffff916044358381116100d657366023820112156100d65780600401358481116100d65736602482840101116100d65760a4359485116100d6576103e46103f695369060040161033b565b93608435936024606435940191610708565b005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff811161043957604052565b6103f8565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761043957604052565b67ffffffffffffffff81116104395760051b60200190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156100d6570180359067ffffffffffffffff82116100d6576020019181360383136100d657565b908210156105305761052c9160051b8101906104c4565b9091565b610497565b908092918237015f815290565b67ffffffffffffffff811161043957601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d156105a6573d9061058d82610542565b9161059b604051938461043e565b82523d5f602084013e565b606090565b6020818303126100d65780519067ffffffffffffffff82116100d6570181601f820112156100d65780516105de81610542565b926105ec604051948561043e565b818452602082840101116100d65761060a9160208085019101610152565b90565b80518210156105305760209160051b010190565b91909161062d8361047f565b90604061063d604051938461043e565b8483527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061066a8661047f565b015f5b8181106106f757505082945f5b818110610688575050505050565b5f80610695838588610515565b906106a4875180938193610535565b0390305af46106b161057c565b90156106d757906001916106c5828861060d565b526106d0818761060d565b500161067a565b60448151106100d6578060046100d69201516024809183010191016105ab565b80606060208093880101520161066d565b9395929491909460ff5f5416156100d6576107447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f54165f55565b61079261078e6107876107578486610955565b7fffffffff00000000000000000000000000000000000000000000000000000000165f52600160205260405f2090565b5460ff1690565b1590565b610924576107a2873033886109b3565b6040517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015273ffffffffffffffffffffffffffffffffffffffff98919260209182856024818c8f165afa9485156108fe575f95610903575b506040519081523060048201529982908b9060249082908d165afa9485156108fe5761088e9a89935f976108be575b5050610889925f92838093610868887f00000000000000000000000000000000000000000000000000000000000000008096610a5c565b61087760405180948193610535565b03925af161088361057c565b5061094e565b610c50565b6108bc60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f5416175f55565b565b5f809491819499506108899693816108ea92903d106108f7575b6108e2818361043e565b810190610999565b9893505092819450610831565b503d6108d8565b6109a8565b8391955061091d90823d84116108f7576108e2818361043e565b9490610802565b60046040517f42868c9b000000000000000000000000000000000000000000000000000000008152fd5b156100d657565b7fffffffff00000000000000000000000000000000000000000000000000000000903581811693926004811061098a57505050565b60040360031b82901b16169150565b908160209103126100d6575190565b6040513d5f823e3d90fd5b9290604051927f23b872dd00000000000000000000000000000000000000000000000000000000602085015273ffffffffffffffffffffffffffffffffffffffff809216602485015216604483015260648201526064815260a081019181831067ffffffffffffffff841117610439576108bc92604052610f1c565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b60449192602073ffffffffffffffffffffffffffffffffffffffff604051948580927fdd62ed3e000000000000000000000000000000000000000000000000000000008252306004830152808916602483015286165afa9283156108fe575f93610b38575b508201809211610b33576040517f095ea7b300000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff9390931660248401526044808401929092529082526108bc9190610b2e60648361043e565b610f1c565b610a2f565b610b5291935060203d6020116108f7576108e2818361043e565b915f610ac1565b91908203918211610b3357565b3561060a8161031d565b3563ffffffff811681036100d65790565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9895909461060a9d9b9792602095610c429a959c976101809d8d73ffffffffffffffffffffffffffffffffffffffff998a8096818096168452169101521660408d01521660608b015260808a015260a089015260c08801521660e086015263ffffffff8092166101008601521661012084015261014083019063ffffffff169052565b816101608201520191610b81565b604080517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015296989773ffffffffffffffffffffffffffffffffffffffff808a1698939796909560209390929184826024818e5afa80156108fe57610cc4925f91610eff575b50610b59565b968710610ed65787519384523060048501528516928281602481875afa80156108fe578592610cf9925f92610eb75750610b59565b03610e8e5792610dba92878695937f646284e396b68ff4b4f34e0aa97bcdb9c100f5b44a20da5c475f627039853841848d9a9996610d368c610b66565b8b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020810197909752604087018990529b0135606086018190529a1693608090a47f0000000000000000000000000000000000000000000000000000000000000000168097610a5c565b610dc5828701610b66565b91610dd260608801610b66565b93610ddc88610b66565b97610de960a08201610b66565b610df560c08301610b70565b90610e0260e08401610b70565b92610e106101008201610b70565b94610e1f6101208301836104c4565b9890978d3b156100d657519d8e9c8d9c8d957f7b93923200000000000000000000000000000000000000000000000000000000875260800135956004019c610e669d610bbf565b03815a5f948591f180156108fe57610e7b5750565b80610e886108bc92610425565b80610148565b600486517fd6cf42f0000000000000000000000000000000000000000000000000000000008152fd5b610ecf919250853d87116108f7576108e2818361043e565b905f610cbe565b600488517f0492ff87000000000000000000000000000000000000000000000000000000008152fd5b610f169150863d88116108f7576108e2818361043e565b5f610cbe565b73ffffffffffffffffffffffffffffffffffffffff166040516040810181811067ffffffffffffffff82111761043957610f97937f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460205f948594604052818152015260208151910182855af1610f9161057c565b91610fd0565b8051908115918215610fad575b5050156100d657565b81925090602091810103126100d6576020015180151581036100d6575f80610fa4565b9015610fea57815115610fe1575090565b3b156100d65790565b5080519081156100d657602001fdfea2646970667358221220f31ecd9cec955a2c7ccaa5060eae7083b348cd2b152d100afcdd72f861b0638f64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_exchange";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "_allowedSelectors";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidFunctionSelector";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LeftoverSrcTokens";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinimumExpectedInputAmount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "exchange";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "swapToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "acrossInputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "swapTokenAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "acrossInputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "acrossOutputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "acrossOutputAmount";
            readonly type: "uint256";
        }];
        readonly name: "SwapBeforeBridge";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXCHANGE";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SPOKE_POOL";
        readonly outputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly name: "allowedSelectors";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "swapToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "acrossInputToken";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "routerCalldata";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "swapTokenAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minExpectedInputTokenAmount";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "depositor";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainid";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SwapAndBridgeBase.DepositData";
            readonly name: "depositData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndBridge";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): UniversalSwapAndBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UniversalSwapAndBridge;
}
export {};
