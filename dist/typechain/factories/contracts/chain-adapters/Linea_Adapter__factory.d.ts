import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Linea_Adapter, Linea_AdapterInterface } from "../../../contracts/chain-adapters/Linea_Adapter";
declare type Linea_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Linea_Adapter__factory extends ContractFactory {
    constructor(...args: Linea_AdapterConstructorParams);
    deploy(_l1Weth: string, _l1MessageService: string, _l1TokenBridge: string, _l1UsdcBridge: string, overrides?: Overrides & {
        from?: string;
    }): Promise<Linea_Adapter>;
    getDeployTransaction(_l1Weth: string, _l1MessageService: string, _l1TokenBridge: string, _l1UsdcBridge: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Linea_Adapter;
    connect(signer: Signer): Linea_Adapter__factory;
    static readonly bytecode = "0x610100346100e057601f610cbd38819003918201601f19168301916001600160401b038311848410176100e4578084926080946040528339810103126100e05780516001600160a01b03919082811681036100e05760208201519083821682036100e05760408301519284841684036100e0576060015193841684036100e05760805260a05260c05260e052604051610bc490816100f98239608051818181610332015261075a015260a05181818160eb0152818161029c01526103a8015260c0518181816105cb01526107c6015260e05181818161022d01526104d40152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604081815260049081361015610015575f80fd5b5f925f3560e01c9081630cbae5201461077e575080631efd482a1461071057806352c8c75c146102c057806369bd096e14610251578063deefd936146101e25763e6eb8ade14610063575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101de576100946107ea565b91602435928467ffffffffffffffff918286116101da57366023870112156101da57858401359283116101da57602486019560248436920101116101da5773ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001690813b156101d657839187519384927f9f3ce55a000000000000000000000000000000000000000000000000000000008452168097830152826024830152606060448301528183816101628c8a606484019161088f565b03925af180156101cc576101b4575b50507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4936101ae918451948594855280602086015284019161088f565b0390a180f35b6101bd9061080d565b6101c857845f610171565b8480fd5b85513d84823e3d90fd5b8380fd5b5080fd5b8280fd5b8382346101da57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101da576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8382346101da57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101da576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106c2576102f46107ea565b9060243573ffffffffffffffffffffffffffffffffffffffff908181168091036106c25760443591606435938185168095036106c2579481169487917f000000000000000000000000000000000000000000000000000000000000000081168781036104ac57803b156101d65783809160248b51809481937f2e1a7d4d0000000000000000000000000000000000000000000000000000000083528b898401525af19081156104a257849161048e575b50507f00000000000000000000000000000000000000000000000000000000000000001690813b156101de578560848492878b5195869485937f9f3ce55a000000000000000000000000000000000000000000000000000000008552840152856024840152606060448401528560648401525af1801561048457610464575b5050907fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9460809493925b815194855260208501528301526060820152a180f35b61047290959493929561080d565b61048057909192855f610423565b8580fd5b87513d84823e3d90fd5b6104979061080d565b6101de57825f6103a4565b89513d86823e3d90fd5b5087517f3e413bee0000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000821693506020818481875afa90811561070657908a949392915f916106c6575b50811688036105c057506105288583896108cd565b813b156101de578460448492838b5195869485937f70aff70f0000000000000000000000000000000000000000000000000000000085528401528a60248401525af18015610484576105a4575b5050907fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b94608094939261044e565b6105b290959493929561080d565b61048057909192855f610575565b9150915095929394957f000000000000000000000000000000000000000000000000000000000000000016906105f78583896108cd565b813b156106c2578660645f9283875195869485937f522ea81a0000000000000000000000000000000000000000000000000000000085528401528960248401528a60448401525af180156106b857610678575b5091608093917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b959361044e565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9593919650916106ab6080959361080d565b5f9691939550919361064a565b83513d5f823e3d90fd5b5f80fd5b919450506020813d6020116106fe575b816106e36020938361084e565b810103126106c257519280841684036106c257899381610513565b3d91506106d6565b89513d5f823e3d90fd5b50346106c2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106c2576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346106c2575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106c25760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036106c257565b67ffffffffffffffff811161082157604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761082157604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9291909273ffffffffffffffffffffffffffffffffffffffff809116604051917fdd62ed3e000000000000000000000000000000000000000000000000000000008352306004840152602495169182868201526020938482604481865afa918215610b5a575f92610b2b575b508101809111610aff5760405190848201937f095ea7b3000000000000000000000000000000000000000000000000000000008552878301526044820152604481526080810167ffffffffffffffff9382821085831117610ad35760c083019282841086851117610aa757865f94938594604052527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082855af1903d15610a96573d928311610a6a57610a329394955060405192610a25867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116018561084e565b83523d5f8685013e610b65565b8051918215918215610a4a575b50509050156106c257565b8092508193810103126106c257015180151581036106c257805f80610a3f565b857f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b9150610a3292939450606091610b65565b887f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b877f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b857f4e487b71000000000000000000000000000000000000000000000000000000005f5260116004525ffd5b9091508481813d8311610b53575b610b43818361084e565b810103126106c25751905f610939565b503d610b39565b6040513d5f823e3d90fd5b9015610b7f57815115610b76575090565b3b156106c25790565b5080519081156106c257602001fdfea2646970667358221220c252c357d113e917e1da1072c74844b8e790474e10a678f7edf0218a5092f9ce64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "contract IMessageService";
            readonly name: "_l1MessageService";
            readonly type: "address";
        }, {
            readonly internalType: "contract ITokenBridge";
            readonly name: "_l1TokenBridge";
            readonly type: "address";
        }, {
            readonly internalType: "contract IUSDCBridge";
            readonly name: "_l1UsdcBridge";
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
        readonly name: "L1_MESSAGE_SERVICE";
        readonly outputs: readonly [{
            readonly internalType: "contract IMessageService";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_TOKEN_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract ITokenBridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_USDC_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract IUSDCBridge";
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
    static createInterface(): Linea_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Linea_Adapter;
}
export {};
