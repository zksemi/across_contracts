import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../../../../../@openzeppelin/contracts/token/ERC20/ERC20";
declare type ERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20__factory extends ContractFactory {
    constructor(...args: ERC20ConstructorParams);
    deploy(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ERC20>;
    getDeployTransaction(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ERC20;
    connect(signer: Signer): ERC20__factory;
    static readonly bytecode = "0x608060405234620003055762000d10803803806200001d8162000309565b928339810190604081830312620003055780516001600160401b03908181116200030557836200004f9184016200032f565b916020938482015183811162000305576200006b92016200032f565b825182811162000210576003918254916001958684811c94168015620002fa575b88851014620002e6578190601f9485811162000293575b50889085831160011462000230575f9262000224575b50505f1982861b1c191690861b1783555b8051938411620002105760049586548681811c9116801562000205575b82821014620001f257838111620001aa575b50809285116001146200014057509383949184925f9562000134575b50501b925f19911b1c19161790555b6040516109709081620003a08239f35b015193505f8062000115565b92919084601f198116885f52855f20955f905b898383106200018f575050501062000175575b50505050811b01905562000124565b01519060f8845f19921b161c191690555f80808062000166565b85870151895590970196948501948893509081019062000153565b875f52815f208480880160051c820192848910620001e8575b0160051c019087905b828110620001dc575050620000f9565b5f8155018790620001cc565b92508192620001c3565b602288634e487b7160e01b5f525260245ffd5b90607f1690620000e7565b634e487b7160e01b5f52604160045260245ffd5b015190505f80620000b9565b90889350601f19831691875f528a5f20925f5b8c8282106200027c575050841162000264575b505050811b018355620000ca565b01515f1983881b60f8161c191690555f808062000256565b8385015186558c9790950194938401930162000243565b909150855f52885f208580850160051c8201928b8610620002dc575b918a91869594930160051c01915b828110620002cd575050620000a3565b5f81558594508a9101620002bd565b92508192620002af565b634e487b7160e01b5f52602260045260245ffd5b93607f16936200008c565b5f80fd5b6040519190601f01601f191682016001600160401b038111838210176200021057604052565b919080601f84011215620003055782516001600160401b038111620002105760209062000365601f8201601f1916830162000309565b9281845282828701011162000305575f5b8181106200038b5750825f9394955001015290565b85810183015184820184015282016200037656fe6080604090808252600480361015610015575f80fd5b5f3560e01c91826306fdde031461066757508163095ea7b31461062057816318160ddd146105e457816323b872dd14610519578163313ce567146104e0578163395093511461043757816370a08231146103d657816395d89b41146101dd57508063a457c2d71461015f578063a9059cbb146101115763dd62ed3e14610099575f80fd5b3461010d57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d576020906100d261080e565b6100da610831565b9073ffffffffffffffffffffffffffffffffffffffff8091165f5260018452825f2091165f528252805f20549051908152f35b5f80fd5b503461010d57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5760209061015861014e61080e565b60243590336108be565b5160018152f35b503461010d57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5761019661080e565b9060243591335f526001602052815f2073ffffffffffffffffffffffffffffffffffffffff82165f52602052815f20549083821061010d5760209361015892039033610854565b90503461010d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5781515f928254936001948060011c600182169687156103cc575b60209283831089146103a057869798838897985290815f1461034557506001146102ca575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761029e575082918261029a9252826107aa565b0390f35b6041907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b5f888152929493507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061032f57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f9282010191819361024c565b80548885018701528794509285019281016102f4565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061024c565b6022887f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b90607f1690610227565b823461010d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5760209073ffffffffffffffffffffffffffffffffffffffff61042661080e565b165f525f8252805f20549051908152f35b823461010d57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5761046e61080e565b335f526001602052815f2073ffffffffffffffffffffffffffffffffffffffff82165f52602052815f20549260243584018094116104b457506020926101589133610854565b6011907f4e487b71000000000000000000000000000000000000000000000000000000005f525260245ffd5b823461010d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d576020905160128152f35b823461010d5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5761055161080e565b9061055a610831565b6044359073ffffffffffffffffffffffffffffffffffffffff84165f526001602052825f20335f52602052825f20547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81036105bf575b5090610158916020946108be565b919081831061010d576020946105db8361015895033383610854565b945090916105b1565b823461010d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d576020906002549051908152f35b823461010d57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d5760209061015861065d61080e565b6024359033610854565b9091503461010d575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d575f92600354936001948060011c600182169687156107a0575b60209283831089146103a057869798838897985290815f1461034557506001146107235750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff84118385101761029e575082918261029a9252826107aa565b60035f908152929493507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b82841061078a57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f9282010191819361024c565b805488850187015287945092850192810161074f565b90607f16906106b1565b6020808252825181830181905293925f5b8581106107fa575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6040809697860101520116010190565b8181018301518482016040015282016107bb565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361010d57565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361010d57565b73ffffffffffffffffffffffffffffffffffffffff80911691821561010d571691821561010d5760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591835f526001825260405f20855f5282528060405f2055604051908152a3565b73ffffffffffffffffffffffffffffffffffffffff80911691821561010d571691821561010d57815f525f60205260405f209081549080821061010d577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281602093039055845f5260405f20818154019055604051908152a356fea264697066735822122017dc2e3ced32f42a85f9b85b39f3fbae70087564b92983d0d7d72e46604701f064736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name_";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol_";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}
export {};
