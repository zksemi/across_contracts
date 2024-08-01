import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PolygonZkEVM_Adapter, PolygonZkEVM_AdapterInterface } from "../../../contracts/chain-adapters/PolygonZkEVM_Adapter";
declare type PolygonZkEVM_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolygonZkEVM_Adapter__factory extends ContractFactory {
    constructor(...args: PolygonZkEVM_AdapterConstructorParams);
    deploy(_l1Weth: string, _l1PolygonZkEVMBridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<PolygonZkEVM_Adapter>;
    getDeployTransaction(_l1Weth: string, _l1PolygonZkEVMBridge: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PolygonZkEVM_Adapter;
    connect(signer: Signer): PolygonZkEVM_Adapter__factory;
    static readonly bytecode = "0x60c0346100a057601f610a6738819003918201601f19168301916001600160401b038311848410176100a45780849260409485528339810103126100a05780516001600160a01b039182821682036100a0576020015191821682036100a05760805260a0526040516109ae90816100b982396080518181816102fe0152610848015260a05181818160e0015281816102650152818161037301526104950152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604081815260049081361015610015575f80fd5b5f925f3560e01c9081631efd482a146108005750806352c8c75c1461028957806381ee293b1461021a578063c782bcf7146101e05763e6eb8ade14610058575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101dc5761008961086c565b91602435928467ffffffffffffffff918286116101d857366023870112156101d857858401359283116101d857602486019560248436920101116101d85773ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001694853b156101d457600192849288519485937f240ff378000000000000000000000000000000000000000000000000000000008552840152169586602483015260016044830152608060648301528183816101608c8a6084840191610911565b03925af180156101ca576101b2575b50507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4936101ac9184519485948552806020860152840191610911565b0390a180f35b6101bb9061088f565b6101c657845f61016f565b8480fd5b85513d84823e3d90fd5b8380fd5b5080fd5b8280fd5b8382346101d857817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d8576020905160018152f35b8382346101d857817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101d8576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106ec576102bd61086c565b90602490813573ffffffffffffffffffffffffffffffffffffffff8082168092036106ec57604493843593606435958387168097036106ec579683169689937f0000000000000000000000000000000000000000000000000000000000000000811689810361048857803b1561045c57858091868d51809481937f2e1a7d4d0000000000000000000000000000000000000000000000000000000083528d8a8401525af190811561047e57869161046a575b50507f000000000000000000000000000000000000000000000000000000000000000016803b156101c65784928760e492816001958c8f51998a9889977fcd5865790000000000000000000000000000000000000000000000000000000089528801528601528401525f60648401526001608484015260c060a48401525f60c48401525af1801561046057610440575b5050907fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9460809493925b815194855260208501528301526060820152a180f35b61044e90959493929561088f565b61045c57909192855f6103ff565b8580fd5b87513d84823e3d90fd5b6104739061088f565b6101c657845f61036f565b8b513d88823e3d90fd5b50909192935097949596977f00000000000000000000000000000000000000000000000000000000000000001685517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230848201528185820152808a818560209485935afa9081156107f6575f916107c9575b5088810180911161079e57875190828201907f095ea7b3000000000000000000000000000000000000000000000000000000008252848884015285830152848252608082019167ffffffffffffffff92818110848211176107735760c0820181811085821117610748578b528490527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152515f91829190828f5af13d1561073b573d91821161071057906105f2918951916105e3857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601846108d0565b82523d5f8584013e5b8c61094f565b80519182159182156106f0575b50509050156106ec57803b156106ec575f928360e492896001958c8b51998a9889977fcd5865790000000000000000000000000000000000000000000000000000000089528801528601528401528b60648401526001608484015260c060a48401528160c48401525af180156106e2576106a2575b5091608093917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b959361042a565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9593919650916106d56080959361088f565b5f96919395509193610674565b83513d5f823e3d90fd5b5f80fd5b8092508193810103126106ec57015180151581036106ec57805f806105ff565b866041877f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b6105f291506060906105ec565b8960418a7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b886041897f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b856011867f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508181813d83116107ef575b6107e081836108d0565b810103126106ec57515f6104fd565b503d6107d6565b88513d5f823e3d90fd5b346106ec575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106ec5760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036106ec57565b67ffffffffffffffff81116108a357604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176108a357604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b901561096957815115610960575090565b3b156106ec5790565b5080519081156106ec57602001fdfea264697066735822122046350cea0e501f7fde8a19f8acd198b491af7027e32fd843788c0fa5cc67a36264736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "contract IPolygonZkEVMBridge";
            readonly name: "_l1PolygonZkEVMBridge";
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
        readonly inputs: readonly [];
        readonly name: "L1_POLYGON_ZKEVM_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract IPolygonZkEVMBridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_WETH";
        readonly outputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "POLYGON_ZKEVM_L2_NETWORK_ID";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
    static createInterface(): PolygonZkEVM_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolygonZkEVM_Adapter;
}
export {};
