import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface SwapAndBridgeBaseInterface extends utils.Interface {
    functions: {
        "EXCHANGE()": FunctionFragment;
        "SPOKE_POOL()": FunctionFragment;
        "allowedSelectors(bytes4)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "EXCHANGE" | "SPOKE_POOL" | "allowedSelectors" | "multicall"): FunctionFragment;
    encodeFunctionData(functionFragment: "EXCHANGE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SPOKE_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowedSelectors", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "EXCHANGE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SPOKE_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
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
export interface SwapAndBridgeBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapAndBridgeBaseInterface;
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
        EXCHANGE(overrides?: CallOverrides): Promise<[string]>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<[string]>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    EXCHANGE(overrides?: CallOverrides): Promise<string>;
    SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
    allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        EXCHANGE(overrides?: CallOverrides): Promise<string>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {
        "SwapBeforeBridge(address,address,address,uint256,uint256,address,uint256)"(exchange?: null, swapToken?: string | null, acrossInputToken?: string | null, swapTokenAmount?: null, acrossInputAmount?: null, acrossOutputToken?: string | null, acrossOutputAmount?: null): SwapBeforeBridgeEventFilter;
        SwapBeforeBridge(exchange?: null, swapToken?: string | null, acrossInputToken?: string | null, swapTokenAmount?: null, acrossInputAmount?: null, acrossOutputToken?: string | null, acrossOutputAmount?: null): SwapBeforeBridgeEventFilter;
    };
    estimateGas: {
        EXCHANGE(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        EXCHANGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedSelectors(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
