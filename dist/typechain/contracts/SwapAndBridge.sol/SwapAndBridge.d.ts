import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace SwapAndBridgeBase {
    type DepositDataStruct = {
        outputToken: string;
        outputAmount: BigNumberish;
        depositor: string;
        recipient: string;
        destinationChainid: BigNumberish;
        exclusiveRelayer: string;
        quoteTimestamp: BigNumberish;
        fillDeadline: BigNumberish;
        exclusivityDeadline: BigNumberish;
        message: BytesLike;
    };
    type DepositDataStructOutput = [
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        string,
        number,
        number,
        number,
        string
    ] & {
        outputToken: string;
        outputAmount: BigNumber;
        depositor: string;
        recipient: string;
        destinationChainid: BigNumber;
        exclusiveRelayer: string;
        quoteTimestamp: number;
        fillDeadline: number;
        exclusivityDeadline: number;
        message: string;
    };
}
export interface SwapAndBridgeInterface extends utils.Interface {
    functions: {
        "ACROSS_INPUT_TOKEN()": FunctionFragment;
        "EXCHANGE()": FunctionFragment;
        "SPOKE_POOL()": FunctionFragment;
        "SWAP_TOKEN()": FunctionFragment;
        "allowedSelectors(bytes4)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "swapAndBridge(bytes,uint256,uint256,(address,uint256,address,address,uint256,address,uint32,uint32,uint32,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ACROSS_INPUT_TOKEN" | "EXCHANGE" | "SPOKE_POOL" | "SWAP_TOKEN" | "allowedSelectors" | "multicall" | "swapAndBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "ACROSS_INPUT_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXCHANGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SPOKE_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "SWAP_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowedSelectors", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "swapAndBridge", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        SwapAndBridgeBase.DepositDataStruct
    ]): string;
    decodeFunctionResult(functionFragment: "ACROSS_INPUT_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXCHANGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SPOKE_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SWAP_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndBridge", data: BytesLike): Result;
    events: {
        "SwapBeforeBridge(address,address,address,uint256,uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SwapBeforeBridge"): EventFragment;
}
export interface SwapBeforeBridgeEventObject {
    exchange: string;
    swapToken: string;
    acrossInputToken: string;
    swapTokenAmount: BigNumber;
    acrossInputAmount: BigNumber;
    acrossOutputToken: string;
    acrossOutputAmount: BigNumber;
}
export declare type SwapBeforeBridgeEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber
], SwapBeforeBridgeEventObject>;
export declare type SwapBeforeBridgeEventFilter = TypedEventFilter<SwapBeforeBridgeEvent>;
export interface SwapAndBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapAndBridgeInterface;
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
        ACROSS_INPUT_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        EXCHANGE(overrides?: CallOverrides): Promise<[string]>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<[string]>;
        SWAP_TOKEN(overrides?: CallOverrides): Promise<[string]>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        swapAndBridge(routerCalldata: BytesLike, swapTokenAmount: BigNumberish, minExpectedInputTokenAmount: BigNumberish, depositData: SwapAndBridgeBase.DepositDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    ACROSS_INPUT_TOKEN(overrides?: CallOverrides): Promise<string>;
    EXCHANGE(overrides?: CallOverrides): Promise<string>;
    SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
    SWAP_TOKEN(overrides?: CallOverrides): Promise<string>;
    allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    swapAndBridge(routerCalldata: BytesLike, swapTokenAmount: BigNumberish, minExpectedInputTokenAmount: BigNumberish, depositData: SwapAndBridgeBase.DepositDataStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        ACROSS_INPUT_TOKEN(overrides?: CallOverrides): Promise<string>;
        EXCHANGE(overrides?: CallOverrides): Promise<string>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
        SWAP_TOKEN(overrides?: CallOverrides): Promise<string>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        swapAndBridge(routerCalldata: BytesLike, swapTokenAmount: BigNumberish, minExpectedInputTokenAmount: BigNumberish, depositData: SwapAndBridgeBase.DepositDataStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SwapBeforeBridge(address,address,address,uint256,uint256,address,uint256)"(exchange?: null, swapToken?: string | null, acrossInputToken?: string | null, swapTokenAmount?: null, acrossInputAmount?: null, acrossOutputToken?: string | null, acrossOutputAmount?: null): SwapBeforeBridgeEventFilter;
        SwapBeforeBridge(exchange?: null, swapToken?: string | null, acrossInputToken?: string | null, swapTokenAmount?: null, acrossInputAmount?: null, acrossOutputToken?: string | null, acrossOutputAmount?: null): SwapBeforeBridgeEventFilter;
    };
    estimateGas: {
        ACROSS_INPUT_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        EXCHANGE(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        SWAP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        swapAndBridge(routerCalldata: BytesLike, swapTokenAmount: BigNumberish, minExpectedInputTokenAmount: BigNumberish, depositData: SwapAndBridgeBase.DepositDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ACROSS_INPUT_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXCHANGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SWAP_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        swapAndBridge(routerCalldata: BytesLike, swapTokenAmount: BigNumberish, minExpectedInputTokenAmount: BigNumberish, depositData: SwapAndBridgeBase.DepositDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
