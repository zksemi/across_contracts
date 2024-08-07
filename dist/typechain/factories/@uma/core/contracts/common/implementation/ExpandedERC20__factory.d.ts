import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExpandedERC20, ExpandedERC20Interface } from "../../../../../../@uma/core/contracts/common/implementation/ExpandedERC20";
declare type ExpandedERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ExpandedERC20__factory extends ContractFactory {
    constructor(...args: ExpandedERC20ConstructorParams);
    deploy(_tokenName: string, _tokenSymbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ExpandedERC20>;
    getDeployTransaction(_tokenName: string, _tokenSymbol: string, _tokenDecimals: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ExpandedERC20;
    connect(signer: Signer): ExpandedERC20__factory;
    static readonly bytecode = "0x604060808152346200028a5762001a9b803803806200001e816200050d565b92833981016060828203126200028a5781516001600160401b03908181116200028a57826200004f91850162000533565b91602090818501518381116200028a5786916200006e91870162000533565b9401519160ff948584168094036200028a57845191808311620003f8576003928354906001978883811c93168015620004e2575b87841014620004ce578190601f938481116200047b575b50879084831160011462000418575f926200040c575b50505f1982871b1c191690881b1784555b8251918211620003f85760049283548881811c91168015620003ed575b87821014620003da579081838594931162000385575b508691831160011462000322575f9262000316575b50505f1982851b1c191690861b1790555b60ff19928360065416176006555f80526005928383528585885f200154166200016281620005a3565b6200028a575f80528383526002875f2086810187848254161790555f81550133156200028a5780546001600160a01b03191633179055620001a2620004ed565b5f8152855f528484528686895f20015416620001be81620005a3565b6200028a578590815f5285855283895f208381016002868254161790555f815501905f925b620002d2575b5050505f80528383528585885f200154166200020581620005a3565b156200028a5762000215620004ed565b5f815260025f528484528686895f200154166200023281620005a3565b6200028a57859260025f52858552885f208481016002858254161790555f815501905f935b6200028e575b505050505f805252825f200154166200027681620005a3565b156200028a57516114d89081620005c38239f35b5f80fd5b8051841015620002cc5783861b81018501516001600160a01b031680156200028a57879485915f528387528a5f208286825416179055019362000257565b6200025d565b8051831015620003105782871b81018601516001600160a01b031680156200028a57889384915f528388528b5f2082878254161790550192620001e3565b620001e9565b015190505f8062000128565b90889350601f19831691855f52875f20925f5b898282106200036e575050841162000356575b505050811b01905562000139565b01515f1983871b60f8161c191690555f808062000348565b8385015186558c9790950194938401930162000335565b90919250845f52865f208380860160051c820192898710620003d0575b9186958c929594930160051c01915b828110620003c157505062000113565b5f81558695508b9101620003b1565b92508192620003a2565b602285634e487b7160e01b5f525260245ffd5b90607f1690620000fd565b634e487b7160e01b5f52604160045260245ffd5b015190505f80620000cf565b908a9350601f19831691885f52895f20925f5b8b8282106200046457505084116200044c575b505050811b018455620000e0565b01515f1983891b60f8161c191690555f80806200043e565b8385015186558e979095019493840193016200042b565b909150865f52875f208480850160051c8201928a8610620004c4575b918c91869594930160051c01915b828110620004b5575050620000b9565b5f81558594508c9101620004a5565b9250819262000497565b634e487b7160e01b5f52602260045260245ffd5b92607f1692620000a2565b60405190602082016001600160401b03811183821017620003f857604052565b6040519190601f01601f191682016001600160401b03811183821017620003f857604052565b919080601f840112156200028a5782516001600160401b038111620003f85760209062000569601f8201601f191683016200050d565b928184528282870101116200028a575f5b8181106200058f5750825f9394955001015290565b85810183015184820184015282016200057a565b60031115620005ae57565b634e487b7160e01b5f52602160045260245ffdfe6080604090808252600480361015610015575f80fd5b5f3560e01c91826306fdde0314610fba57508163095ea7b314610f7357816318160ddd14610f3757816323b872dd14610e6c578163313ce56714610e2d5781633950935114610db557816340c10f1914610cfe57816342966c6814610cb45781636be7658b14610ba457816370a0823114610b4357816373cc802a14610a5157816374d0a6761461095457816379cc6790146108ff5781637cdc1cb9146108b257816395d89b41146106b9578163983b2d56146105be578163a457c2d714610540578163a9059cbb146104f2578163aaa14ca314610409578163ab3545e514610388578163d97c05be1461029557508063dd62ed3e146102205763f44637ba1461011d575f80fd5b3461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610154611161565b9060025f526005602052600260ff6001835f20015416610173816111e1565b0361021c5760025f52600560205261018f815f20543390611334565b1561021c5760025f52600560205273ffffffffffffffffffffffffffffffffffffffff6003825f2001921691821561021c57825f526020525f2060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00825416179055339060027f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b5f80fd5b503461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5760209061025a611161565b610262611184565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f528252805f20549051908152f35b90503461021c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5735906102cf611184565b90825f526005602052600160ff81835f200154166102ec816111e1565b0361021c57825f526005602052610307815f20543390611334565b1561021c57600273ffffffffffffffffffffffffffffffffffffffff91845f5260056020525f2001911690811561021c57817fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905533917f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e7465f80a4005b90503461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c573590815f526005602052600160ff81835f200154166103d7816111e1565b0361021c576020915f526005825273ffffffffffffffffffffffffffffffffffffffff6002825f200154169051908152f35b90503461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c573590815f526005602052600260ff6001835f20015416610459816111e1565b0361021c576104683383611334565b1561021c576104c890825f526005602052600333915f20019073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055565b339033907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af5f80a4005b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5760209061053961052f611161565b60243590336113ba565b5160018152f35b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610577611161565b9060243591335f526001602052815f2073ffffffffffffffffffffffffffffffffffffffff82165f52602052815f20549083821061021c5760209361053992039033611350565b823461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c576105f6611161565b600191825f526005602052600260ff84835f20015416610615816111e1565b0361021c57825f526005602052610630815f20543390611334565b1561021c57825f52600560205273ffffffffffffffffffffffffffffffffffffffff6003825f2001921691821561021c57825f526020525f20827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b90503461021c575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5781515f928254936001948060011c600182169687156108a8575b602092838310891461087c57869798838897985290815f1461082157506001146107a6575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761077a57508291826107769252826110fd565b0390f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b5f888152929493507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061080b57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610728565b80548885018701528794509285019281016107d0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610728565b6022887f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b90607f1690610703565b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c576108f66020926108ef611184565b9035611334565b90519015158152f35b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610936611161565b90610940336112db565b1561021c5761053960209260243590611436565b90503461021c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57359061098e611184565b90825f526005602052600260ff6001835f200154166109ac816111e1565b0361021c57825f5260056020526109c7815f20543390611334565b1561021c57825f52600560205273ffffffffffffffffffffffffffffffffffffffff6003825f2001921691821561021c57825f526020525f2060017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082541617905533917f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f5f80a4005b823461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610a89611161565b905f80526005602052600160ff81835f20015416610aa6816111e1565b0361021c575f80526005602052610ac1815f20543390611334565b1561021c57600273ffffffffffffffffffffffffffffffffffffffff915f805260056020525f2001911690811561021c57817fffffffffffffffffffffffff000000000000000000000000000000000000000082541617905533905f7f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e7468180a4005b823461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5760209073ffffffffffffffffffffffffffffffffffffffff610b93611161565b165f525f8252805f20549051908152f35b90503461021c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5735610bdd611184565b91815f526005602052600260ff6001835f20015416610bfb816111e1565b0361021c57815f526005602052610c16815f20543390611334565b1561021c57826003610c7592845f5260056020525f20019073ffffffffffffffffffffffffffffffffffffffff165f5260205260405f207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008154169055565b73ffffffffffffffffffffffffffffffffffffffff339216907feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af5f80a4005b3461021c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610cec336112db565b1561021c57610cfc903533611436565b005b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610d35611161565b9060243591610d4333611218565b1561021c5773ffffffffffffffffffffffffffffffffffffffff16801561021c575f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602085610d9682976002546111a7565b6002558484528382528584208181540190558551908152a35160018152f35b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57602090610539610df2611161565b335f5260018452825f2073ffffffffffffffffffffffffffffffffffffffff82165f528452610e26602435845f20546111a7565b9033611350565b823461021c575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c5760209060ff600654169051908152f35b823461021c5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57610ea4611161565b90610ead611184565b6044359073ffffffffffffffffffffffffffffffffffffffff84165f526001602052825f20335f52602052825f20547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610f12575b5090610539916020946113ba565b919081831061021c57602094610f2e8361053995033383611350565b94509091610f04565b823461021c575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c576020906002549051908152f35b823461021c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c57602090610539610fb0611161565b6024359033611350565b9091503461021c575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021c575f92600354936001948060011c600182169687156110f3575b602092838310891461087c57869798838897985290815f1461082157506001146110765750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761077a57508291826107769252826110fd565b60035f908152929493507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8284106110dd57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610728565b80548885018701528794509285019281016110a2565b90607f1690611004565b6020808252825181830181905293925f5b85811061114d575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b81810183015184820160400152820161110e565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361021c57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361021c57565b919082018092116111b457565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b600311156111eb57565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60015f5260056020527f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017c547f1471eb6eb2c5e789fc3de43f8ce62938c7d1836ec861730447e2ada8fd81017b9060ff16611271816111e1565b6001810361129c57506002015473ffffffffffffffffffffffffffffffffffffffff91821691161490565b806112a86002926111e1565b146112b1575f80fd5b73ffffffffffffffffffffffffffffffffffffffff600392165f520160205260ff60405f20541690565b60025f5260056020527f89832631fb3c3307a103ba2c84ab569c64d6182a18893dcd163f0f1c2090733b547f89832631fb3c3307a103ba2c84ab569c64d6182a18893dcd163f0f1c2090733a9060ff16611271816111e1565b5f52600560205260405f2060ff600182015416611271816111e1565b73ffffffffffffffffffffffffffffffffffffffff80911691821561021c571691821561021c5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b73ffffffffffffffffffffffffffffffffffffffff80911691821561021c571691821561021c57815f525f60205260405f209081549080821061021c577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281602093039055845f5260405f20818154019055604051908152a3565b73ffffffffffffffffffffffffffffffffffffffff16801561021c57805f525f60205260405f20805483811061021c57837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef925f956020930390558060025403600255604051908152a356fea2646970667358221220edf97a233d31a8e061b0c3a5a718c9c22263bc886c589c0b9087606bd930587b64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_tokenName";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_tokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "_tokenDecimals";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "manager";
            readonly type: "address";
        }];
        readonly name: "AddedSharedMember";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldMember";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "manager";
            readonly type: "address";
        }];
        readonly name: "RemovedSharedMember";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "manager";
            readonly type: "address";
        }];
        readonly name: "ResetExclusiveMember";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addBurner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }];
        readonly name: "addMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addMinter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }];
        readonly name: "getMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "memberToCheck";
            readonly type: "address";
        }];
        readonly name: "holdsRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "memberToRemove";
            readonly type: "address";
        }];
        readonly name: "removeMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }];
        readonly name: "renounceMembership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "roleId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "newMember";
            readonly type: "address";
        }];
        readonly name: "resetMember";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "resetOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ExpandedERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ExpandedERC20;
}
export {};
