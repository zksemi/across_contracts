import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace SpokePoolInterface {
    type RelayerRefundLeafStruct = {
        amountToReturn: BigNumberish;
        chainId: BigNumberish;
        refundAmounts: BigNumberish[];
        leafId: BigNumberish;
        l2TokenAddress: string;
        refundAddresses: string[];
    };
    type RelayerRefundLeafStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber[],
        number,
        string,
        string[]
    ] & {
        amountToReturn: BigNumber;
        chainId: BigNumber;
        refundAmounts: BigNumber[];
        leafId: number;
        l2TokenAddress: string;
        refundAddresses: string[];
    };
}
export interface SpokePoolInterfaceInterface extends utils.Interface {
    functions: {
        "chainId()": FunctionFragment;
        "deposit(address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "depositFor(address,address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "emergencyDeleteRootBundle(uint256)": FunctionFragment;
        "executeRelayerRefundLeaf(uint32,(uint256,uint256,uint256[],uint32,address,address[]),bytes32[])": FunctionFragment;
        "pauseDeposits(bool)": FunctionFragment;
        "pauseFills(bool)": FunctionFragment;
        "relayRootBundle(bytes32,bytes32)": FunctionFragment;
        "setCrossDomainAdmin(address)": FunctionFragment;
        "setEnableRoute(address,uint256,bool)": FunctionFragment;
        "setHubPool(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "chainId" | "deposit" | "depositFor" | "emergencyDeleteRootBundle" | "executeRelayerRefundLeaf" | "pauseDeposits" | "pauseFills" | "relayRootBundle" | "setCrossDomainAdmin" | "setEnableRoute" | "setHubPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "depositFor", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "emergencyDeleteRootBundle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeRelayerRefundLeaf", values: [
        BigNumberish,
        SpokePoolInterface.RelayerRefundLeafStruct,
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "pauseDeposits", values: [boolean]): string;
    encodeFunctionData(functionFragment: "pauseFills", values: [boolean]): string;
    encodeFunctionData(functionFragment: "relayRootBundle", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setCrossDomainAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setEnableRoute", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "setHubPool", values: [string]): string;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyDeleteRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRelayerRefundLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseFills", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCrossDomainAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnableRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHubPool", data: BytesLike): Result;
    events: {};
}
export interface SpokePoolInterface extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SpokePoolInterfaceInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauseDeposits(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauseFills(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setHubPool(newHubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauseDeposits(pause: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauseFills(pause: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setEnableRoute(originToken: string, destinationChainId: BigNumberish, enable: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setHubPool(newHubPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        pauseDeposits(pause: boolean, overrides?: CallOverrides): Promise<void>;
        pauseFills(pause: boolean, overrides?: CallOverrides): Promise<void>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: CallOverrides): Promise<void>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enable: boolean, overrides?: CallOverrides): Promise<void>;
        setHubPool(newHubPool: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauseDeposits(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauseFills(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setHubPool(newHubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauseDeposits(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauseFills(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enable: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setHubPool(newHubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
