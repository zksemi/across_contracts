import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Blast_Adapter, Blast_AdapterInterface } from "../../../../contracts/chain-adapters/Blast_Adapter.sol/Blast_Adapter";
declare type Blast_AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Blast_Adapter__factory extends ContractFactory {
    constructor(...args: Blast_AdapterConstructorParams);
    deploy(_l1Weth: string, _crossDomainMessenger: string, _l1StandardBridge: string, _l1Usdc: string, l1BlastBridge: string, l1Dai: string, l2GasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<Blast_Adapter>;
    getDeployTransaction(_l1Weth: string, _crossDomainMessenger: string, _l1StandardBridge: string, _l1Usdc: string, l1BlastBridge: string, l1Dai: string, l2GasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): Blast_Adapter;
    connect(signer: Signer): Blast_Adapter__factory;
    static readonly bytecode = "0x6101a03461017457601f61107038819003918201601f19168301916001600160401b038311848410176101785780849260e0946040528339810103126101745780516001600160a01b039182821682036101745761005f6020820161018c565b926040820151818116810361017457606083015194828616860361017457608084015192831683036101745760c061009960a0860161018c565b9401519563ffffffff9182881688036101745760805260c0525f60e05260a05261012093845261014090815261016091825261018092835261010094855260405193610ecf95866101a1873960805186818161012201526103d7015260a05186610436015260c05186610ad1015260e0518661036801525185818161019a015281816104950152818161060b0152818161076c01526108af01525184818161052a0152610a650152518381816105a90152818161084601526109f70152518281816102f9015261070301525181818161028a01526106da0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffd5b51906001600160a01b03821682036101745756fe6080604081815260049081361015610015575f80fd5b5f925f3560e01c90816311eac85514610a89575080631efd482a14610a1b57806335a2db6a146109ad57806352c8c75c146104b95780635e743ef71461045a5780636e400983146103fb578063927ede2d1461038c5780639748cf7c1461031d578063b3bc180c146102ae578063e5216af71461023f5763e6eb8ade1461009a575f80fd5b807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023b576100cb610af5565b91602435928467ffffffffffffffff918286116102375736602387011215610237578584013592831161023757602486019560248436920101116102375773ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001690813b1561023357839187519384927f3dbb202b000000000000000000000000000000000000000000000000000000008452168097830152606060248301528183816101938c8a6064840191610b9a565b63ffffffff7f000000000000000000000000000000000000000000000000000000000000000016604483015203925af1801561022957610211575b50507f9e6c52944e331ba6270e7fe4cea2a4086bae8f7a27e1cdba07f416806f5d0ac49361020b9184519485948552806020860152840191610b9a565b0390a180f35b61021a90610b18565b61022557845f6101ce565b8480fd5b85513d84823e3d90fd5b8380fd5b5080fd5b8280fd5b83823461023757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610237576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461023757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610237576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461023757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610237576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461023757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610237576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461023757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610237576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b83823461023757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610237576020905163ffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b509060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109a9576104ed610af5565b6024359173ffffffffffffffffffffffffffffffffffffffff91828416908185036109a9576044359260643594808616958681036109a9578993827f0000000000000000000000000000000000000000000000000000000000000000169183821699838b145f146106d357505050803b156102335783809160248b51809481937f2e1a7d4d0000000000000000000000000000000000000000000000000000000083528b898401525af19081156106c95784916106b5575b50507f00000000000000000000000000000000000000000000000000000000000000001690813b1561023b578560848492878b5195869485937f9a2ac6d500000000000000000000000000000000000000000000000000000000855284015263ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166024840152606060448401528560648401525af180156106ab5761068b575b5050907fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9460809493925b815194855260208501528301526060820152a180f35b610699909594939295610b18565b6106a757909192855f61064a565b8580fd5b87513d84823e3d90fd5b6106be90610b18565b61023b57825f6105a5565b89513d86823e3d90fd5b91939092507f000000000000000000000000000000000000000000000000000000000000000081168a03610839577f0000000000000000000000000000000000000000000000000000000000000000169061072f88838c610bd8565b813b156106a7578580946107df8a978e51988997889687957f540abf730000000000000000000000000000000000000000000000000000000087527f000000000000000000000000000000000000000000000000000000000000000094870193909163ffffffff9360e0969373ffffffffffffffffffffffffffffffffffffffff92838092168852166020870152166040850152606084015216608082015260c060a08201525f60c08201520190565b03925af180156106ab5761081d575b5050907fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b946080949392610675565b61082b909594939295610b18565b6106a757909192855f6107ee565b90919293945098959697987f0000000000000000000000000000000000000000000000000000000000000000169061087288838c610bd8565b813b156109a9575f80946109228a978a51988997889687957f838b25200000000000000000000000000000000000000000000000000000000087527f000000000000000000000000000000000000000000000000000000000000000094870193909163ffffffff9360e0969373ffffffffffffffffffffffffffffffffffffffff92838092168852166020870152166040850152606084015216608082015260c060a08201525f60c08201520190565b03925af1801561099f5761095f575b5091608093917fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b9593610675565b7fd7e09655439c3932e55857df3220186e5a7f0980825f20691c2b35d941dee75b95939196509161099260809593610b18565b5f96919395509193610931565b83513d5f823e3d90fd5b5f80fd5b50346109a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346109a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109a9576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346109a9575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109a95760209073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036109a957565b67ffffffffffffffff8111610b2c57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610b2c57604052565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b9291909273ffffffffffffffffffffffffffffffffffffffff809116604051917fdd62ed3e000000000000000000000000000000000000000000000000000000008352306004840152602495169182868201526020938482604481865afa918215610e65575f92610e36575b508101809111610e0a5760405190848201937f095ea7b3000000000000000000000000000000000000000000000000000000008552878301526044820152604481526080810167ffffffffffffffff9382821085831117610dde5760c083019282841086851117610db257865f94938594604052527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152519082855af1903d15610da1573d928311610d7557610d3d9394955060405192610d30867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160185610b59565b83523d5f8685013e610e70565b8051918215918215610d55575b50509050156109a957565b8092508193810103126109a957015180151581036109a957805f80610d4a565b857f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b9150610d3d92939450606091610e70565b887f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b877f4e487b71000000000000000000000000000000000000000000000000000000005f5260416004525ffd5b857f4e487b71000000000000000000000000000000000000000000000000000000005f5260116004525ffd5b9091508481813d8311610e5e575b610e4e8183610b59565b810103126109a95751905f610c44565b503d610e44565b6040513d5f823e3d90fd5b9015610e8a57815115610e81575090565b3b156109a95790565b5080519081156109a957602001fdfea2646970667358221220c748fdb65978295ddf0b91da10d84281e504619956a3d117ec7c60dec6d0e21164736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract WETH9Interface";
            readonly name: "_l1Weth";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_crossDomainMessenger";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL1StandardBridge";
            readonly name: "_l1StandardBridge";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "_l1Usdc";
            readonly type: "address";
        }, {
            readonly internalType: "contract IL1ERC20Bridge";
            readonly name: "l1BlastBridge";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "l1Dai";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "l2GasLimit";
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
        readonly name: "L1_BLAST_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1ERC20Bridge";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_DAI";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "L1_STANDARD_BRIDGE";
        readonly outputs: readonly [{
            readonly internalType: "contract IL1StandardBridge";
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
        readonly name: "L2_GAS_LIMIT";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MESSENGER";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "cctpTokenMessenger";
        readonly outputs: readonly [{
            readonly internalType: "contract ITokenMessenger";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recipientCircleDomainId";
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
    }, {
        readonly inputs: readonly [];
        readonly name: "usdcToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Blast_AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Blast_Adapter;
}
export {};
