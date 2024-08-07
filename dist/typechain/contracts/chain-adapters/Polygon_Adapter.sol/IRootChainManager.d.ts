import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IRootChainManagerInterface extends utils.Interface {
    functions: {
        "depositEtherFor(address)": FunctionFragment;
        "depositFor(address,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositEtherFor" | "depositFor"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositEtherFor", values: [string]): string;
    encodeFunctionData(functionFragment: "depositFor", values: [string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "depositEtherFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    events: {};
}
export interface IRootChainManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRootChainManagerInterface;
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
        depositEtherFor(user: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositFor(user: string, rootToken: string, depositData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    depositEtherFor(user: string, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositFor(user: string, rootToken: string, depositData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositEtherFor(user: string, overrides?: CallOverrides): Promise<void>;
        depositFor(user: string, rootToken: string, depositData: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        depositEtherFor(user: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositFor(user: string, rootToken: string, depositData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositEtherFor(user: string, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositFor(user: string, rootToken: string, depositData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
