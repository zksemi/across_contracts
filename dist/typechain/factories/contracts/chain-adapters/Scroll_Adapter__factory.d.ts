import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Scroll_Adapter, Scroll_AdapterInterface } from "../../../contracts/chain-adapters/Scroll_Adapter";
declare type Scroll_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Scroll_Adapter__factory extends ContractFactory {
    constructor(...args: Scroll_AdapterConstructorParams);
    deploy(_l1GatewayRouter: string, _l1ScrollMessenger: string, _l2GasPriceOracle: string, _l2MessageRelayGasLimit: BigNumberish, _l2TokenRelayGasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<Scroll_Adapter>;
    getDeployTransaction(_l1GatewayRouter: string, _l1ScrollMessenger: string, _l2GasPriceOracle: string, _l2MessageRelayGasLimit: BigNumberish, _l2TokenRelayGasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Scroll_Adapter;
    connect(signer: Signer): Scroll_Adapter__factory;
    static readonly bytecode = "0x610120346100f657601f610bf238819003918201601f19168301916001600160401b038311848410176100fa5780849260a0946040528339810103126100f65780516001600160a01b039182821682036100f657602081015183811681036100f657604082015193841684036100f65761008760806100806060850161010e565b930161010e565b9260c05260e05261010092835260805260a052604051610ad29182610120833960805182818160f501526102d0015260a05182818161059701526108a3015260c0518281816103d20152610847015260e051828181610116015261033f01525181818161027101526109fa0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b519063ffffffff821682036100f65756fe6080604081815260049081361015610015575f80fd5b5f925f3560e01c9081631dec6f921461086b575080633aeafbb2146107fd57806352c8c75c146103635780636a4a3ed7146102f45780638b4bac8914610295578063b2525ef3146102265763e6eb8ade1461006e575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102225761009f6108c7565b91602435928467ffffffffffffffff9182861161021e573660238701121561021e578584013592831161021e576024860195602484369201011161021e5773ffffffffffffffffffffffffffffffffffffffff907f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008316610140826109aa565b93813b1561021a5761019f9486948b9463ffffffff8c51988997889687957fb2267a7b00000000000000000000000000000000000000000000000000000000875216809e860152896024860152608060448601528c608486019161096c565b9116606483015203925af18015610210576101f8575b50507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac4936101f2918451948594855280602086015284019161096c565b0390a180f35b610201906108ea565b61020c57845f6101b5565b8480fd5b85513d84823e3d90fd5b8580fd5b5080fd5b8280fd5b83823461021e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021e576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461021e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021e576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461021e57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021e576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106a3576103976108c7565b91602490813573ffffffffffffffffffffffffffffffffffffffff948582168092036106a35760443593606435958787168097036106a357877f000000000000000000000000000000000000000000000000000000000000000016888651947fc676ad290000000000000000000000000000000000000000000000000000000086521698898386015260209485818681865afa9081156107f357908792915f916107b7575b5016036106a35785517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523083820152818482015284816044818d5afa9081156107ad575f91610780575b5087810180911161075557865190858201907f095ea7b30000000000000000000000000000000000000000000000000000000082528386840152604483015260448252608082019167ffffffffffffffff928181108482111761072a5760c08201818110858211176106ff578a528790527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152515f91829190828e5af13d156106f2573d9182116106c7579061057f91885191610570887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116018461092b565b82523d5f8884013e5b8b610a73565b80518581159182156106a7575b50509050156106a3577f00000000000000000000000000000000000000000000000000000000000000006105bf816109aa565b92823b156106a3575f938b9363ffffffff6084948d8c51998a9889977ff219fa660000000000000000000000000000000000000000000000000000000089528801528601528c60448601521660648401525af1801561069957610657575b50825195865285015283015260608201527fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b90608090a180f35b608095939197509161068b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9795936108ea565b5f979193955091939561061d565b84513d5f823e3d90fd5b5f80fd5b83809293500103126106a35784015180151581036106a35780855f61058c565b846041857f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b61057f9150606090610579565b876041887f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b866041877f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b836011847f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508481813d83116107a6575b610797818361092b565b810103126106a357515f610488565b503d61078d565b87513d5f823e3d90fd5b80929350878092503d83116107ec575b6107d1818361092b565b810103126106a357519080821682036106a35786915f61043c565b503d6107c7565b88513d5f823e3d90fd5b50346106a3575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106a3576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346106a3575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106a35760209063ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036106a357565b67ffffffffffffffff81116108fe57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176108fe57604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9063ffffffff604051927fd7704bae00000000000000000000000000000000000000000000000000000000845216600483015260208260248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa918215610a68575f92610a34575b508147106106a357565b9091506020813d602011610a60575b81610a506020938361092b565b810103126106a35751905f610a2a565b3d9150610a43565b6040513d5f823e3d90fd5b9015610a8d57815115610a84575090565b3b156106a35790565b5080519081156106a357602001fdfea26469706673582212204724a73096d3ae9547804c77bb828f6d165fda31f456725fa05978cf9e439b6664736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IL1GatewayRouter";
            readonly name: "_l1GatewayRouter";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL1ScrollMessenger";
            readonly name: "_l1ScrollMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL2GasPriceOracle";
            readonly name: "_l2GasPriceOracle";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_l2MessageRelayGasLimit";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "_l2TokenRelayGasLimit";
            readonly type: "uint32";
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
        readonly name: "L1_GATEWAY_ROUTER";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1GatewayRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_SCROLL_MESSENGER";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1ScrollMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_GAS_PRICE_ORACLE";
        readonly outputs: readonly [{
            readonly internalType: "contract IL2GasPriceOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_MESSAGE_RELAY_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L2_TOKEN_RELAY_GAS_LIMIT";
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
    static createInterface(): Scroll_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Scroll_Adapter;
}
export {};
