import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
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
export interface ISettlementContractInterface extends utils.Interface {
    functions: {
        "initiate((address,address,uint256,uint32,uint32,uint32,bytes),bytes,bytes)": FunctionFragment;
        "resolve((address,address,uint256,uint32,uint32,uint32,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "initiate" | "resolve"): FunctionFragment;
    encodeFunctionData(functionFragment: "initiate", values: [CrossChainOrderStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "resolve", values: [CrossChainOrderStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "initiate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
    events: {};
}
export interface ISettlementContract extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISettlementContractInterface;
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
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<[ResolvedCrossChainOrderStructOutput]>;
    };
    initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    callStatic: {
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: CallOverrides): Promise<void>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<ResolvedCrossChainOrderStructOutput>;
    };
    filters: {};
    estimateGas: {
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        initiate(order: CrossChainOrderStruct, signature: BytesLike, fillerData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resolve(order: CrossChainOrderStruct, fillerData: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
