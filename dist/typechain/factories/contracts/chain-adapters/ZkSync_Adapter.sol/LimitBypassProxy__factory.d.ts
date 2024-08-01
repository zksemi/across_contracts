import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LimitBypassProxy, LimitBypassProxyInterface } from "../../../../contracts/chain-adapters/ZkSync_Adapter.sol/LimitBypassProxy";
declare type LimitBypassProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LimitBypassProxy__factory extends ContractFactory {
    constructor(...args: LimitBypassProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<LimitBypassProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): LimitBypassProxy;
    connect(signer: Signer): LimitBypassProxy__factory;
    static readonly bytecode = "0x60808060405234610016576108ed908161001b8239f35b5f80fdfe608060409080825260049081361015610016575f80fd5b5f3560e01c9081637c19f0051461077557508063b473318e14610695578063bb3e04b514610649578063e8b99b1b146102c75763eb67241914610057575f80fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc9160e0833601126102305761008b6107bf565b60246044359467ffffffffffffffff95868111610230573660238201121561023057808601359287841161023057368185840101116102305760a4358881116102305736602382011215610230578088013595898711610230578660051b93368486850101116102305760c4359673ffffffffffffffffffffffffffffffffffffffff9a8b8916809903610230578b99928d959261016d928d9b96989d519c8d997feb672419000000000000000000000000000000000000000000000000000000008b5216908901528c358d89015260e060448901528c60e489019201610850565b96606435606487015260843560848701528588030160a48601528187526020998a9687808a01918a010195828401995f947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd81360301915b878710610245578b8b8f8282808f8f60c48301520381347332400084c286cf3e17e7b677ea9583e60a0003245af191821561023b575f92610208575b5051908152f35b9091508281813d8311610234575b61022081836107e2565b8101031261023057519083610201565b5f80fd5b503d610216565b50513d5f823e3d90fd5b898194979a9396999c507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09295989b50030186528a358481121561023057830190604488830135920191868111610230578036038313610230578f916102af908392600195610850565b9c01960197019390928c98959a97928e9a97946101c5565b5060c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610230576102fa6107bf565b91602480359073ffffffffffffffffffffffffffffffffffffffff90818316809303610230576044359560a43596838816809803610230578551977fdd62ed3e00000000000000000000000000000000000000000000000000000000895230888a01527357891966931eb4bb6fb81430e6ce0a03aabde0639182858b01526020998a816044818b5afa90811561063f575f91610612575b508181018091116105e7578851908b8201907f095ea7b30000000000000000000000000000000000000000000000000000000082528588840152604483015260448252608082019167ffffffffffffffff92818110848211176105bc5760c0820181811085821117610591578c528d90527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460a0820152515f91829190828c5af1903d15610584573d9081116105595761048b918c918b519061047b847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601836107e2565b81525f81933d92013e5b8961088e565b80518b8115918215610539575b505090501561023057899660c49589519a8b9889977fe8b99b1b000000000000000000000000000000000000000000000000000000008952169087015285015260448401526064356064840152608435608484015260a483015234905af191821561023b575f9261050a575051908152f35b9091508281813d8311610532575b61052281836107e2565b810103126102305751905f610201565b503d610518565b8380929350010312610230578a0151801515810361023057808b5f610498565b8660418c7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b5061048b90606090610485565b8960418f7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8860418e7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b8560118b7f4e487b71000000000000000000000000000000000000000000000000000000005f52525ffd5b90508a81813d8311610638575b61062981836107e2565b8101031261023057515f610391565b503d61061f565b89513d5f823e3d90fd5b8234610230575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023057602090517357891966931eb4bb6fb81430e6ce0a03aabde0638152f35b5090346102305760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610230578051917fb473318e000000000000000000000000000000000000000000000000000000008352803590830152602435602483015260443560448301526020826064817332400084c286cf3e17e7b677ea9583e60a0003245afa90811561076c575f91610737575b6020925051908152f35b90506020823d602011610764575b81610752602093836107e2565b8101031261023057602091519061072d565b3d9150610745565b513d5f823e3d90fd5b34610230575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261023057807332400084c286cf3e17e7b677ea9583e60a00032460209252f35b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361023057565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761082357604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe093818652868601375f8582860101520116010190565b90156108a85781511561089f575090565b3b156102305790565b50805190811561023057602001fdfea26469706673582212209653feb38604be91f55f620cf6b631bf7d8f18991cbf0a7921ade4471732b67264736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_l2Receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_l1Token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2TxGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2TxGasPerPubdataByte";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_refundRecipient";
            readonly type: "address";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_l1GasPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasPerPubdataByteLimit";
            readonly type: "uint256";
        }];
        readonly name: "l2TransactionBaseCost";
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
            readonly name: "_contractL2";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2Value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_calldata";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_l2GasPerPubdataByteLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_factoryDeps";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "address";
            readonly name: "_refundRecipient";
            readonly type: "address";
        }];
        readonly name: "requestL2Transaction";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "canonicalTxHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "zkErc20Bridge";
        readonly outputs: readonly [{
            readonly internalType: "contract ZkBridgeLike";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "zkSync";
        readonly outputs: readonly [{
            readonly internalType: "contract ZkSyncInterface";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): LimitBypassProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LimitBypassProxy;
}
export {};
