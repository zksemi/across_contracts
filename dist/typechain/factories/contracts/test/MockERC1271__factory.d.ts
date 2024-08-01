import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC1271, MockERC1271Interface } from "../../../contracts/test/MockERC1271";
declare type MockERC1271ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockERC1271__factory extends ContractFactory {
    constructor(...args: MockERC1271ConstructorParams);
    deploy(originalOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<MockERC1271>;
    getDeployTransaction(originalOwner: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MockERC1271;
    connect(signer: Signer): MockERC1271__factory;
    static readonly bytecode = "0x60803461008257601f6105b438819003918201601f19168301916001600160401b038311848410176100865780849260209460405283398101031261008257516001600160a01b03808216908183036100825761005b3361009a565b33905f5416036100825715610082576100739061009a565b6040516104d390816100e18239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b5f80546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe60808060405260049081361015610014575f80fd5b5f3560e01c9081631626ba7e146101e557508063715018a61461014b5780638da5cb5b146100fb5763f2fde38b1461004a575f80fd5b346100f75760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f7573573ffffffffffffffffffffffffffffffffffffffff8082168092036100f7576100a1610356565b81156100f7575f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b5f80fd5b346100f7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f757602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b346100f7575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f757610181610356565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b9050346100f75760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f7576024359067ffffffffffffffff928383116100f757366023840112156100f757828101359380851161032a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f88011601168301908382109082111761032a5760405283825236602485850101116100f7575f6020856102b29660246102aa9701838701378401015235610376565b9190916103ab565b73ffffffffffffffffffffffffffffffffffffffff805f54169116145f146103225760207f1626ba7e000000000000000000000000000000000000000000000000000000005b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b60205f6102f8565b6041827f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b73ffffffffffffffffffffffffffffffffffffffff5f541633036100f757565b9060418151145f146103a25761039e91602082015190606060408401519301515f1a9061040a565b9091565b50505f90600290565b60058110156103dd57806103bc5750565b600181036103c8575f80fd5b600281036103d4575f80fd5b6003146100f757565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411610492576020935f9360ff60809460405194855216868401526040830152606082015282805260015afa15610487575f5173ffffffffffffffffffffffffffffffffffffffff81161561047f57905f90565b505f90600190565b6040513d5f823e3d90fd5b505050505f9060039056fea264697066735822122003191fcf3c47ddf9dd066df28fb63779244161d377c32689ed17ace80ce1605264736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "originalOwner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MockERC1271Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockERC1271;
}
export {};
