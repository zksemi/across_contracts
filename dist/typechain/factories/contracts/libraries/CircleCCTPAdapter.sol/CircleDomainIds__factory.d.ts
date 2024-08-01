import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CircleDomainIds, CircleDomainIdsInterface } from "../../../../contracts/libraries/CircleCCTPAdapter.sol/CircleDomainIds";
declare type CircleDomainIdsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CircleDomainIds__factory extends ContractFactory {
    constructor(...args: CircleDomainIdsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<CircleDomainIds>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): CircleDomainIds;
    connect(signer: Signer): CircleDomainIds__factory;
    static readonly bytecode = "0x6080806040523461001a576101d1908161001f823930815050f35b5f80fdfe60806040908082526004361015610014575f80fd5b5f3560e01c9081631c32a09e146101695750806358111a4a146101325780635ea102b0146100fe578063731f7ec0146100ca578063a29256bd146100975763abe8bf3614610060575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905160078152f35b5f80fd5b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009357602090515f8152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905160038152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905160068152f35b505f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610093576020905163ffffffff8152f35b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100935780600260209252f3fea2646970667358221220895f744105859331ee00795243054245df50fa4aeacc9a796d8f1d145ca232da64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "Arbitrum";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Base";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Ethereum";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Optimism";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "Polygon";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "UNINTIALIZED";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CircleDomainIdsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CircleDomainIds;
}
export {};
