import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ethereum_Adapter, Ethereum_AdapterInterface } from "../../../contracts/chain-adapters/Ethereum_Adapter";
declare type Ethereum_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Ethereum_Adapter__factory extends ContractFactory {
    constructor(...args: Ethereum_AdapterConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<Ethereum_Adapter>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Ethereum_Adapter;
    connect(signer: Signer): Ethereum_Adapter__factory;
    static readonly bytecode = "0x60808060405234610016576104be908161001b8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806352c8c75c146100345763e6eb8ade1461002f575f80fd5b610249565b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101dc577fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b6100876101e0565b61008f610203565b906101b560443561009e610226565b9061017b61016773ffffffffffffffffffffffffffffffffffffffff808716907fa9059cbb0000000000000000000000000000000000000000000000000000000060a052851660a4528360c45260446080526100fb610100604052565b7f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564602060405161012a816103a4565b81815201525f8060805160a082855af13d156101d4573d9161014b83610406565b9261015960405194856103c5565b83523d5f602085013e61045f565b80519081159182156101ba575b5050610440565b6040805173ffffffffffffffffffffffffffffffffffffffff95861681529585166020870152850152909116606083015281906080820190565b0390a1005b6101cd9250602080918301019101610447565b8880610174565b60609161045f565b5f80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101dc57565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101dc57565b6064359073ffffffffffffffffffffffffffffffffffffffff821682036101dc57565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101dc5761027b6101e0565b67ffffffffffffffff6024358181116101dc57366023820112156101dc5780600401359182116101dc57602481019060248336920101116101dc575f806102c184610406565b6102ce60405191826103c5565b8481526020810190858583378260208783010152519082875af1156101dc577f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8473ffffffffffffffffffffffffffffffffffffffff9560609560405197889616865260406020870152816040870152868601375f85828601015201168101030190a1005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040810190811067ffffffffffffffff8211176103c057604052565b610377565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176103c057604052565b67ffffffffffffffff81116103c057601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b156101dc57565b908160209103126101dc575180151581036101dc5790565b901561047957815115610470575090565b3b156101dc5790565b5080519081156101dc57602001fdfea2646970667358221220cb3e67e0f704774da813f4b129d804f62d24835ed9cbe6398787aedd4e2083af64736f6c63430008170033";
    static readonly abi: readonly [{
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
            readonly name: "target";
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
            readonly name: "l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "relayTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): Ethereum_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ethereum_Adapter;
}
export {};
