import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UpgradeableBeacon, UpgradeableBeaconInterface } from "../../../../../@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon";
declare type UpgradeableBeaconConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UpgradeableBeacon__factory extends ContractFactory {
    constructor(...args: UpgradeableBeaconConstructorParams);
    deploy(implementation_: string, overrides?: Overrides & {
        from?: string;
    }): Promise<UpgradeableBeacon>;
    getDeployTransaction(implementation_: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): UpgradeableBeacon;
    connect(signer: Signer): UpgradeableBeacon__factory;
    static readonly bytecode = "0x6080346100ab57601f61040738819003918201601f19168301916001600160401b038311848410176100af578084926020946040528339810103126100ab57516001600160a01b0390818116908181036100ab575f549060018060a01b03199133838216175f55604051943391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a33b156100ab57600154161760015561034390816100c48239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f3560e01c9081633659cfe61461023e5781635c60da1b146101f057508063715018a6146101565780638da5cb5b146101065763f2fde38b14610053575f80fd5b346101025760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101025760043573ffffffffffffffffffffffffffffffffffffffff808216809203610102576100ac6102ed565b8115610102575f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b5f80fd5b34610102575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010257602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b34610102575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101025761018c6102ed565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b34610102575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101025760209073ffffffffffffffffffffffffffffffffffffffff600154168152f35b346101025760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101025760043573ffffffffffffffffffffffffffffffffffffffff811690818103610102576102976102ed565b3b1561010257807fffffffffffffffffffffffff000000000000000000000000000000000000000060015416176001557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b5f80a2005b73ffffffffffffffffffffffffffffffffffffffff5f541633036101025756fea26469706673582212208ffed8e8f57f4a2681df08ae01bac981d6ed3dc4451be906fa41e868fdb2e5c864736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
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
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): UpgradeableBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableBeacon;
}
export {};
