import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IL1StandardBridgeInterface extends utils.Interface {
    functions: {
        "depositERC20(address,address,uint256,uint32,bytes)": FunctionFragment;
        "depositERC20To(address,address,address,uint256,uint32,bytes)": FunctionFragment;
        "depositETH(uint32,bytes)": FunctionFragment;
        "depositETHTo(address,uint32,bytes)": FunctionFragment;
        "finalizeERC20Withdrawal(address,address,address,address,uint256,bytes)": FunctionFragment;
        "finalizeETHWithdrawal(address,address,uint256,bytes)": FunctionFragment;
        "l2TokenBridge()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "depositERC20" | "depositERC20To" | "depositETH" | "depositETHTo" | "finalizeERC20Withdrawal" | "finalizeETHWithdrawal" | "l2TokenBridge"): FunctionFragment;
    encodeFunctionData(functionFragment: "depositERC20", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "depositERC20To", values: [string, string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "depositETH", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "depositETHTo", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeERC20Withdrawal", values: [string, string, string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeETHWithdrawal", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "l2TokenBridge", values?: undefined): string;
    decodeFunctionResult(functionFragment: "depositERC20", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositERC20To", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositETHTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeERC20Withdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeETHWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2TokenBridge", data: BytesLike): Result;
    events: {
        "ERC20DepositInitiated(address,address,address,address,uint256,bytes)": EventFragment;
        "ERC20WithdrawalFinalized(address,address,address,address,uint256,bytes)": EventFragment;
        "ETHDepositInitiated(address,address,uint256,bytes)": EventFragment;
        "ETHWithdrawalFinalized(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ERC20DepositInitiated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ERC20WithdrawalFinalized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ETHDepositInitiated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ETHWithdrawalFinalized"): EventFragment;
}
export interface ERC20DepositInitiatedEventObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _amount: BigNumber;
    _data: string;
}
export declare type ERC20DepositInitiatedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], ERC20DepositInitiatedEventObject>;
export declare type ERC20DepositInitiatedEventFilter = TypedEventFilter<ERC20DepositInitiatedEvent>;
export interface ERC20WithdrawalFinalizedEventObject {
    _l1Token: string;
    _l2Token: string;
    _from: string;
    _to: string;
    _amount: BigNumber;
    _data: string;
}
export declare type ERC20WithdrawalFinalizedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string
], ERC20WithdrawalFinalizedEventObject>;
export declare type ERC20WithdrawalFinalizedEventFilter = TypedEventFilter<ERC20WithdrawalFinalizedEvent>;
export interface ETHDepositInitiatedEventObject {
    _from: string;
    _to: string;
    _amount: BigNumber;
    _data: string;
}
export declare type ETHDepositInitiatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], ETHDepositInitiatedEventObject>;
export declare type ETHDepositInitiatedEventFilter = TypedEventFilter<ETHDepositInitiatedEvent>;
export interface ETHWithdrawalFinalizedEventObject {
    _from: string;
    _to: string;
    _amount: BigNumber;
    _data: string;
}
export declare type ETHWithdrawalFinalizedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], ETHWithdrawalFinalizedEventObject>;
export declare type ETHWithdrawalFinalizedEventFilter = TypedEventFilter<ETHWithdrawalFinalizedEvent>;
export interface IL1StandardBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IL1StandardBridgeInterface;
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
        depositERC20(_l1Token: string, _l2Token: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositETH(_l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeERC20Withdrawal(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        finalizeETHWithdrawal(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        l2TokenBridge(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    depositERC20(_l1Token: string, _l2Token: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositETH(_l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeERC20Withdrawal(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    finalizeETHWithdrawal(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    l2TokenBridge(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        depositERC20(_l1Token: string, _l2Token: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositETH(_l2Gas: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        finalizeERC20Withdrawal(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        finalizeETHWithdrawal(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        l2TokenBridge(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ERC20DepositInitiated(address,address,address,address,uint256,bytes)"(_l1Token?: string | null, _l2Token?: string | null, _from?: string | null, _to?: null, _amount?: null, _data?: null): ERC20DepositInitiatedEventFilter;
        ERC20DepositInitiated(_l1Token?: string | null, _l2Token?: string | null, _from?: string | null, _to?: null, _amount?: null, _data?: null): ERC20DepositInitiatedEventFilter;
        "ERC20WithdrawalFinalized(address,address,address,address,uint256,bytes)"(_l1Token?: string | null, _l2Token?: string | null, _from?: string | null, _to?: null, _amount?: null, _data?: null): ERC20WithdrawalFinalizedEventFilter;
        ERC20WithdrawalFinalized(_l1Token?: string | null, _l2Token?: string | null, _from?: string | null, _to?: null, _amount?: null, _data?: null): ERC20WithdrawalFinalizedEventFilter;
        "ETHDepositInitiated(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _amount?: null, _data?: null): ETHDepositInitiatedEventFilter;
        ETHDepositInitiated(_from?: string | null, _to?: string | null, _amount?: null, _data?: null): ETHDepositInitiatedEventFilter;
        "ETHWithdrawalFinalized(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _amount?: null, _data?: null): ETHWithdrawalFinalizedEventFilter;
        ETHWithdrawalFinalized(_from?: string | null, _to?: string | null, _amount?: null, _data?: null): ETHWithdrawalFinalizedEventFilter;
    };
    estimateGas: {
        depositERC20(_l1Token: string, _l2Token: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositETH(_l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeERC20Withdrawal(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        finalizeETHWithdrawal(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        l2TokenBridge(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        depositERC20(_l1Token: string, _l2Token: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositERC20To(_l1Token: string, _l2Token: string, _to: string, _amount: BigNumberish, _l2Gas: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositETH(_l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositETHTo(_to: string, _l2Gas: BigNumberish, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeERC20Withdrawal(_l1Token: string, _l2Token: string, _from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        finalizeETHWithdrawal(_from: string, _to: string, _amount: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        l2TokenBridge(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
