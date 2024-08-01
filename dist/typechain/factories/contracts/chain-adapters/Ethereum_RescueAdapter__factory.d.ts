import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ethereum_RescueAdapter, Ethereum_RescueAdapterInterface } from "../../../contracts/chain-adapters/Ethereum_RescueAdapter";
declare type Ethereum_RescueAdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Ethereum_RescueAdapter__factory extends ContractFactory {
    constructor(...args: Ethereum_RescueAdapterConstructorParams);
    deploy(_rescueAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Ethereum_RescueAdapter>;
    getDeployTransaction(_rescueAddress: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Ethereum_RescueAdapter;
    connect(signer: Signer): Ethereum_RescueAdapter__factory;
    static readonly bytecode = "0x60a03461007157601f61054638819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007157516001600160a01b0381168103610071576080526040516104bc908161008a823960805181818161016a015261036e0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040908082526004361015610014575f80fd5b5f3560e01c908163525550ea146103265750806352c8c75c146102c45763e6eb8ade1461003f575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023357610070610392565b5060249081359067ffffffffffffffff80831161023357366023840112156102335782600401356100a081610423565b936100ad845195866103b5565b81855260209485810192368882850101116102335786815f928a83960187378301015280518101031261023357519073ffffffffffffffffffffffffffffffffffffffff94858316809303610233578351917f70a0823100000000000000000000000000000000000000000000000000000000835230600484015285838381875afa9283156102ba575f9361028b575b50845192868401977fa9059cbb0000000000000000000000000000000000000000000000000000000089527f000000000000000000000000000000000000000000000000000000000000000016838501526044840152604483526080830191838310828411176102605760c08401918211838310176102605750955f9286849361021b98998852527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082855af1903d15610257573d61020e61020582610423565b945194856103b5565b83523d5f8685013e61045d565b8051918215918215610237575b505090501561023357005b5f80fd5b809250819381010312610233570151801515810361023357805f80610228565b6060925061045d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b9092508581813d83116102b3575b6102a381836103b5565b810103126102335751915f61013d565b503d610299565b85513d5f823e3d90fd5b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610233576102f6610392565b5073ffffffffffffffffffffffffffffffffffffffff602435818116036102335760643590811603610233575f80fd5b34610233575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102335760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361023357565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103f657604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b67ffffffffffffffff81116103f657601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b90156104775781511561046e575090565b3b156102335790565b50805190811561023357602001fdfea264697066735822122050002da7aa3bb3b41e4b4df9c50eed9a8c436d924ab43f4c618fb9c4979bd51e64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_rescueAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "MessageRelayed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "TokensRelayed";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "message";
            readonly type: "bytes";
        }];
        readonly name: "relayMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rescueAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Ethereum_RescueAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ethereum_RescueAdapter;
}
export {};
