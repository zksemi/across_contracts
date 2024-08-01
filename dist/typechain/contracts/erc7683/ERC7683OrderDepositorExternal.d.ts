import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type AcrossOrderDataStruct = {
    inputToken: string;
    inputAmount: BigNumberish;
    outputToken: string;
    outputAmount: BigNumberish;
    destinationChainId: BigNumberish;
    recipient: string;
    exclusivityDeadlineOffset: BigNumberish;
    message: BytesLike;
};
export declare type AcrossOrderDataStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber,
    number,
    string,
    number,
    string
] & {
    inputToken: string;
    inputAmount: BigNumber;
    outputToken: string;
    outputAmount: BigNumber;
    destinationChainId: number;
    recipient: string;
    exclusivityDeadlineOffset: number;
    message: string;
};
export declare type AcrossFillerDataStruct = {
    exclusiveRelayer: string;
};
export declare type AcrossFillerDataStructOutput = [string] & {
    exclusiveRelayer: string;
};
export declare type CrossChainOrderStruct = {
    settlementContract: string;
    swapper: string;
    nonce: BigNumberish;
    originChainId: BigNumberish;
    initiateDeadline: BigNumberish;
    fillDeadline: BigNumberish;
    orderData: BytesLike;
};
export declare type CrossChainOrderStructOutput = [
    string,
    string,
    BigNumber,
    number,
    number,
    number,
    string
] & {
    settlementContract: string;
    swapper: string;
    nonce: BigNumber;
    originChainId: number;
    initiateDeadline: number;
    fillDeadline: number;
    orderData: string;
};
export declare type InputStruct = {
    token: string;
    amount: BigNumberish;
};
export declare type InputStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
};
export declare type OutputStruct = {
    token: string;
    amount: BigNumberish;
    recipient: string;
    chainId: BigNumberish;
};
export declare type OutputStructOutput = [string, BigNumber, string, number] & {
    token: string;
    amount: BigNumber;
    recipient: string;
    chainId: number;
};
export declare type ResolvedCrossChainOrderStruct = {
    settlementContract: string;
    swapper: string;
    nonce: BigNumberish;
    originChainId: BigNumberish;
    initiateDeadline: BigNumberish;
    fillDeadline: BigNumberish;
    swapperInputs: InputStruct[];
    swapperOutputs: OutputStruct[];
    fillerOutputs: OutputStruct[];
};
export declare type ResolvedCrossChainOrderStructOutput = [
    string,
    string,
    BigNumber,
    number,
    number,
    number,
    InputStructOutput[],
    OutputStructOutput[],
    OutputStructOutput[]
] & {
    settlementContract: string;
    swapper: string;
    nonce: BigNumber;
    originChainId: number;
    initiateDeadline: number;
    fillDeadline: number;
    swapperInputs: InputStructOutput[];
    swapperOutputs: OutputStructOutput[];
    fillerOutputs: OutputStructOutput[];
};
export interface ERC7683OrderDepositorExternalInterface extends utils.Interface {
    functions: {
        "PERMIT2()": FunctionFragment;
        "QUOTE_BEFORE_DEADLINE()": FunctionFragment;
        "SPOKE_POOL()": FunctionFragment;
        "decode(bytes,bytes)": FunctionFragment;
        "getCurrentTime()": FunctionFragment;
        "initiate((address,address,uint256,uint32,uint32,uint32,bytes),bytes,bytes)": FunctionFragment;
        "resolve((address,address,uint256,uint32,uint32,uint32,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PERMIT2" | "QUOTE_BEFORE_DEADLINE" | "SPOKE_POOL" | "decode" | "getCurrentTime" | "initiate" | "resolve"): FunctionFragment;
    encodeFunctionData(functionFragment: "PERMIT2", values?: undefined): string;
    encodeFunctionData(functionFragment: "QUOTE_BEFORE_DEADLINE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SPOKE_POOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "decode", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "initiate", values: [CrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "resolve", values: [CrossChainOrderStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "PERMIT2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "QUOTE_BEFORE_DEADLINE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SPOKE_POOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
    events: {};
}
export interface ERC7683OrderDepositorExternal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC7683OrderDepositorExternalInterface;
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
        PERMIT2(overrides?: CallOverrides): Promise<[string]>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<[BigNumber]>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<[string]>;
        decode(orderData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<[AcrossOrderDataStructOutput, AcrossFillerDataStructOutput]>;
        getCurrentTime(overrides?: CallOverrides): Promise<[number]>;
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<[
            ResolvedCrossChainOrderStructOutput
        ] & {
            resolvedOrder: ResolvedCrossChainOrderStructOutput;
        }>;
    };
    PERMIT2(overrides?: CallOverrides): Promise<string>;
    QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
    SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
    decode(orderData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<[AcrossOrderDataStructOutput, AcrossFillerDataStructOutput]>;
    getCurrentTime(overrides?: CallOverrides): Promise<number>;
    initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    callStatic: {
        PERMIT2(overrides?: CallOverrides): Promise<string>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<string>;
        decode(orderData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<[AcrossOrderDataStructOutput, AcrossFillerDataStructOutput]>;
        getCurrentTime(overrides?: CallOverrides): Promise<number>;
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    };
    filters: {};
    estimateGas: {
        PERMIT2(overrides?: CallOverrides): Promise<BigNumber>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<BigNumber>;
        decode(orderData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PERMIT2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        QUOTE_BEFORE_DEADLINE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SPOKE_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decode(orderData: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
