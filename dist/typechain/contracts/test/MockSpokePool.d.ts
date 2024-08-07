import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace SpokePool {
    type RelayExecutionInfoStruct = {
        recipient: string;
        message: BytesLike;
        relayerFeePct: BigNumberish;
        isSlowRelay: boolean;
        payoutAdjustmentPct: BigNumberish;
    };
    type RelayExecutionInfoStructOutput = [
        string,
        string,
        BigNumber,
        boolean,
        BigNumber
    ] & {
        recipient: string;
        message: string;
        relayerFeePct: BigNumber;
        isSlowRelay: boolean;
        payoutAdjustmentPct: BigNumber;
    };
}
export declare namespace V3SpokePoolInterface {
    type V3RelayExecutionEventInfoStruct = {
        updatedRecipient: string;
        updatedMessage: BytesLike;
        updatedOutputAmount: BigNumberish;
        fillType: BigNumberish;
    };
    type V3RelayExecutionEventInfoStructOutput = [
        string,
        string,
        BigNumber,
        number
    ] & {
        updatedRecipient: string;
        updatedMessage: string;
        updatedOutputAmount: BigNumber;
        fillType: number;
    };
    type V3RelayDataStruct = {
        depositor: string;
        recipient: string;
        exclusiveRelayer: string;
        inputToken: string;
        outputToken: string;
        inputAmount: BigNumberish;
        outputAmount: BigNumberish;
        originChainId: BigNumberish;
        depositId: BigNumberish;
        fillDeadline: BigNumberish;
        exclusivityDeadline: BigNumberish;
        message: BytesLike;
    };
    type V3RelayDataStructOutput = [
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        string
    ] & {
        depositor: string;
        recipient: string;
        exclusiveRelayer: string;
        inputToken: string;
        outputToken: string;
        inputAmount: BigNumber;
        outputAmount: BigNumber;
        originChainId: BigNumber;
        depositId: number;
        fillDeadline: number;
        exclusivityDeadline: number;
        message: string;
    };
    type V3SlowFillStruct = {
        relayData: V3SpokePoolInterface.V3RelayDataStruct;
        chainId: BigNumberish;
        updatedOutputAmount: BigNumberish;
    };
    type V3SlowFillStructOutput = [
        V3SpokePoolInterface.V3RelayDataStructOutput,
        BigNumber,
        BigNumber
    ] & {
        relayData: V3SpokePoolInterface.V3RelayDataStructOutput;
        chainId: BigNumber;
        updatedOutputAmount: BigNumber;
    };
    type V3RelayExecutionParamsStruct = {
        relay: V3SpokePoolInterface.V3RelayDataStruct;
        relayHash: BytesLike;
        updatedOutputAmount: BigNumberish;
        updatedRecipient: string;
        updatedMessage: BytesLike;
        repaymentChainId: BigNumberish;
    };
    type V3RelayExecutionParamsStructOutput = [
        V3SpokePoolInterface.V3RelayDataStructOutput,
        string,
        BigNumber,
        string,
        string,
        BigNumber
    ] & {
        relay: V3SpokePoolInterface.V3RelayDataStructOutput;
        relayHash: string;
        updatedOutputAmount: BigNumber;
        updatedRecipient: string;
        updatedMessage: string;
        repaymentChainId: BigNumber;
    };
}
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
export declare namespace MultiCallerUpgradeable {
    type ResultStruct = {
        success: boolean;
        returnData: BytesLike;
    };
    type ResultStructOutput = [boolean, string] & {
        success: boolean;
        returnData: string;
    };
}
export interface MockSpokePoolInterface extends utils.Interface {
    functions: {
        "EMPTY_RELAYER()": FunctionFragment;
        "EMPTY_REPAYMENT_CHAIN_ID()": FunctionFragment;
        "INFINITE_FILL_DEADLINE()": FunctionFragment;
        "MAX_TRANSFER_SIZE()": FunctionFragment;
        "SLOW_FILL_MAX_TOKENS_TO_SEND()": FunctionFragment;
        "UPDATE_DEPOSIT_DETAILS_HASH()": FunctionFragment;
        "UPDATE_V3_DEPOSIT_DETAILS_HASH()": FunctionFragment;
        "__SpokePool_init(uint32,address,address)": FunctionFragment;
        "callback(bytes)": FunctionFragment;
        "chainId()": FunctionFragment;
        "crossDomainAdmin()": FunctionFragment;
        "deposit(address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "depositExclusive(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,uint32,bytes)": FunctionFragment;
        "depositFor(address,address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "depositQuoteTimeBuffer()": FunctionFragment;
        "depositV2(address,address,uint256,uint256,int64,uint32,bytes,uint256)": FunctionFragment;
        "depositV3(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,uint32,bytes)": FunctionFragment;
        "depositV3Now(address,address,address,address,uint256,uint256,uint256,address,uint32,uint32,bytes)": FunctionFragment;
        "distributeRelayerRefunds(uint256,uint256,uint256[],uint32,address,address[])": FunctionFragment;
        "emergencyDeleteRootBundle(uint256)": FunctionFragment;
        "enabledDepositRoutes(address,uint256)": FunctionFragment;
        "executeRelayerRefundLeaf(uint32,(uint256,uint256,uint256[],uint32,address,address[]),bytes32[])": FunctionFragment;
        "executeSlowRelayLeaf(address,address,address,uint256,uint256,int64,int64,uint32,uint32,bytes,int256,bytes32[])": FunctionFragment;
        "executeV3SlowRelayLeaf(((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256,uint256),uint32,bytes32[])": FunctionFragment;
        "fillDeadlineBuffer()": FunctionFragment;
        "fillRelay(address,address,address,uint256,uint256,uint256,uint256,int64,int64,uint32,bytes,uint256)": FunctionFragment;
        "fillRelayV3Internal(((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),bytes32,uint256,address,bytes,uint256),address,bool)": FunctionFragment;
        "fillRelayWithUpdatedDeposit(address,address,address,address,uint256,uint256,uint256,uint256,int64,int64,int64,uint32,bytes,bytes,bytes,uint256)": FunctionFragment;
        "fillStatuses(bytes32)": FunctionFragment;
        "fillV3Relay((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256)": FunctionFragment;
        "fillV3RelayWithUpdatedDeposit((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes),uint256,uint256,address,bytes,bytes)": FunctionFragment;
        "getCurrentTime()": FunctionFragment;
        "hubPool()": FunctionFragment;
        "initialize(uint32,address,address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "numberOfDeposits()": FunctionFragment;
        "owner()": FunctionFragment;
        "pauseDeposits(bool)": FunctionFragment;
        "pauseFills(bool)": FunctionFragment;
        "pausedDeposits()": FunctionFragment;
        "pausedFills()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "relayRootBundle(bytes32,bytes32)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "requestV3SlowFill((address,address,address,address,address,uint256,uint256,uint256,uint32,uint32,uint32,bytes))": FunctionFragment;
        "rootBundles(uint256)": FunctionFragment;
        "setChainId(uint256)": FunctionFragment;
        "setCrossDomainAdmin(address)": FunctionFragment;
        "setCurrentTime(uint256)": FunctionFragment;
        "setEnableRoute(address,uint256,bool)": FunctionFragment;
        "setFillStatus(bytes32,uint8)": FunctionFragment;
        "setHubPool(address)": FunctionFragment;
        "speedUpDeposit(address,int64,uint32,address,bytes,bytes)": FunctionFragment;
        "speedUpV3Deposit(address,uint32,uint256,address,bytes,bytes)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "tryMulticall(bytes[])": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "verifyUpdateV3DepositMessage(address,uint32,uint256,uint256,address,bytes,bytes)": FunctionFragment;
        "wrappedNativeToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "EMPTY_RELAYER" | "EMPTY_REPAYMENT_CHAIN_ID" | "INFINITE_FILL_DEADLINE" | "MAX_TRANSFER_SIZE" | "SLOW_FILL_MAX_TOKENS_TO_SEND" | "UPDATE_DEPOSIT_DETAILS_HASH" | "UPDATE_V3_DEPOSIT_DETAILS_HASH" | "__SpokePool_init" | "callback" | "chainId" | "crossDomainAdmin" | "deposit" | "depositExclusive" | "depositFor" | "depositQuoteTimeBuffer" | "depositV2" | "depositV3" | "depositV3Now" | "distributeRelayerRefunds" | "emergencyDeleteRootBundle" | "enabledDepositRoutes" | "executeRelayerRefundLeaf" | "executeSlowRelayLeaf" | "executeV3SlowRelayLeaf" | "fillDeadlineBuffer" | "fillRelay" | "fillRelayV3Internal" | "fillRelayWithUpdatedDeposit" | "fillStatuses" | "fillV3Relay" | "fillV3RelayWithUpdatedDeposit" | "getCurrentTime" | "hubPool" | "initialize" | "multicall" | "numberOfDeposits" | "owner" | "pauseDeposits" | "pauseFills" | "pausedDeposits" | "pausedFills" | "proxiableUUID" | "relayRootBundle" | "renounceOwnership" | "requestV3SlowFill" | "rootBundles" | "setChainId" | "setCrossDomainAdmin" | "setCurrentTime" | "setEnableRoute" | "setFillStatus" | "setHubPool" | "speedUpDeposit" | "speedUpV3Deposit" | "transferOwnership" | "tryMulticall" | "upgradeTo" | "upgradeToAndCall" | "verifyUpdateV3DepositMessage" | "wrappedNativeToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "EMPTY_RELAYER", values?: undefined): string;
    encodeFunctionData(functionFragment: "EMPTY_REPAYMENT_CHAIN_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "INFINITE_FILL_DEADLINE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_TRANSFER_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "SLOW_FILL_MAX_TOKENS_TO_SEND", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPDATE_DEPOSIT_DETAILS_HASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "UPDATE_V3_DEPOSIT_DETAILS_HASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "__SpokePool_init", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "callback", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "crossDomainAdmin", values?: undefined): string;
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
    encodeFunctionData(functionFragment: "depositExclusive", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
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
    encodeFunctionData(functionFragment: "depositQuoteTimeBuffer", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositV2", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "depositV3", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "depositV3Now", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "distributeRelayerRefunds", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish,
        string,
        string[]
    ]): string;
    encodeFunctionData(functionFragment: "emergencyDeleteRootBundle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "enabledDepositRoutes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeRelayerRefundLeaf", values: [
        BigNumberish,
        SpokePoolInterface.RelayerRefundLeafStruct,
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "executeSlowRelayLeaf", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "executeV3SlowRelayLeaf", values: [V3SpokePoolInterface.V3SlowFillStruct, BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "fillDeadlineBuffer", values?: undefined): string;
    encodeFunctionData(functionFragment: "fillRelay", values: [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "fillRelayV3Internal", values: [V3SpokePoolInterface.V3RelayExecutionParamsStruct, string, boolean]): string;
    encodeFunctionData(functionFragment: "fillRelayWithUpdatedDeposit", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "fillStatuses", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "fillV3Relay", values: [V3SpokePoolInterface.V3RelayDataStruct, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fillV3RelayWithUpdatedDeposit", values: [
        V3SpokePoolInterface.V3RelayDataStruct,
        BigNumberish,
        BigNumberish,
        string,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "hubPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "numberOfDeposits", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseDeposits", values: [boolean]): string;
    encodeFunctionData(functionFragment: "pauseFills", values: [boolean]): string;
    encodeFunctionData(functionFragment: "pausedDeposits", values?: undefined): string;
    encodeFunctionData(functionFragment: "pausedFills", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayRootBundle", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "requestV3SlowFill", values: [V3SpokePoolInterface.V3RelayDataStruct]): string;
    encodeFunctionData(functionFragment: "rootBundles", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setChainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setCrossDomainAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setEnableRoute", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "setFillStatus", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setHubPool", values: [string]): string;
    encodeFunctionData(functionFragment: "speedUpDeposit", values: [string, BigNumberish, BigNumberish, string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "speedUpV3Deposit", values: [string, BigNumberish, BigNumberish, string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "tryMulticall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "verifyUpdateV3DepositMessage", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "wrappedNativeToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "EMPTY_RELAYER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EMPTY_REPAYMENT_CHAIN_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INFINITE_FILL_DEADLINE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_TRANSFER_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "SLOW_FILL_MAX_TOKENS_TO_SEND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPDATE_DEPOSIT_DETAILS_HASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "UPDATE_V3_DEPOSIT_DETAILS_HASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "__SpokePool_init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crossDomainAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositExclusive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositQuoteTimeBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositV3Now", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributeRelayerRefunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyDeleteRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enabledDepositRoutes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeRelayerRefundLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeSlowRelayLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeV3SlowRelayLeaf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillDeadlineBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillRelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillRelayV3Internal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillRelayWithUpdatedDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillStatuses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillV3Relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fillV3RelayWithUpdatedDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hubPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numberOfDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseFills", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pausedDeposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pausedFills", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayRootBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requestV3SlowFill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootBundles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCrossDomainAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnableRoute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFillStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHubPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "speedUpDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "speedUpV3Deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryMulticall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyUpdateV3DepositMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrappedNativeToken", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "BridgedToHubPool(uint256,address)": EventFragment;
        "EmergencyDeleteRootBundle(uint256)": EventFragment;
        "EnabledDepositRoute(address,uint256,bool)": EventFragment;
        "ExecutedRelayerRefundRoot(uint256,uint256,uint256[],uint32,uint32,address,address[],address)": EventFragment;
        "FilledRelay(uint256,uint256,uint256,uint256,uint256,uint256,int64,int64,uint32,address,address,address,address,bytes,tuple)": EventFragment;
        "FilledV3Relay(address,address,uint256,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,address,bytes,tuple)": EventFragment;
        "FundsDeposited(uint256,uint256,uint256,int64,uint32,uint32,address,address,address,bytes)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PausedDeposits(bool)": EventFragment;
        "PausedFills(bool)": EventFragment;
        "PreLeafExecuteHook(address)": EventFragment;
        "RelayedRootBundle(uint32,bytes32,bytes32)": EventFragment;
        "RequestedSpeedUpDeposit(int64,uint32,address,address,bytes,bytes)": EventFragment;
        "RequestedSpeedUpV3Deposit(uint256,uint32,address,address,bytes,bytes)": EventFragment;
        "RequestedV3SlowFill(address,address,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,bytes)": EventFragment;
        "SetHubPool(address)": EventFragment;
        "SetXDomainAdmin(address)": EventFragment;
        "TokensBridged(uint256,uint256,uint32,address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "V3FundsDeposited(address,address,uint256,uint256,uint256,uint32,uint32,uint32,uint32,address,address,address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BridgedToHubPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EmergencyDeleteRootBundle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnabledDepositRoute"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutedRelayerRefundRoot"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FilledRelay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FilledV3Relay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundsDeposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PausedDeposits"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PausedFills"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PreLeafExecuteHook"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RelayedRootBundle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestedSpeedUpDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestedSpeedUpV3Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestedV3SlowFill"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetHubPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetXDomainAdmin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensBridged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "V3FundsDeposited"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export declare type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export declare type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export declare type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export declare type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface BridgedToHubPoolEventObject {
    amount: BigNumber;
    token: string;
}
export declare type BridgedToHubPoolEvent = TypedEvent<[
    BigNumber,
    string
], BridgedToHubPoolEventObject>;
export declare type BridgedToHubPoolEventFilter = TypedEventFilter<BridgedToHubPoolEvent>;
export interface EmergencyDeleteRootBundleEventObject {
    rootBundleId: BigNumber;
}
export declare type EmergencyDeleteRootBundleEvent = TypedEvent<[
    BigNumber
], EmergencyDeleteRootBundleEventObject>;
export declare type EmergencyDeleteRootBundleEventFilter = TypedEventFilter<EmergencyDeleteRootBundleEvent>;
export interface EnabledDepositRouteEventObject {
    originToken: string;
    destinationChainId: BigNumber;
    enabled: boolean;
}
export declare type EnabledDepositRouteEvent = TypedEvent<[
    string,
    BigNumber,
    boolean
], EnabledDepositRouteEventObject>;
export declare type EnabledDepositRouteEventFilter = TypedEventFilter<EnabledDepositRouteEvent>;
export interface ExecutedRelayerRefundRootEventObject {
    amountToReturn: BigNumber;
    chainId: BigNumber;
    refundAmounts: BigNumber[];
    rootBundleId: number;
    leafId: number;
    l2TokenAddress: string;
    refundAddresses: string[];
    caller: string;
}
export declare type ExecutedRelayerRefundRootEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber[],
    number,
    number,
    string,
    string[],
    string
], ExecutedRelayerRefundRootEventObject>;
export declare type ExecutedRelayerRefundRootEventFilter = TypedEventFilter<ExecutedRelayerRefundRootEvent>;
export interface FilledRelayEventObject {
    amount: BigNumber;
    totalFilledAmount: BigNumber;
    fillAmount: BigNumber;
    repaymentChainId: BigNumber;
    originChainId: BigNumber;
    destinationChainId: BigNumber;
    relayerFeePct: BigNumber;
    realizedLpFeePct: BigNumber;
    depositId: number;
    destinationToken: string;
    relayer: string;
    depositor: string;
    recipient: string;
    message: string;
    updatableRelayData: SpokePool.RelayExecutionInfoStructOutput;
}
export declare type FilledRelayEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    string,
    string,
    SpokePool.RelayExecutionInfoStructOutput
], FilledRelayEventObject>;
export declare type FilledRelayEventFilter = TypedEventFilter<FilledRelayEvent>;
export interface FilledV3RelayEventObject {
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    repaymentChainId: BigNumber;
    originChainId: BigNumber;
    depositId: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    exclusiveRelayer: string;
    relayer: string;
    depositor: string;
    recipient: string;
    message: string;
    relayExecutionInfo: V3SpokePoolInterface.V3RelayExecutionEventInfoStructOutput;
}
export declare type FilledV3RelayEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    string,
    string,
    string,
    string,
    string,
    V3SpokePoolInterface.V3RelayExecutionEventInfoStructOutput
], FilledV3RelayEventObject>;
export declare type FilledV3RelayEventFilter = TypedEventFilter<FilledV3RelayEvent>;
export interface FundsDepositedEventObject {
    amount: BigNumber;
    originChainId: BigNumber;
    destinationChainId: BigNumber;
    relayerFeePct: BigNumber;
    depositId: number;
    quoteTimestamp: number;
    originToken: string;
    recipient: string;
    depositor: string;
    message: string;
}
export declare type FundsDepositedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    string,
    string,
    string,
    string
], FundsDepositedEventObject>;
export declare type FundsDepositedEventFilter = TypedEventFilter<FundsDepositedEvent>;
export interface InitializedEventObject {
    version: number;
}
export declare type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export declare type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedDepositsEventObject {
    isPaused: boolean;
}
export declare type PausedDepositsEvent = TypedEvent<[
    boolean
], PausedDepositsEventObject>;
export declare type PausedDepositsEventFilter = TypedEventFilter<PausedDepositsEvent>;
export interface PausedFillsEventObject {
    isPaused: boolean;
}
export declare type PausedFillsEvent = TypedEvent<[boolean], PausedFillsEventObject>;
export declare type PausedFillsEventFilter = TypedEventFilter<PausedFillsEvent>;
export interface PreLeafExecuteHookEventObject {
    token: string;
}
export declare type PreLeafExecuteHookEvent = TypedEvent<[
    string
], PreLeafExecuteHookEventObject>;
export declare type PreLeafExecuteHookEventFilter = TypedEventFilter<PreLeafExecuteHookEvent>;
export interface RelayedRootBundleEventObject {
    rootBundleId: number;
    relayerRefundRoot: string;
    slowRelayRoot: string;
}
export declare type RelayedRootBundleEvent = TypedEvent<[
    number,
    string,
    string
], RelayedRootBundleEventObject>;
export declare type RelayedRootBundleEventFilter = TypedEventFilter<RelayedRootBundleEvent>;
export interface RequestedSpeedUpDepositEventObject {
    newRelayerFeePct: BigNumber;
    depositId: number;
    depositor: string;
    updatedRecipient: string;
    updatedMessage: string;
    depositorSignature: string;
}
export declare type RequestedSpeedUpDepositEvent = TypedEvent<[
    BigNumber,
    number,
    string,
    string,
    string,
    string
], RequestedSpeedUpDepositEventObject>;
export declare type RequestedSpeedUpDepositEventFilter = TypedEventFilter<RequestedSpeedUpDepositEvent>;
export interface RequestedSpeedUpV3DepositEventObject {
    updatedOutputAmount: BigNumber;
    depositId: number;
    depositor: string;
    updatedRecipient: string;
    updatedMessage: string;
    depositorSignature: string;
}
export declare type RequestedSpeedUpV3DepositEvent = TypedEvent<[
    BigNumber,
    number,
    string,
    string,
    string,
    string
], RequestedSpeedUpV3DepositEventObject>;
export declare type RequestedSpeedUpV3DepositEventFilter = TypedEventFilter<RequestedSpeedUpV3DepositEvent>;
export interface RequestedV3SlowFillEventObject {
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    originChainId: BigNumber;
    depositId: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    exclusiveRelayer: string;
    depositor: string;
    recipient: string;
    message: string;
}
export declare type RequestedV3SlowFillEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    string,
    string,
    string,
    string
], RequestedV3SlowFillEventObject>;
export declare type RequestedV3SlowFillEventFilter = TypedEventFilter<RequestedV3SlowFillEvent>;
export interface SetHubPoolEventObject {
    newHubPool: string;
}
export declare type SetHubPoolEvent = TypedEvent<[string], SetHubPoolEventObject>;
export declare type SetHubPoolEventFilter = TypedEventFilter<SetHubPoolEvent>;
export interface SetXDomainAdminEventObject {
    newAdmin: string;
}
export declare type SetXDomainAdminEvent = TypedEvent<[
    string
], SetXDomainAdminEventObject>;
export declare type SetXDomainAdminEventFilter = TypedEventFilter<SetXDomainAdminEvent>;
export interface TokensBridgedEventObject {
    amountToReturn: BigNumber;
    chainId: BigNumber;
    leafId: number;
    l2TokenAddress: string;
    caller: string;
}
export declare type TokensBridgedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    number,
    string,
    string
], TokensBridgedEventObject>;
export declare type TokensBridgedEventFilter = TypedEventFilter<TokensBridgedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export declare type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export declare type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface V3FundsDepositedEventObject {
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    destinationChainId: BigNumber;
    depositId: number;
    quoteTimestamp: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    depositor: string;
    recipient: string;
    exclusiveRelayer: string;
    message: string;
}
export declare type V3FundsDepositedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    string,
    string,
    string,
    string
], V3FundsDepositedEventObject>;
export declare type V3FundsDepositedEventFilter = TypedEventFilter<V3FundsDepositedEvent>;
export interface MockSpokePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockSpokePoolInterface;
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
        EMPTY_RELAYER(overrides?: CallOverrides): Promise<[string]>;
        EMPTY_REPAYMENT_CHAIN_ID(overrides?: CallOverrides): Promise<[BigNumber]>;
        INFINITE_FILL_DEADLINE(overrides?: CallOverrides): Promise<[number]>;
        MAX_TRANSFER_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;
        SLOW_FILL_MAX_TOKENS_TO_SEND(overrides?: CallOverrides): Promise<[BigNumber]>;
        UPDATE_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<[string]>;
        UPDATE_V3_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<[string]>;
        __SpokePool_init(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        callback(data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        crossDomainAdmin(overrides?: CallOverrides): Promise<[string]>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositExclusive(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadlineOffset: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg8: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositQuoteTimeBuffer(overrides?: CallOverrides): Promise<[number]>;
        depositV2(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        distributeRelayerRefunds(_chainId: BigNumberish, amountToReturn: BigNumberish, refundAmounts: BigNumberish[], leafId: BigNumberish, l2TokenAddress: string, refundAddresses: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enabledDepositRoutes(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeSlowRelayLeaf(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, rootBundleId: BigNumberish, message: BytesLike, payoutAdjustment: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillDeadlineBuffer(overrides?: CallOverrides): Promise<[number]>;
        fillRelay(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillRelayV3Internal(relayExecution: V3SpokePoolInterface.V3RelayExecutionParamsStruct, relayer: string, isSlowFill: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillRelayWithUpdatedDeposit(depositor: string, recipient: string, updatedRecipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, updatedMessage: BytesLike, depositorSignature: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        hubPool(overrides?: CallOverrides): Promise<[string]>;
        initialize(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        numberOfDeposits(overrides?: CallOverrides): Promise<[number]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pauseDeposits(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauseFills(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pausedDeposits(overrides?: CallOverrides): Promise<[boolean]>;
        pausedFills(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rootBundles(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            slowRelayRoot: string;
            relayerRefundRoot: string;
        }>;
        setChainId(_chainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCurrentTime(time: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFillStatus(relayHash: BytesLike, fillType: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setHubPool(newHubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        speedUpDeposit(depositor: string, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        tryMulticall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        verifyUpdateV3DepositMessage(depositor: string, depositId: BigNumberish, originChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        wrappedNativeToken(overrides?: CallOverrides): Promise<[string]>;
    };
    EMPTY_RELAYER(overrides?: CallOverrides): Promise<string>;
    EMPTY_REPAYMENT_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
    INFINITE_FILL_DEADLINE(overrides?: CallOverrides): Promise<number>;
    MAX_TRANSFER_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
    SLOW_FILL_MAX_TOKENS_TO_SEND(overrides?: CallOverrides): Promise<BigNumber>;
    UPDATE_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<string>;
    UPDATE_V3_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<string>;
    __SpokePool_init(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callback(data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    crossDomainAdmin(overrides?: CallOverrides): Promise<string>;
    deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositExclusive(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadlineOffset: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg8: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositQuoteTimeBuffer(overrides?: CallOverrides): Promise<number>;
    depositV2(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    distributeRelayerRefunds(_chainId: BigNumberish, amountToReturn: BigNumberish, refundAmounts: BigNumberish[], leafId: BigNumberish, l2TokenAddress: string, refundAddresses: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enabledDepositRoutes(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeSlowRelayLeaf(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, rootBundleId: BigNumberish, message: BytesLike, payoutAdjustment: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillDeadlineBuffer(overrides?: CallOverrides): Promise<number>;
    fillRelay(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillRelayV3Internal(relayExecution: V3SpokePoolInterface.V3RelayExecutionParamsStruct, relayer: string, isSlowFill: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillRelayWithUpdatedDeposit(depositor: string, recipient: string, updatedRecipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, updatedMessage: BytesLike, depositorSignature: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
    hubPool(overrides?: CallOverrides): Promise<string>;
    initialize(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    numberOfDeposits(overrides?: CallOverrides): Promise<number>;
    owner(overrides?: CallOverrides): Promise<string>;
    pauseDeposits(pause: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauseFills(pause: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pausedDeposits(overrides?: CallOverrides): Promise<boolean>;
    pausedFills(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rootBundles(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        string
    ] & {
        slowRelayRoot: string;
        relayerRefundRoot: string;
    }>;
    setChainId(_chainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCurrentTime(time: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setEnableRoute(originToken: string, destinationChainId: BigNumberish, enabled: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFillStatus(relayHash: BytesLike, fillType: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setHubPool(newHubPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    speedUpDeposit(depositor: string, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    tryMulticall(data: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    verifyUpdateV3DepositMessage(depositor: string, depositId: BigNumberish, originChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
    wrappedNativeToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        EMPTY_RELAYER(overrides?: CallOverrides): Promise<string>;
        EMPTY_REPAYMENT_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
        INFINITE_FILL_DEADLINE(overrides?: CallOverrides): Promise<number>;
        MAX_TRANSFER_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        SLOW_FILL_MAX_TOKENS_TO_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        UPDATE_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<string>;
        UPDATE_V3_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<string>;
        __SpokePool_init(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: CallOverrides): Promise<void>;
        callback(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        crossDomainAdmin(overrides?: CallOverrides): Promise<string>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositExclusive(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadlineOffset: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg8: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositQuoteTimeBuffer(overrides?: CallOverrides): Promise<number>;
        depositV2(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: CallOverrides): Promise<void>;
        distributeRelayerRefunds(_chainId: BigNumberish, amountToReturn: BigNumberish, refundAmounts: BigNumberish[], leafId: BigNumberish, l2TokenAddress: string, refundAddresses: string[], overrides?: CallOverrides): Promise<void>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        enabledDepositRoutes(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        executeSlowRelayLeaf(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, rootBundleId: BigNumberish, message: BytesLike, payoutAdjustment: BigNumberish, proof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        fillDeadlineBuffer(overrides?: CallOverrides): Promise<number>;
        fillRelay(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillRelayV3Internal(relayExecution: V3SpokePoolInterface.V3RelayExecutionParamsStruct, relayer: string, isSlowFill: boolean, overrides?: CallOverrides): Promise<void>;
        fillRelayWithUpdatedDeposit(depositor: string, recipient: string, updatedRecipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, updatedMessage: BytesLike, depositorSignature: BytesLike, maxCount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        hubPool(overrides?: CallOverrides): Promise<string>;
        initialize(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: CallOverrides): Promise<void>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        numberOfDeposits(overrides?: CallOverrides): Promise<number>;
        owner(overrides?: CallOverrides): Promise<string>;
        pauseDeposits(pause: boolean, overrides?: CallOverrides): Promise<void>;
        pauseFills(pause: boolean, overrides?: CallOverrides): Promise<void>;
        pausedDeposits(overrides?: CallOverrides): Promise<boolean>;
        pausedFills(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: CallOverrides): Promise<void>;
        rootBundles(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string
        ] & {
            slowRelayRoot: string;
            relayerRefundRoot: string;
        }>;
        setChainId(_chainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: CallOverrides): Promise<void>;
        setCurrentTime(time: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enabled: boolean, overrides?: CallOverrides): Promise<void>;
        setFillStatus(relayHash: BytesLike, fillType: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setHubPool(newHubPool: string, overrides?: CallOverrides): Promise<void>;
        speedUpDeposit(depositor: string, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        tryMulticall(data: BytesLike[], overrides?: CallOverrides): Promise<MultiCallerUpgradeable.ResultStructOutput[]>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        verifyUpdateV3DepositMessage(depositor: string, depositId: BigNumberish, originChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<void>;
        wrappedNativeToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "BridgedToHubPool(uint256,address)"(amount?: null, token?: null): BridgedToHubPoolEventFilter;
        BridgedToHubPool(amount?: null, token?: null): BridgedToHubPoolEventFilter;
        "EmergencyDeleteRootBundle(uint256)"(rootBundleId?: BigNumberish | null): EmergencyDeleteRootBundleEventFilter;
        EmergencyDeleteRootBundle(rootBundleId?: BigNumberish | null): EmergencyDeleteRootBundleEventFilter;
        "EnabledDepositRoute(address,uint256,bool)"(originToken?: string | null, destinationChainId?: BigNumberish | null, enabled?: null): EnabledDepositRouteEventFilter;
        EnabledDepositRoute(originToken?: string | null, destinationChainId?: BigNumberish | null, enabled?: null): EnabledDepositRouteEventFilter;
        "ExecutedRelayerRefundRoot(uint256,uint256,uint256[],uint32,uint32,address,address[],address)"(amountToReturn?: null, chainId?: BigNumberish | null, refundAmounts?: null, rootBundleId?: BigNumberish | null, leafId?: BigNumberish | null, l2TokenAddress?: null, refundAddresses?: null, caller?: null): ExecutedRelayerRefundRootEventFilter;
        ExecutedRelayerRefundRoot(amountToReturn?: null, chainId?: BigNumberish | null, refundAmounts?: null, rootBundleId?: BigNumberish | null, leafId?: BigNumberish | null, l2TokenAddress?: null, refundAddresses?: null, caller?: null): ExecutedRelayerRefundRootEventFilter;
        "FilledRelay(uint256,uint256,uint256,uint256,uint256,uint256,int64,int64,uint32,address,address,address,address,bytes,tuple)"(amount?: null, totalFilledAmount?: null, fillAmount?: null, repaymentChainId?: null, originChainId?: BigNumberish | null, destinationChainId?: null, relayerFeePct?: null, realizedLpFeePct?: null, depositId?: BigNumberish | null, destinationToken?: null, relayer?: null, depositor?: string | null, recipient?: null, message?: null, updatableRelayData?: null): FilledRelayEventFilter;
        FilledRelay(amount?: null, totalFilledAmount?: null, fillAmount?: null, repaymentChainId?: null, originChainId?: BigNumberish | null, destinationChainId?: null, relayerFeePct?: null, realizedLpFeePct?: null, depositId?: BigNumberish | null, destinationToken?: null, relayer?: null, depositor?: string | null, recipient?: null, message?: null, updatableRelayData?: null): FilledRelayEventFilter;
        "FilledV3Relay(address,address,uint256,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,address,bytes,tuple)"(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, repaymentChainId?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, relayer?: string | null, depositor?: null, recipient?: null, message?: null, relayExecutionInfo?: null): FilledV3RelayEventFilter;
        FilledV3Relay(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, repaymentChainId?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, relayer?: string | null, depositor?: null, recipient?: null, message?: null, relayExecutionInfo?: null): FilledV3RelayEventFilter;
        "FundsDeposited(uint256,uint256,uint256,int64,uint32,uint32,address,address,address,bytes)"(amount?: null, originChainId?: null, destinationChainId?: BigNumberish | null, relayerFeePct?: null, depositId?: BigNumberish | null, quoteTimestamp?: null, originToken?: null, recipient?: null, depositor?: string | null, message?: null): FundsDepositedEventFilter;
        FundsDeposited(amount?: null, originChainId?: null, destinationChainId?: BigNumberish | null, relayerFeePct?: null, depositId?: BigNumberish | null, quoteTimestamp?: null, originToken?: null, recipient?: null, depositor?: string | null, message?: null): FundsDepositedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PausedDeposits(bool)"(isPaused?: null): PausedDepositsEventFilter;
        PausedDeposits(isPaused?: null): PausedDepositsEventFilter;
        "PausedFills(bool)"(isPaused?: null): PausedFillsEventFilter;
        PausedFills(isPaused?: null): PausedFillsEventFilter;
        "PreLeafExecuteHook(address)"(token?: null): PreLeafExecuteHookEventFilter;
        PreLeafExecuteHook(token?: null): PreLeafExecuteHookEventFilter;
        "RelayedRootBundle(uint32,bytes32,bytes32)"(rootBundleId?: BigNumberish | null, relayerRefundRoot?: BytesLike | null, slowRelayRoot?: BytesLike | null): RelayedRootBundleEventFilter;
        RelayedRootBundle(rootBundleId?: BigNumberish | null, relayerRefundRoot?: BytesLike | null, slowRelayRoot?: BytesLike | null): RelayedRootBundleEventFilter;
        "RequestedSpeedUpDeposit(int64,uint32,address,address,bytes,bytes)"(newRelayerFeePct?: null, depositId?: BigNumberish | null, depositor?: string | null, updatedRecipient?: null, updatedMessage?: null, depositorSignature?: null): RequestedSpeedUpDepositEventFilter;
        RequestedSpeedUpDeposit(newRelayerFeePct?: null, depositId?: BigNumberish | null, depositor?: string | null, updatedRecipient?: null, updatedMessage?: null, depositorSignature?: null): RequestedSpeedUpDepositEventFilter;
        "RequestedSpeedUpV3Deposit(uint256,uint32,address,address,bytes,bytes)"(updatedOutputAmount?: null, depositId?: BigNumberish | null, depositor?: string | null, updatedRecipient?: null, updatedMessage?: null, depositorSignature?: null): RequestedSpeedUpV3DepositEventFilter;
        RequestedSpeedUpV3Deposit(updatedOutputAmount?: null, depositId?: BigNumberish | null, depositor?: string | null, updatedRecipient?: null, updatedMessage?: null, depositorSignature?: null): RequestedSpeedUpV3DepositEventFilter;
        "RequestedV3SlowFill(address,address,uint256,uint256,uint256,uint32,uint32,uint32,address,address,address,bytes)"(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, depositor?: null, recipient?: null, message?: null): RequestedV3SlowFillEventFilter;
        RequestedV3SlowFill(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, originChainId?: BigNumberish | null, depositId?: BigNumberish | null, fillDeadline?: null, exclusivityDeadline?: null, exclusiveRelayer?: null, depositor?: null, recipient?: null, message?: null): RequestedV3SlowFillEventFilter;
        "SetHubPool(address)"(newHubPool?: string | null): SetHubPoolEventFilter;
        SetHubPool(newHubPool?: string | null): SetHubPoolEventFilter;
        "SetXDomainAdmin(address)"(newAdmin?: string | null): SetXDomainAdminEventFilter;
        SetXDomainAdmin(newAdmin?: string | null): SetXDomainAdminEventFilter;
        "TokensBridged(uint256,uint256,uint32,address,address)"(amountToReturn?: null, chainId?: BigNumberish | null, leafId?: BigNumberish | null, l2TokenAddress?: string | null, caller?: null): TokensBridgedEventFilter;
        TokensBridged(amountToReturn?: null, chainId?: BigNumberish | null, leafId?: BigNumberish | null, l2TokenAddress?: string | null, caller?: null): TokensBridgedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "V3FundsDeposited(address,address,uint256,uint256,uint256,uint32,uint32,uint32,uint32,address,address,address,bytes)"(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, destinationChainId?: BigNumberish | null, depositId?: BigNumberish | null, quoteTimestamp?: null, fillDeadline?: null, exclusivityDeadline?: null, depositor?: string | null, recipient?: null, exclusiveRelayer?: null, message?: null): V3FundsDepositedEventFilter;
        V3FundsDeposited(inputToken?: null, outputToken?: null, inputAmount?: null, outputAmount?: null, destinationChainId?: BigNumberish | null, depositId?: BigNumberish | null, quoteTimestamp?: null, fillDeadline?: null, exclusivityDeadline?: null, depositor?: string | null, recipient?: null, exclusiveRelayer?: null, message?: null): V3FundsDepositedEventFilter;
    };
    estimateGas: {
        EMPTY_RELAYER(overrides?: CallOverrides): Promise<BigNumber>;
        EMPTY_REPAYMENT_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
        INFINITE_FILL_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_TRANSFER_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        SLOW_FILL_MAX_TOKENS_TO_SEND(overrides?: CallOverrides): Promise<BigNumber>;
        UPDATE_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<BigNumber>;
        UPDATE_V3_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<BigNumber>;
        __SpokePool_init(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        callback(data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        crossDomainAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositExclusive(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadlineOffset: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg8: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositQuoteTimeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        depositV2(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        distributeRelayerRefunds(_chainId: BigNumberish, amountToReturn: BigNumberish, refundAmounts: BigNumberish[], leafId: BigNumberish, l2TokenAddress: string, refundAddresses: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enabledDepositRoutes(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeSlowRelayLeaf(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, rootBundleId: BigNumberish, message: BytesLike, payoutAdjustment: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillDeadlineBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        fillRelay(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillRelayV3Internal(relayExecution: V3SpokePoolInterface.V3RelayExecutionParamsStruct, relayer: string, isSlowFill: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillRelayWithUpdatedDeposit(depositor: string, recipient: string, updatedRecipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, updatedMessage: BytesLike, depositorSignature: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;
        hubPool(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        numberOfDeposits(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pauseDeposits(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauseFills(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pausedDeposits(overrides?: CallOverrides): Promise<BigNumber>;
        pausedFills(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rootBundles(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setChainId(_chainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCurrentTime(time: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFillStatus(relayHash: BytesLike, fillType: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setHubPool(newHubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        speedUpDeposit(depositor: string, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        tryMulticall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        verifyUpdateV3DepositMessage(depositor: string, depositId: BigNumberish, originChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        wrappedNativeToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        EMPTY_RELAYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EMPTY_REPAYMENT_CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INFINITE_FILL_DEADLINE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_TRANSFER_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        SLOW_FILL_MAX_TOKENS_TO_SEND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UPDATE_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        UPDATE_V3_DEPOSIT_DETAILS_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        __SpokePool_init(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        callback(data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crossDomainAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositExclusive(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadlineOffset: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositFor(depositor: string, recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg8: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositQuoteTimeBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositV2(recipient: string, originToken: string, amount: BigNumberish, destinationChainId: BigNumberish, relayerFeePct: BigNumberish, quoteTimestamp: BigNumberish, message: BytesLike, arg7: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositV3(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, quoteTimestamp: BigNumberish, fillDeadline: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        depositV3Now(depositor: string, recipient: string, inputToken: string, outputToken: string, inputAmount: BigNumberish, outputAmount: BigNumberish, destinationChainId: BigNumberish, exclusiveRelayer: string, fillDeadlineOffset: BigNumberish, exclusivityDeadline: BigNumberish, message: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        distributeRelayerRefunds(_chainId: BigNumberish, amountToReturn: BigNumberish, refundAmounts: BigNumberish[], leafId: BigNumberish, l2TokenAddress: string, refundAddresses: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyDeleteRootBundle(rootBundleId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enabledDepositRoutes(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeRelayerRefundLeaf(rootBundleId: BigNumberish, relayerRefundLeaf: SpokePoolInterface.RelayerRefundLeafStruct, proof: BytesLike[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeSlowRelayLeaf(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, rootBundleId: BigNumberish, message: BytesLike, payoutAdjustment: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeV3SlowRelayLeaf(slowFillLeaf: V3SpokePoolInterface.V3SlowFillStruct, rootBundleId: BigNumberish, proof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillDeadlineBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fillRelay(depositor: string, recipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillRelayV3Internal(relayExecution: V3SpokePoolInterface.V3RelayExecutionParamsStruct, relayer: string, isSlowFill: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillRelayWithUpdatedDeposit(depositor: string, recipient: string, updatedRecipient: string, destinationToken: string, amount: BigNumberish, maxTokensToSend: BigNumberish, repaymentChainId: BigNumberish, originChainId: BigNumberish, realizedLpFeePct: BigNumberish, relayerFeePct: BigNumberish, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, message: BytesLike, updatedMessage: BytesLike, depositorSignature: BytesLike, maxCount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillStatuses(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fillV3Relay(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fillV3RelayWithUpdatedDeposit(relayData: V3SpokePoolInterface.V3RelayDataStruct, repaymentChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hubPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_initialDepositId: BigNumberish, _crossDomainAdmin: string, _hubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        numberOfDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseDeposits(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauseFills(pause: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pausedDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pausedFills(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relayRootBundle(relayerRefundRoot: BytesLike, slowRelayRoot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        requestV3SlowFill(relayData: V3SpokePoolInterface.V3RelayDataStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rootBundles(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setChainId(_chainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCrossDomainAdmin(newCrossDomainAdmin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCurrentTime(time: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setEnableRoute(originToken: string, destinationChainId: BigNumberish, enabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFillStatus(relayHash: BytesLike, fillType: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setHubPool(newHubPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        speedUpDeposit(depositor: string, updatedRelayerFeePct: BigNumberish, depositId: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        speedUpV3Deposit(depositor: string, depositId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        tryMulticall(data: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        verifyUpdateV3DepositMessage(depositor: string, depositId: BigNumberish, originChainId: BigNumberish, updatedOutputAmount: BigNumberish, updatedRecipient: string, updatedMessage: BytesLike, depositorSignature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wrappedNativeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
