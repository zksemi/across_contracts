import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Permit2OrderLib, Permit2OrderLibInterface } from "../../../contracts/permit2-order/Permit2OrderLib";
declare type Permit2OrderLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2OrderLib__factory extends ContractFactory {
    constructor(...args: Permit2OrderLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Permit2OrderLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Permit2OrderLib;
    connect(signer: Signer): Permit2OrderLib__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220def1476ea4027d4bb7380bc34a23a2785ac2a345b30f98cca491d9a11df3bfd264736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "AfterDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InputAndCollateralNotEqual";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MultipleOutputsNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ValidationContractNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongSettlerContract";
        readonly type: "error";
    }];
    static createInterface(): Permit2OrderLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2OrderLib;
}
export {};
