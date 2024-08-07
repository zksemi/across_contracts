import { SignerWithAddress, Contract, BigNumber } from "../../utils/utils";
import { RelayerRefundLeaf } from "../MerkleLib.utils";
export declare const spokePoolFixture: (options?: unknown) => Promise<{
    weth: Contract;
    erc20: Contract;
    spokePool: Contract;
    unwhitelistedErc20: Contract;
    destErc20: Contract;
    erc1271: Contract;
}>;
export declare function deploySpokePool(ethers: any, spokePoolName?: string): Promise<{
    weth: Contract;
    erc20: Contract;
    spokePool: Contract;
    unwhitelistedErc20: Contract;
    destErc20: Contract;
    erc1271: Contract;
}>;
export interface DepositRoute {
    originToken: string;
    destinationChainId?: number;
    enabled?: boolean;
}
export declare function enableRoutes(spokePool: Contract, routes: DepositRoute[]): Promise<void>;
export declare function depositV2(spokePool: Contract, token: Contract, recipient: SignerWithAddress, depositor: SignerWithAddress, destinationChainId?: number, amount?: BigNumber, relayerFeePct?: BigNumber, quoteTimestamp?: number, message?: string): Promise<Record<string, number | BigNumber | string> | null>;
export declare function fillRelay(spokePool: Contract, destErc20: Contract | string, recipient: SignerWithAddress, depositor: SignerWithAddress, relayer: SignerWithAddress, depositId?: number, originChainId?: number, depositAmount?: BigNumber, amountToRelay?: BigNumber, realizedLpFeePct?: BigNumber, relayerFeePct?: BigNumber): Promise<{
    amount: any;
    totalFilledAmount: any;
    fillAmount: any;
    repaymentChainId: number;
    originChainId: number;
    relayerFeePct: any;
    appliedRelayerFeePct: any;
    realizedLpFeePct: any;
    depositId: any;
    destinationToken: any;
    relayer: any;
    depositor: any;
    recipient: any;
    isSlowRelay: any;
    destinationChainId: number;
} | null>;
export interface RelayData {
    depositor: string;
    recipient: string;
    destinationToken: string;
    amount: BigNumber;
    realizedLpFeePct: BigNumber;
    relayerFeePct: BigNumber;
    depositId: string;
    originChainId: string;
    destinationChainId: string;
    message: string;
}
export interface V3RelayData {
    depositor: string;
    recipient: string;
    exclusiveRelayer: string;
    inputToken: string;
    outputToken: string;
    inputAmount: BigNumber;
    outputAmount: BigNumber;
    originChainId: number;
    depositId: number;
    fillDeadline: number;
    exclusivityDeadline: number;
    message: string;
}
export interface V3RelayExecutionParams {
    relay: V3RelayData;
    relayHash: string;
    updatedOutputAmount: BigNumber;
    updatedRecipient: string;
    updatedMessage: string;
    repaymentChainId: number;
}
export declare const enum FillType {
    FastFill = 0,
    ReplacedSlowFill = 1,
    SlowFill = 2
}
export declare const enum FillStatus {
    Unfilled = 0,
    RequestedSlowFill = 1,
    Filled = 2
}
export interface SlowFill {
    relayData: RelayData;
    payoutAdjustmentPct: BigNumber;
}
export interface V3SlowFill {
    relayData: V3RelayData;
    chainId: number;
    updatedOutputAmount: BigNumber;
}
export declare function getRelayHash(_depositor: string, _recipient: string, _depositId: number, _originChainId: number, _destinationChainId: number, _destinationToken: string, _amount?: BigNumber, _realizedLpFeePct?: BigNumber, _relayerFeePct?: BigNumber, _message?: string): {
    relayHash: string;
    relayData: RelayData;
};
export declare function getV3RelayHash(relayData: V3RelayData, destinationChainId: number): string;
export declare function getDepositParams(args: {
    recipient?: string;
    originToken: string;
    amount: BigNumber;
    destinationChainId: number;
    relayerFeePct: BigNumber;
    quoteTimestamp: number;
    message?: string;
    maxCount?: BigNumber;
}): string[];
export declare function getFillRelayParams(_relayData: RelayData, _maxTokensToSend: BigNumber, _repaymentChain?: number, _maxCount?: BigNumber): string[];
export declare function getFillRelayUpdatedFeeParams(_relayData: RelayData, _maxTokensToSend: BigNumber, _updatedFee: BigNumber, _signature: string, _repaymentChain?: number, _updatedRecipient?: string, _updatedMessage?: string, _maxCount?: BigNumber): string[];
export declare function getExecuteSlowRelayParams(_depositor: string, _recipient: string, _destToken: string, _amount: BigNumber, _originChainId: number, _realizedLpFeePct: BigNumber, _relayerFeePct: BigNumber, _depositId: number, _relayerRefundId: number, _message: string, _payoutAdjustment: BigNumber, _proof: string[]): (string | string[])[];
export interface UpdatedRelayerFeeData {
    newRelayerFeePct: string;
    depositorMessageHash: string;
    depositorSignature: string;
}
export declare function modifyRelayHelper(modifiedRelayerFeePct: BigNumber, depositId: string, originChainId: string, depositor: SignerWithAddress, updatedRecipient: string, updatedMessage: string): Promise<{
    signature: string;
}>;
export declare function getUpdatedV3DepositSignature(depositor: SignerWithAddress, depositId: number, originChainId: number, updatedOutputAmount: BigNumber, updatedRecipient: string, updatedMessage: string): Promise<string>;
export declare function deployMockSpokePoolCaller(spokePool: Contract, rootBundleId: number, leaf: RelayerRefundLeaf, proof: string[]): Promise<Contract>;
