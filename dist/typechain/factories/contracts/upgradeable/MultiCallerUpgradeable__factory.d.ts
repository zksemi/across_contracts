import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiCallerUpgradeable, MultiCallerUpgradeableInterface } from "../../../contracts/upgradeable/MultiCallerUpgradeable";
declare type MultiCallerUpgradeableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MultiCallerUpgradeable__factory extends ContractFactory {
    constructor(...args: MultiCallerUpgradeableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<MultiCallerUpgradeable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MultiCallerUpgradeable;
    connect(signer: Signer): MultiCallerUpgradeable__factory;
    static readonly bytecode = "0x608080604052346100165761064e908161001b8239f35b5f80fdfe604060806040526004361015610013575f80fd5b5f3560e01c908163437b911614610038575063ac9650d814610033575f80fd5b610304565b3461011a576100463661011e565b906100586100538361043a565b6103f6565b928284527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06100868461043a565b015f5b8181106100fa5750505f5b8381106100ad57604051806100a987826101ed565b0390f35b806100f46100bd6001938861047f565b515f806100cb858a8a610498565b906100da8951809381936104f8565b0390305af4906100e861053f565b60208201529015159052565b01610094565b6020906101056103d1565b5f815282606081830152828901015201610089565b5f80fd5b9060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261011a5760043567ffffffffffffffff9283821161011a578060238301121561011a57816004013593841161011a5760248460051b8301011161011a576024019190565b5f5b83811061019a5750505f910152565b818101518382015260200161018b565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936101e681518092818752878088019101610189565b0116010190565b6020808201908083528351809252604092604081018260408560051b8401019601945f925b858410610223575050505050505090565b909192939495968580610272837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0866001960301885286838d51805115158452015191818582015201906101aa565b990194019401929594939190610212565b6020808201906020835283518092526040830192602060408460051b8301019501935f915b8483106102b85750505050505090565b90919293949584806102f4837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a516101aa565b98019301930191949392906102a8565b3461011a576103123661011e565b9061031c82610564565b915f5b81811061033457604051806100a98682610283565b5f80610341838587610498565b90610351604051809381936104f8565b0390305af461035e61053f565b90156103845790600191610372828761047f565b5261037d818661047f565b500161031f565b604481511061011a5780600461011a9201516024809183010191016105c0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051906040820182811067ffffffffffffffff8211176103f157604052565b6103a4565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff8211176103f157604052565b67ffffffffffffffff81116103f15760051b60200190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b80518210156104935760209160051b010190565b610452565b91908110156104935760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561011a57019081359167ffffffffffffffff831161011a57602001823603811361011a579190565b908092918237015f815290565b67ffffffffffffffff81116103f157601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d1561055f573d9061055361005383610505565b9182523d5f602084013e565b606090565b906105716100538361043a565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061059f829461043a565b01905f5b8281106105af57505050565b8060606020809385010152016105a3565b60208183031261011a5780519067ffffffffffffffff821161011a570181601f8201121561011a5780516105f661005382610505565b928184526020828401011161011a576106159160208085019101610189565b9056fea2646970667358221220110db8fa9d792e636f91ec81c00c458430ecca304045a27c3c7d145943e551fb64736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "tryMulticall";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "success";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "returnData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct MultiCallerUpgradeable.Result[]";
            readonly name: "results";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MultiCallerUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MultiCallerUpgradeable;
}
export {};
