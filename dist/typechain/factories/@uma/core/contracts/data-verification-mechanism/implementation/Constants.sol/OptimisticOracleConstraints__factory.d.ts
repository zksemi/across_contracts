import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OptimisticOracleConstraints, OptimisticOracleConstraintsInterface } from "../../../../../../../@uma/core/contracts/data-verification-mechanism/implementation/Constants.sol/OptimisticOracleConstraints";
declare type OptimisticOracleConstraintsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OptimisticOracleConstraints__factory extends ContractFactory {
    constructor(...args: OptimisticOracleConstraintsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<OptimisticOracleConstraints>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): OptimisticOracleConstraints;
    connect(signer: Signer): OptimisticOracleConstraints__factory;
    static readonly bytecode = "0x60808060405234601857608f908161001d823930815050f35b5f80fdfe60808060405260043610156011575f80fd5b5f3560e01c63c371dda7146023575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126055578061200060209252f35b5f80fdfea264697066735822122076b6a803976bf1b4911d8ccc75006031c7384006f9b83ff49820f3a8e75d44fa64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ancillaryBytesLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): OptimisticOracleConstraintsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimisticOracleConstraints;
}
export {};
