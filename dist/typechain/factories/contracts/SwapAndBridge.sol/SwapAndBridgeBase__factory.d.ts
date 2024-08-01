import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SwapAndBridgeBase, SwapAndBridgeBaseInterface } from "../../../contracts/SwapAndBridge.sol/SwapAndBridgeBase";
export declare class SwapAndBridgeBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidFunctionSelector";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LeftoverSrcTokens";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinimumExpectedInputAmount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "exchange";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "swapToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "acrossInputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "swapTokenAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "acrossInputAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "acrossOutputToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "acrossOutputAmount";
            readonly type: "uint256";
        }];
        readonly name: "SwapBeforeBridge";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXCHANGE";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly name: "allowedSelectors";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
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
    }];
    static createInterface(): SwapAndBridgeBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapAndBridgeBase;
}
