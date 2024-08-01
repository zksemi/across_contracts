import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AcrossMessageHandlerMock, AcrossMessageHandlerMockInterface } from "../../../contracts/test/AcrossMessageHandlerMock";
declare type AcrossMessageHandlerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossMessageHandlerMock__factory extends ContractFactory {
    constructor(...args: AcrossMessageHandlerMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<AcrossMessageHandlerMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): AcrossMessageHandlerMock;
    connect(signer: Signer): AcrossMessageHandlerMock__factory;
    static readonly bytecode = "0x6080806040523461001657610153908161001b8239f35b5f80fdfe6080600436101561000e575f80fd5b5f3560e01c633a5be8cb14610021575f80fd5b346100ec5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ec5773ffffffffffffffffffffffffffffffffffffffff600435818116036100ec57604435908116036100ec576064359067ffffffffffffffff908183116100ec57366023840112156100ec578260040135918083116100f0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f860116011682019182109111176100f057369101602401116100ec57005b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffdfea2646970667358221220e3f3b87704bb9ecc1421f66c64f19ca6abd45189110cc89dc2329e335979c6f564736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tokenSent";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "handleV3AcrossMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): AcrossMessageHandlerMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossMessageHandlerMock;
}
export {};
