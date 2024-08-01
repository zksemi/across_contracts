import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC7683OrderDepositorExternal, ERC7683OrderDepositorExternalInterface } from "../../../contracts/erc7683/ERC7683OrderDepositorExternal";
declare type ERC7683OrderDepositorExternalConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC7683OrderDepositorExternal__factory extends ContractFactory {
    constructor(...args: ERC7683OrderDepositorExternalConstructorParams);
    deploy(_spokePool: string, _permit2: string, _quoteBeforeDeadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ERC7683OrderDepositorExternal>;
    getDeployTransaction(_spokePool: string, _permit2: string, _quoteBeforeDeadline: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ERC7683OrderDepositorExternal;
    connect(signer: Signer): ERC7683OrderDepositorExternal__factory;
    static readonly bytecode = "0x60e0346100d757601f611c1238819003918201601f19168301916001600160401b038311848410176100db578084926060946040528339810103126100d7578051906001600160a01b039081831683036100d757602081015191821682036100d757604001519060805260a05260c052604051611b2290816100f08239608051818181610ac301528181610bf20152611234015260a05181818160a001528181610cca01528181610cf70152610f7c015260c051818181610d8901528181610e3401528181610eff01528181610fd801526111c60152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816329cb924d14611258575080636afdd850146111ea5780638021fef71461117c578063962fc2a3146106585780639a35898914610543578063bf6d01d3146100c65763d881b1121461006b575f80fd5b346100c357807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c35760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b80fd5b50346100c35760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c35767ffffffffffffffff60043581811161053f5761011790369060040161144d565b9060243590811161053f57610130903690600401611407565b6060610100604051610141816112cc565b85815285602082015285604082015285838201528560808201528560a08201528260c08201528260e0820152015273ffffffffffffffffffffffffffffffffffffffff825116300361051557606082019063ffffffff82511646036104eb576101ae9060c08401516115fd565b9091604051906101bd8261129c565b60018252855b602081106104c8575073ffffffffffffffffffffffffffffffffffffffff84511660208501908151604051916101f88361129c565b8252602082015261020884611763565b5261021283611763565b5061021b61179d565b9373ffffffffffffffffffffffffffffffffffffffff604087015116606087015173ffffffffffffffffffffffffffffffffffffffff60a08901511663ffffffff60808a0151169160405193610270856112e9565b845260208401526040830152606082015261028a86611763565b5261029485611763565b5073ffffffffffffffffffffffffffffffffffffffff806102b361179d565b97511692519151169063ffffffff46116104c457604098979851926102d7846112e9565b83526020830152604082015263ffffffff461660608201526102f885611763565b5261030284611763565b5073ffffffffffffffffffffffffffffffffffffffff6020870151169563ffffffff604082015192511663ffffffff60a08160808501511693015116926040519861034c8a6112cc565b308a5260208a015260408901526060880152608087015260a086015260c085015260e084015261010083015260405180926020825273ffffffffffffffffffffffffffffffffffffffff815116602083015273ffffffffffffffffffffffffffffffffffffffff60208201511660408301526040810151606083015263ffffffff606082015116608083015263ffffffff60808201511660a083015263ffffffff60a08201511660c083015260c08101516101208060e0850152815180610140860152602061016086019301955b81811061047a57505061047693945061010061046560e0850151937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0948589830301848a0152611557565b930151918584030190850152611557565b0390f35b91939594509160206040826104b260019489516020809173ffffffffffffffffffffffffffffffffffffffff81511684520151910152565b0195019101918694929593919561041a565b5f80fd5b6020906040516104d78161129c565b8881528883820152828286010152016101c3565b60046040517f5f87bc00000000000000000000000000000000000000000000000000000000008152fd5b60046040517f70e02d13000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b50346100c35760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c35767ffffffffffffffff9060043582811161065457610595903690600401611407565b906024359283116100c357506105b26105b8923690600401611407565b906115fd565b906040519182916040835261064873ffffffffffffffffffffffffffffffffffffffff9182815116604086015260208101516060860152826040820151166080860152606081015160a086015260e060808201519163ffffffff80931660c08801528460a0820151168288015260c081015192610100931683880152015190610120860152610140850190611514565b91511660208301520390f35b5080fd5b50346104c45760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104c45760043567ffffffffffffffff81116104c4576106a890369060040161144d565b9060243567ffffffffffffffff81116104c4576106c9903690600401611407565b9160443567ffffffffffffffff81116104c4576106ea903690600401611407565b73ffffffffffffffffffffffffffffffffffffffff82511630036105155763ffffffff60608301511646036104eb576107279060c08301516115fd565b9373ffffffffffffffffffffffffffffffffffffffff8251166020830151604051916107528361129c565b82526020820152604084015163ffffffff608086015116906040519283606081011067ffffffffffffffff60608601111761114f5760608401604052835260208301526040820152602083015191604051926107ad8461129c565b308452602084015273ffffffffffffffffffffffffffffffffffffffff602086015116916107d96117f4565b6020815191012073ffffffffffffffffffffffffffffffffffffffff865116602087015173ffffffffffffffffffffffffffffffffffffffff604089015116606089015163ffffffff60808b0151169073ffffffffffffffffffffffffffffffffffffffff60a08c0151169263ffffffff60c08d0151169460e08d015160208151910120966040519860208a015260408901526060880152608087015260a086015260c085015260e0840152610100830152610120908183015281528061014081011067ffffffffffffffff6101408301111761114f576101408101604052602081519101206108c7611983565b6108cf6117f4565b61090d60206040518093826108ed81840197888151938492016114f3565b8201610901825180938680850191016114f3565b0103808452018261135a565b5190209073ffffffffffffffffffffffffffffffffffffffff8851169073ffffffffffffffffffffffffffffffffffffffff60208a01511689604081015163ffffffff6060830151169063ffffffff60a0816080860151169401511693604051966020880198895260408801526060870152608086015260a085015260c084015260e083015261010082015261010081526109a7816112cc565b5190206109b26117f4565b926109bb611983565b9360405180606081011067ffffffffffffffff60608301111761114f57610aac9181606060389301604052602e815260208101907f546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c7582527f696e7432353620616d6f756e74290000000000000000000000000000000000006040820152610a9d604051998a947f43726f7373436861696e4f72646572207769746e6573732900000000000000006020870152610a7a8151809260208a8a0191016114f3565b8501610a8f8251809360208a850191016114f3565b0191518093868401906114f3565b0103601881018752018561135a565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163b156104c457610ba7604094610bd8935f97610b8988519a8b998a997f137c29fe000000000000000000000000000000000000000000000000000000008b52610b5060048c0182516020809173ffffffffffffffffffffffffffffffffffffffff81511684520151910152565b60208181015160448d015291015160648b0152815173ffffffffffffffffffffffffffffffffffffffff1660848b0152015160a4890152565b60c487015260e4860152610140610104860152610144850190611514565b907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc84830301610124850152611514565b03818373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165af1801561114457611131575b5073ffffffffffffffffffffffffffffffffffffffff60208301511673ffffffffffffffffffffffffffffffffffffffff60a0830151169073ffffffffffffffffffffffffffffffffffffffff8351169373ffffffffffffffffffffffffffffffffffffffff6040850151169360208101519760608201519273ffffffffffffffffffffffffffffffffffffffff63ffffffff60808501511692511663ffffffff60808301511691827f00000000000000000000000000000000000000000000000000000000000000008103116111045763ffffffff7f00000000000000000000000000000000000000000000000000000000000000008403116104c45760a063ffffffff910151169263ffffffff42116104c45763ffffffff60c08601511663ffffffff4216019463ffffffff86116110d75760e00151956040519c7fdd62ed3e000000000000000000000000000000000000000000000000000000008e528d3090600401528d7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690602401528d808d5a92604491602094fa9d8e156110cc578d9e611098575b508d8181011061106b57610ed48d9e8d8f8080936040518760208201927f095ea7b300000000000000000000000000000000000000000000000000000000845273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602484015201604482015260448152610e6c816112e9565b7f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65646020604051610e9b8161129c565b8181520152519082855af1903d15611062573d610eb7816113cd565b90610ec5604051928361135a565b8152809360203d92013e611ac3565b805190811591821561103b575b5050156110375773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163b15611037578c9a6040519c8d9b8c9b7f7b939232000000000000000000000000000000000000000000000000000000008d5260048d015260248c015260448b015260648a0152608489015260a488015260c487015260e48601527f0000000000000000000000000000000000000000000000000000000000000000900363ffffffff1661010485015261012484015263ffffffff16610144830152610164820161018090526101848201610fd391611514565b0381837f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff165af1801561102c5761101c5750f35b611025906112b8565b6100c35780f35b6040513d84823e3d90fd5b8c80fd5b819250906020918101031261105e5760200151801515810361105e575f80610ee1565b8d80fd5b60609250611ac3565b60248d7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b909d506020813d6020116110c4575b816110b46020938361135a565b8101031261103757519c5f610ddd565b3d91506110a7565b6040513d8f823e3d90fd5b60248c7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b60248b7f4e487b710000000000000000000000000000000000000000000000000000000081526011600452fd5b61113c9193506112b8565b5f915f610c1f565b6040513d5f823e3d90fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b346104c4575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104c457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346104c4575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104c457602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b346104c4575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104c45763ffffffff908142116104c45760209142168152f35b6040810190811067ffffffffffffffff82111761114f57604052565b67ffffffffffffffff811161114f57604052565b610120810190811067ffffffffffffffff82111761114f57604052565b6080810190811067ffffffffffffffff82111761114f57604052565b610100810190811067ffffffffffffffff82111761114f57604052565b6020810190811067ffffffffffffffff82111761114f57604052565b60e0810190811067ffffffffffffffff82111761114f57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761114f57604052565b359073ffffffffffffffffffffffffffffffffffffffff821682036104c457565b359063ffffffff821682036104c457565b67ffffffffffffffff811161114f57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b81601f820112156104c45780359061141e826113cd565b9261142c604051948561135a565b828452602083830101116104c457815f926020809301838601378301015290565b91909160e0818403126104c4576040519067ffffffffffffffff9060e083018281118482101761114f5760405282946114858261139b565b84526114936020830161139b565b6020850152604082013560408501526114ae606083016113bc565b60608501526114bf608083016113bc565b60808501526114d060a083016113bc565b60a085015260c08201359283116104c45760c0926114ee9201611407565b910152565b5f5b8381106115045750505f910152565b81810151838201526020016114f5565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093611550815180928187528780880191016114f3565b0116010190565b9081518082526020808093019301915f5b828110611576575050505090565b8351805173ffffffffffffffffffffffffffffffffffffffff908116875281840151878501526040808301519091169087015260609081015163ffffffff169086015260809094019392810192600101611568565b519073ffffffffffffffffffffffffffffffffffffffff821682036104c457565b519063ffffffff821682036104c457565b9190916040805161160d81611305565b5f8152606060e06020925f848201525f858201525f838201525f60808201525f60a08201525f60c082015201525f825161164681611322565b5282518301928184019082818603126104c4578281015167ffffffffffffffff918282116104c45701809561010096879103126104c45784519561168987611305565b6116948583016115cb565b875285820151858801526116aa606083016115cb565b86880152608082015160608801526116c460a083016115ec565b60808801526116d560c083016115cb565b60a08801526116e660e083016115ec565b60c08801528101519182116104c4570181603f820112156104c4578281015161170e816113cd565b9261171b8651948561135a565b8184528582840101116104c457611737918585850191016114f3565b60e084015280858051810103126104c45761175d91519461175786611322565b016115cb565b83529190565b8051156117705760200190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b604090604051916117ad8361129c565b6001835282915f5b6020808210156117ec578351602092916117ce826112e9565b5f82525f818301525f868301525f60608301528288010152016117b5565b505091925050565b6040517f4163726f73734f7264657244617461280000000000000000000000000000000060208201527f6164647265737320696e707574546f6b656e2c0000000000000000000000000060308201527f75696e7432353620696e707574416d6f756e742c00000000000000000000000060438201527f61646472657373206f7574707574546f6b656e2c00000000000000000000000060578201527f75696e74323536206f7574707574416d6f756e742c0000000000000000000000606b8201527f75696e7433322064657374696e6174696f6e436861696e49642c00000000000060808201527f6164647265737320726563697069656e742c0000000000000000000000000000609a8201527f75696e743332206578636c75736976697479446561646c696e654f666673657460ac8201527f2c0000000000000000000000000000000000000000000000000000000000000060cc8201527f6279746573206d6573736167652900000000000000000000000000000000000060cd82015260bb81526119808161133e565b90565b6040517f43726f7373436861696e4f72646572280000000000000000000000000000000060208201527f6164647265737320736574746c656d656e74436f6e74726163742c000000000060308201527f6164647265737320737761707065722c00000000000000000000000000000000604b8201527f75696e74323536206e6f6e63652c000000000000000000000000000000000000605b8201527f75696e743332206f726967696e436861696e49642c000000000000000000000060698201527f75696e74333220696e697469617465446561646c696e652c0000000000000000607e8201527f75696e7433322066696c6c446561646c696e652c00000000000000000000000060968201527f4163726f73734f7264657244617461206f72646572446174612900000000000060aa82015260a481526119808161133e565b9015611add57815115611ad4575090565b3b156104c45790565b5080519081156104c457602001fdfea264697066735822122008e84b5f7c37717267b7072f4e9baf63a8ab66f7ffbfaffb23a350d8933670cf64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "contract IPermit2";
            readonly name: "_permit2";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_quoteBeforeDeadline";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongChainId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongSettlementContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PERMIT2";
        readonly outputs: readonly [{
            readonly internalType: "contract IPermit2";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUOTE_BEFORE_DEADLINE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SPOKE_POOL";
        readonly outputs: readonly [{
            readonly internalType: "contract V3SpokePoolInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "orderData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "decode";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "inputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "inputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "outputToken";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "outputAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "destinationChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "exclusivityDeadlineOffset";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "message";
                readonly type: "bytes";
            }];
            readonly internalType: "struct AcrossOrderData";
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "exclusiveRelayer";
                readonly type: "address";
            }];
            readonly internalType: "struct AcrossFillerData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentTime";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "initiate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes";
                readonly name: "orderData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct CrossChainOrder";
            readonly name: "order";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "fillerData";
            readonly type: "bytes";
        }];
        readonly name: "resolve";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "settlementContract";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "swapper";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "originChainId";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "initiateDeadline";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint32";
                readonly name: "fillDeadline";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct Input[]";
                readonly name: "swapperInputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "chainId";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "swapperOutputs";
                readonly type: "tuple[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "amount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "chainId";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct Output[]";
                readonly name: "fillerOutputs";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct ResolvedCrossChainOrder";
            readonly name: "resolvedOrder";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ERC7683OrderDepositorExternalInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC7683OrderDepositorExternal;
}
export {};
