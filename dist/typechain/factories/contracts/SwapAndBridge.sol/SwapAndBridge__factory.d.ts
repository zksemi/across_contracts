import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapAndBridge, SwapAndBridgeInterface } from "../../../contracts/SwapAndBridge.sol/SwapAndBridge";
declare type SwapAndBridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapAndBridge__factory extends ContractFactory {
    constructor(...args: SwapAndBridgeConstructorParams);
    deploy(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], _swapToken: string, _acrossInputToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<SwapAndBridge>;
    getDeployTransaction(_spokePool: string, _exchange: string, _allowedSelectors: BytesLike[], _swapToken: string, _acrossInputToken: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): SwapAndBridge;
    connect(signer: Signer): SwapAndBridge__factory;
    static readonly bytecode = "0x604061010060405234620001b8576200137c803803806200002081620001d0565b92833981019160a082840312620001b85781516001600160a01b03908181168103620001b857602092838501519283168303620001b85760408501516001600160401b039490858111620001b85786019680601f89011215620001b8578751958611620001bc576005978660051b9083806200009e818501620001d0565b809a81520192820101928311620001b8578301905b8282106200019657505050620000da6080620000d260608901620001f6565b9701620001f6565b96600195869560ff19956001875f5416175f5560805260a0525f955b6200015a575b888860c05260e05260405161117090816200020c82396080518181816101da0152610ed4015260a05181818161041c0152818161096c0152610e7b015260c05181818160c9015261082c015260e05181818161016c015261084e0152f35b8051861015620001905786809663ffffffff60e01b8582861b85010151165f52818552855f2082888254161790550195620000f6565b620000fc565b81516001600160e01b031981168103620001b8578152908301908301620000b3565b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b6040519190601f01601f191682016001600160401b03811183821017620001bc57604052565b51906001600160a01b0382168203620001b85756fe60806040526004361015610011575f80fd5b5f3560e01c8063393bb94314610084578063652fa4b91461007f5780638021fef71461007a57806385f168eb14610075578063ac9650d814610070578063b50e44b81461006b5763e65ae3ae14610066575f80fd5b61044f565b6103d2565b61034a565b6101fe565b610190565b610122565b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166080527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060a0016080f35b5f80fd5b5f91031261011457565b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576004357fffffffff000000000000000000000000000000000000000000000000000000008116809103610114575f526001602052602060ff60405f2054166040519015158152f35b5f5b8381106102865750505f910152565b8181015183820152602001610277565b602080820190808352835180925260408301928160408460051b8301019501935f915b8483106102c95750505050505090565b909192939495848080837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8c5161033681518092818752878088019101610275565b0116010198019301930191949392906102b9565b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145767ffffffffffffffff6004358181116101145736602382011215610114578060040135918211610114573660248360051b83010111610114576103ce9160246103c2920161070a565b60405191829182610296565b0390f35b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b90816101409103126101145790565b346101145760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145767ffffffffffffffff600435818111610114573660238201121561011457806004013582811161011457366024828401011161011457606435928311610114576104cf6104df933690600401610440565b91604435916024803592016107f1565b005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff811161052257604052565b6104e1565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761052257604052565b67ffffffffffffffff81116105225760051b60200190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610114570180359067ffffffffffffffff82116101145760200191813603831361011457565b90821015610619576106159160051b8101906105ad565b9091565b610580565b908092918237015f815290565b67ffffffffffffffff811161052257601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d1561068f573d906106768261062b565b916106846040519384610527565b82523d5f602084013e565b606090565b6020818303126101145780519067ffffffffffffffff8211610114570181601f820112156101145780516106c78161062b565b926106d56040519485610527565b81845260208284010111610114576106f39160208085019101610275565b90565b80518210156106195760209160051b010190565b91909161071683610568565b9060406107266040519384610527565b8483527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061075386610568565b015f5b8181106107e057505082945f5b818110610771575050505050565b5f8061077e8385886105fe565b9061078d87518093819361061e565b0390305af461079a610665565b90156107c057906001916107ae82886106f6565b526107b981876106f6565b5001610763565b604481511061011457806004610114920151602480918301019101610694565b806060602080938801015201610756565b9193909260ff5f5416156101145761082a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f54165f55565b7f0000000000000000000000000000000000000000000000000000000000000000927f0000000000000000000000000000000000000000000000000000000000000000946108bc6108b86108b16108818486610a7f565b7fffffffff00000000000000000000000000000000000000000000000000000000165f52600160205260405f2090565b5460ff1690565b1590565b610a4e576108cc87303388610add565b6040517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015273ffffffffffffffffffffffffffffffffffffffff98919260209182856024818c8f165afa948515610a28575f95610a2d575b506040519081523060048201529982908b9060249082908d165afa948515610a28576109b89a89935f976109e8575b50506109b3925f92838093610992887f00000000000000000000000000000000000000000000000000000000000000008096610b86565b6109a16040518094819361061e565b03925af16109ad610665565b50610a78565b610d91565b6109e660017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff005f5416175f55565b565b5f809491819499506109b3969381610a1492903d10610a21575b610a0c8183610527565b810190610ac3565b989350509281945061095b565b503d610a02565b610ad2565b83919550610a4790823d8411610a2157610a0c8183610527565b949061092c565b60046040517f42868c9b000000000000000000000000000000000000000000000000000000008152fd5b1561011457565b7fffffffff000000000000000000000000000000000000000000000000000000009035818116939260048110610ab457505050565b60040360031b82901b16169150565b90816020910312610114575190565b6040513d5f823e3d90fd5b9290604051927f23b872dd00000000000000000000000000000000000000000000000000000000602085015273ffffffffffffffffffffffffffffffffffffffff809216602485015216604483015260648201526064815260a081019181831067ffffffffffffffff841117610522576109e69260405261105d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b60449192602073ffffffffffffffffffffffffffffffffffffffff604051948580927fdd62ed3e000000000000000000000000000000000000000000000000000000008252306004830152808916602483015286165afa928315610a28575f93610c62575b508201809211610c5d576040517f095ea7b300000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff9390931660248401526044808401929092529082526109e69190610c58606483610527565b61105d565b610b59565b610c7c91935060203d602011610a2157610a0c8183610527565b915f610beb565b91908203918211610c5d57565b3573ffffffffffffffffffffffffffffffffffffffff811681036101145790565b3563ffffffff811681036101145790565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b989590946106f39d9b9792602095610d839a959c976101809d8d73ffffffffffffffffffffffffffffffffffffffff998a8096818096168452169101521660408d01521660608b015260808a015260a089015260c08801521660e086015263ffffffff8092166101008601521661012084015261014083019063ffffffff169052565b816101608201520191610cc2565b604080517f70a082310000000000000000000000000000000000000000000000000000000080825230600483015296989773ffffffffffffffffffffffffffffffffffffffff808a1698939796909560209390929184826024818e5afa8015610a2857610e05925f91611040575b50610c83565b9687106110175787519384523060048501528516928281602481875afa8015610a28578592610e3a925f92610ff85750610c83565b03610fcf5792610efb92878695937f646284e396b68ff4b4f34e0aa97bcdb9c100f5b44a20da5c475f627039853841848d9a9996610e778c610c90565b8b517f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020810197909752604087018990529b0135606086018190529a1693608090a47f0000000000000000000000000000000000000000000000000000000000000000168097610b86565b610f06828701610c90565b91610f1360608801610c90565b93610f1d88610c90565b97610f2a60a08201610c90565b610f3660c08301610cb1565b90610f4360e08401610cb1565b92610f516101008201610cb1565b94610f606101208301836105ad565b9890978d3b1561011457519d8e9c8d9c8d957f7b93923200000000000000000000000000000000000000000000000000000000875260800135956004019c610fa79d610d00565b03815a5f948591f18015610a2857610fbc5750565b80610fc96109e69261050e565b80610118565b600486517fd6cf42f0000000000000000000000000000000000000000000000000000000008152fd5b611010919250853d8711610a2157610a0c8183610527565b905f610dff565b600488517f0492ff87000000000000000000000000000000000000000000000000000000008152fd5b6110579150863d8811610a2157610a0c8183610527565b5f610dff565b73ffffffffffffffffffffffffffffffffffffffff166040516040810181811067ffffffffffffffff821117610522576110d8937f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460205f948594604052818152015260208151910182855af16110d2610665565b91611111565b80519081159182156110ee575b50501561011457565b819250906020918101031261011457602001518015158103610114575f806110e5565b901561112b57815115611122575090565b3b156101145790565b50805190811561011457602001fdfea26469706673582212207fa7e62d4ff6cdf2630cc0c0e2bfecf22ce6ed9f82dc7d0bfc3cc856a56ced4e64736f6c63430008170033";
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
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_swapToken";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_acrossInputToken";
            readonly type: "address";
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
        readonly name: "ACROSS_INPUT_TOKEN";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly inputs: readonly [];
        readonly name: "SWAP_TOKEN";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
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
    static createInterface(): SwapAndBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapAndBridge;
}
export {};
