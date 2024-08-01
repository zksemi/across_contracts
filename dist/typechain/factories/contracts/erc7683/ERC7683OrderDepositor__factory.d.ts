import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC7683OrderDepositor, ERC7683OrderDepositorInterface } from "../../../contracts/erc7683/ERC7683OrderDepositor";
export declare class ERC7683OrderDepositor__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "WrongChainId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongSettlementContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT2";
        readonly outputs: readonly [{
            readonly internalType: "contract IPermit2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUOTE_BEFORE_DEADLINE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "orderData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "decode";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "inputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "inputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "destinationChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadlineOffset";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct AcrossOrderData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }];
            readonly internalType: "struct AcrossFillerData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentTime";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "initiate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "resolve";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Input[]";
                readonly name: "swapperInputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "chainId";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "swapperOutputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "chainId";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "fillerOutputs";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "resolvedOrder";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ERC7683OrderDepositorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC7683OrderDepositor;
}
