import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockBedrockL2StandardBridge, MockBedrockL2StandardBridgeInterface } from "../../../../contracts/test/MockBedrockStandardBridge.sol/MockBedrockL2StandardBridge";
declare type MockBedrockL2StandardBridgeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockBedrockL2StandardBridge__factory extends ContractFactory {
    constructor(...args: MockBedrockL2StandardBridgeConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MockBedrockL2StandardBridge>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MockBedrockL2StandardBridge;
    connect(signer: Signer): MockBedrockL2StandardBridge__factory;
    static readonly bytecode = "0x60808060405234610016576102ba908161001b8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c9081634823f114146100a3575063a3a7954814610032575f80fd5b60a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f57610064610210565b5061006d610233565b5060643563ffffffff81160361009f5760843567ffffffffffffffff811161009f5761009d903690600401610256565b005b5f80fd5b3461009f5760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009f576100da610210565b6100e2610233565b5073ffffffffffffffffffffffffffffffffffffffff906044358281160361009f5760a43567ffffffffffffffff9283821161009f57845f60649260209561012f84963690600401610256565b50507f23b872dd00000000000000000000000000000000000000000000000000000000845233600485015230602485015284356044850152165af180156102055761017657005b6020903d6020116101fd575b601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168301908111838210176101d05760209183916040528101031261009f57518015150361009f57005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b3d9150610182565b6040513d5f823e3d90fd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361009f57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361009f57565b9181601f8401121561009f5782359167ffffffffffffffff831161009f576020838186019501011161009f5756fea26469706673582212206d384406077bb64c89b0071152ad4b7a7426ff2bf71078bb7339c91b3c3c341864736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_localToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_remoteToken";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "bridgeERC20To";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "_minGasLimit";
            readonly type: "uint32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_extraData";
            readonly type: "bytes";
        }];
        readonly name: "withdrawTo";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): MockBedrockL2StandardBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockBedrockL2StandardBridge;
}
export {};
