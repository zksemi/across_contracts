import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lockable, LockableInterface } from "../../contracts/Lockable";
declare type LockableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Lockable__factory extends ContractFactory {
    constructor(...args: LockableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Lockable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Lockable;
    connect(signer: Signer): Lockable__factory;
    static readonly bytecode = "0x60808060405234601e57600160ff195f5416175f556039908160238239f35b5f80fdfe5f80fdfea26469706673582212205702d45a60c50b72a06d128fd1e1f6a37783e2a13729d68a6852e321e73dc15e64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }];
    static createInterface(): LockableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Lockable;
}
export {};
