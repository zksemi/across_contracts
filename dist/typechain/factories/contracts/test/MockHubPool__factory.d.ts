import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockHubPool, MockHubPoolInterface } from "../../../contracts/test/MockHubPool";
declare type MockHubPoolConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockHubPool__factory extends ContractFactory {
    constructor(...args: MockHubPoolConstructorParams);
    deploy(_adapter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<MockHubPool>;
    getDeployTransaction(_adapter: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MockHubPool;
    connect(signer: Signer): MockHubPool__factory;
    static readonly bytecode = "0x60a03461008757601f6107a738819003918201601f19168301916001600160401b0383118484101761008b5780849260209460405283398101031261008757516001600160a01b03811690819003610087575f80546001600160a01b0319169190911790553360805260405161070790816100a0823960805181818161023101526102fa0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604090808252600436101561001d575b5050361561001b57005b005b5f3560e01c90816303eadcfc146105105750806352c8c75c146104335780637770a8a71461031e5780638da5cb5b146102b0578063ae0bcf2b146101e15763f7888aec1461006b5780610011565b346101b057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b0576100a161055d565b906100aa610580565b9173ffffffffffffffffffffffffffffffffffffffff90815f5416918351947f70a08231000000000000000000000000000000000000000000000000000000006020870152166024850152602484526060840184811067ffffffffffffffff8211176101b45761019c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa05f968388975261016f8160808101967fe6eb8ade0000000000000000000000000000000000000000000000000000000088526084820161064d565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808101845201826105a3565b51915af46101a861061e565b50156101b057005b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b346101b05760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b05761021861055d565b73ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001633036101b05781169081156101b0575f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167fc3f1d9acbad3d58bdbd12ae988485b64e4247fde6ecb72188ee8e0edaf73ca3e5f80a3005b50346101b0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b0576020905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101b057807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b05761035561055d565b6024359167ffffffffffffffff83116101b057366023840112156101b057826004013591610382836105e4565b9261038f835194856105a3565b80845236602482870101116101b05761019c5f959486602084610407956024849a01838601378301015273ffffffffffffffffffffffffffffffffffffffff865416945192839160208301957fe6eb8ade0000000000000000000000000000000000000000000000000000000087526024840161064d565b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081018352826105a3565b50346101b05760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b05761046b61055d565b90610474610580565b916064359073ffffffffffffffffffffffffffffffffffffffff918281168091036101b057825f5416928451958160208801947f52c8c75c000000000000000000000000000000000000000000000000000000008652166024880152166044860152604435606486015260848501526084845260c084019380851067ffffffffffffffff8611176101b4575f9485945251915af46101a861061e565b346101b0575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101b05760209073ffffffffffffffffffffffffffffffffffffffff5f54168152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036101b057565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036101b057565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176101b457604052565b67ffffffffffffffff81116101b457601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b3d15610648573d9061062f826105e4565b9161063d60405193846105a3565b82523d5f602084013e565b606090565b9073ffffffffffffffffffffffffffffffffffffffff909392931681526020604060208301528351938460408401525f5b8581106106bd575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f845f6060809697860101520116010190565b81810183015184820160600152820161067e56fea2646970667358221220c8da5b12765975957327b51f14237137ae77c34f9e2278d3ca15d6b3b722459164736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_adapter";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAdapter";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAdapter";
            readonly type: "address";
        }];
        readonly name: "AdapterChanged";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "adapter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly name: "l2CallData";
            readonly type: "bytes";
        }];
        readonly name: "arbitraryMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "l2Token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_adapter";
            readonly type: "address";
        }];
        readonly name: "changeAdapter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): MockHubPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockHubPool;
}
export {};
