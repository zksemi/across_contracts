import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FxStateSenderMock, FxStateSenderMockInterface } from "../../../../contracts/test/PolygonMocks.sol/FxStateSenderMock";
declare type FxStateSenderMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FxStateSenderMock__factory extends ContractFactory {
    constructor(...args: FxStateSenderMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<FxStateSenderMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): FxStateSenderMock;
    connect(signer: Signer): FxStateSenderMock__factory;
    static readonly bytecode = "0x608080604052346100155760d5908161001a8239f35b5f80fdfe6004361015600b575f80fd5b5f3560e01c63b472047714601d575f80fd5b34609b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112609b5760043573ffffffffffffffffffffffffffffffffffffffff811603609b5760243567ffffffffffffffff808211609b5736602383011215609b578160040135908111609b5736910160240111609b57005b5f80fdfea26469706673582212203df8ca945ac6a7e340259a45b6f7f57aa97b7b1a21c9120168682843bf00ade664736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_receiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "sendMessageToChild";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): FxStateSenderMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FxStateSenderMock;
}
export {};
