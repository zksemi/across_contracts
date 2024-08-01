import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISettlementContract, ISettlementContractInterface } from "../../../../contracts/erc7683/ERC7683.sol/ISettlementContract";
export declare class ISettlementContract__factory {
    static readonly abi: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ISettlementContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISettlementContract;
}
