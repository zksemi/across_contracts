import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyAdmin, ProxyAdminInterface } from "../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin";
declare type ProxyAdminConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProxyAdmin__factory extends ContractFactory {
    constructor(...args: ProxyAdminConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<ProxyAdmin>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): ProxyAdmin;
    connect(signer: Signer): ProxyAdmin__factory;
    static readonly bytecode = "0x6080806040523461005a575f8054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a3610821908161005f8239f35b5f80fdfe60806040818152600480361015610014575f80fd5b5f925f3560e01c908163204e1c7a146105d257508063715018a6146105385780637eff275e146104705780638da5cb5b1461041f5780639623609d146102a65783816399a88ec4146101d657508063f2fde38b146101265763f3b7dead1461007a575f80fd5b346101225760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012257828073ffffffffffffffffffffffffffffffffffffffff92836100ca61066e565b168551907ff851a4400000000000000000000000000000000000000000000000000000000082525afa926100fc610770565b931561011f575061011783602080809651830101910161079f565b169051908152f35b80fd5b8280fd5b833461011f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011f5761015e61066e565b6101666107cb565b73ffffffffffffffffffffffffffffffffffffffff809116908115610122575f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a380f35b929050346102a257807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102a25761020f61066e565b610217610691565b906102206107cb565b73ffffffffffffffffffffffffffffffffffffffff809116803b1561029e57859283602492865197889586947f3659cfe600000000000000000000000000000000000000000000000000000000865216908401525af190811561029557506102855750f35b61028e906106b4565b61011f5780f35b513d84823e3d90fd5b8580fd5b5050fd5b50829060607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261041b576102db61066e565b926102e4610691565b9160443567ffffffffffffffff8111610417573660238201121561041757808201359161031083610736565b9261031d855194856106f5565b80845260209236602483830101116104135781889260246020930183880137850101526103486107cb565b73ffffffffffffffffffffffffffffffffffffffff80971696873b1561040f578451957f4f1ef2860000000000000000000000000000000000000000000000000000000087521690850152826024850152815191826044860152855b8381106103fb57505050828495816064817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f878b85819a860101520116810103019134905af190811561029557506102855750f35b8181018301518682016064015282016103a4565b8680fd5b8780fd5b8480fd5b5080fd5b50503461041b57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261041b5773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b50903461053457807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610534576104a861066e565b6104b0610691565b906104b96107cb565b73ffffffffffffffffffffffffffffffffffffffff809116803b15610534575f9283602492865197889586947f8f28397000000000000000000000000000000000000000000000000000000000865216908401525af190811561052b575061051f575080f35b61052991506106b4565b005b513d5f823e3d90fd5b5f80fd5b34610534575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105345761056e6107cb565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b8383346105345760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610534575f809173ffffffffffffffffffffffffffffffffffffffff948561062561066e565b167f5c60da1b0000000000000000000000000000000000000000000000000000000082525afa91610654610770565b92156105345761011783602080809651830101910161079f565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361053457565b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361053457565b67ffffffffffffffff81116106c857604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176106c857604052565b67ffffffffffffffff81116106c857601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d1561079a573d9061078182610736565b9161078f60405193846106f5565b82523d5f602084013e565b606090565b90816020910312610534575173ffffffffffffffffffffffffffffffffffffffff811681036105345790565b73ffffffffffffffffffffffffffffffffffffffff5f541633036105345756fea26469706673582212207de0bdb9b7df50495046ed5b6df40f3187bb6e8a42623359a1fc066c58f4e01e64736f6c63430008170033";
    static readonly abi: readonly [{
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
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "changeProxyAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "getProxyAdmin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly name: "getProxyImplementation";
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
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITransparentUpgradeableProxy";
            readonly name: "proxy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ProxyAdminInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyAdmin;
}
export {};
