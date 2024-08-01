import { Signer, ContractFactory, PayableOverrides, BytesLike } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BeaconProxy, BeaconProxyInterface } from "../../../../../@openzeppelin/contracts/proxy/beacon/BeaconProxy";
declare type BeaconProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BeaconProxy__factory extends ContractFactory {
    constructor(...args: BeaconProxyConstructorParams);
    deploy(beacon: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<BeaconProxy>;
    getDeployTransaction(beacon: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): BeaconProxy;
    connect(signer: Signer): BeaconProxy__factory;
    static readonly bytecode = "0x60806040908082526105ee803803809161001982856102ac565b8339810190828183031261023d57610030816102cf565b60208083015190926001600160401b0392919083821161023d570184601f8201121561023d57805190610062826102e3565b9561006f885197886102ac565b82875285838301011161023d5784905f5b8381106102985750505f9186010152803b1561023d578451635c60da1b60e01b80825292916001600160a01b0316908481600481855afa90811561028e575f91610259575b503b1561023d577fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b03191682179055855192817f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e5f80a2855115801590610252575b610143575b86516102c690816103288239f35b6004848693819382525afa918215610248575f9261020d575b5084519060608201908111828210176101f9576101e494660819985a5b195960ca1b875f9485948252602781527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c8882015201528481519101845af4903d156101f0573d6101c9816102e3565b906101d6875192836102ac565b81525f81943d92013e6102fe565b505f8080808080610135565b606092506102fe565b634e487b7160e01b5f52604160045260245ffd5b9091508281813d8311610241575b61022581836102ac565b8101031261023d57610236906102cf565b905f61015c565b5f80fd5b503d61021b565b85513d5f823e3d90fd5b505f610130565b90508481813d8311610287575b61027081836102ac565b8101031261023d57610281906102cf565b5f6100c5565b503d610266565b87513d5f823e3d90fd5b818101830151888201840152869201610080565b601f909101601f19168101906001600160401b038211908210176101f957604052565b51906001600160a01b038216820361023d57565b6001600160401b0381116101f957601f01601f191660200190565b90156103185781511561030f575090565b3b1561023d5790565b50805190811561023d57602001fdfe6080806040523661011c5760208160048173ffffffffffffffffffffffffffffffffffffffff7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5054167f5c60da1b0000000000000000000000000000000000000000000000000000000082525afa908115610111575f91610081575b50610273565b905060203d60201161010a575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f82011682019180831067ffffffffffffffff8411176100dd576100d792604052016101f6565b5f61007b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b503d61008e565b6040513d5f823e3d90fd5b6004602073ffffffffffffffffffffffffffffffffffffffff7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505416604051928380927f5c60da1b0000000000000000000000000000000000000000000000000000000082525afa908115610111575f916101975750610273565b602091503d82116101ee575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011681019181831067ffffffffffffffff8411176100dd576100d792604052810190610247565b3d91506101a3565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060209101126102435760805173ffffffffffffffffffffffffffffffffffffffff811681036102435790565b5f80fd5b90816020910312610243575173ffffffffffffffffffffffffffffffffffffffff811681036102435790565b5f8091368280378136915af43d5f803e1561028c573d5ff35b3d5ffdfea264697066735822122047e5202f114d0289c4ecb2834abac0ac9cfa25f552d006a47395111a05860aad64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): BeaconProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BeaconProxy;
}
export {};
