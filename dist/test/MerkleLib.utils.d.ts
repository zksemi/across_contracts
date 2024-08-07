import { BigNumber, Contract } from "../utils/utils";
import { MerkleTree } from "../utils/MerkleTree";
import { SlowFill, V3SlowFill } from "./fixtures/SpokePool.Fixture";
export interface PoolRebalanceLeaf {
    chainId: BigNumber;
    groupIndex: BigNumber;
    bundleLpFees: BigNumber[];
    netSendAmounts: BigNumber[];
    runningBalances: BigNumber[];
    leafId: BigNumber;
    l1Tokens: string[];
}
export interface RelayerRefundLeaf {
    amountToReturn: BigNumber;
    chainId: BigNumber;
    refundAmounts: BigNumber[];
    leafId: BigNumber;
    l2TokenAddress: string;
    refundAddresses: string[];
}
export declare function buildRelayerRefundTree(relayerRefundLeaves: RelayerRefundLeaf[]): Promise<MerkleTree<RelayerRefundLeaf>>;
export declare function buildRelayerRefundLeaves(destinationChainIds: number[], amountsToReturn: BigNumber[], l2Tokens: string[], refundAddresses: string[][], refundAmounts: BigNumber[][]): RelayerRefundLeaf[];
export declare function buildPoolRebalanceLeafTree(poolRebalanceLeaves: PoolRebalanceLeaf[]): Promise<MerkleTree<PoolRebalanceLeaf>>;
export declare function buildPoolRebalanceLeaves(destinationChainIds: number[], l1Tokens: string[][], bundleLpFees: BigNumber[][], netSendAmounts: BigNumber[][], runningBalances: BigNumber[][], groupIndex: number[]): PoolRebalanceLeaf[];
export declare function constructSingleRelayerRefundTree(l2Token: Contract | String, destinationChainId: number): Promise<{
    leaves: RelayerRefundLeaf[];
    tree: MerkleTree<RelayerRefundLeaf>;
}>;
export declare function constructSingleChainTree(token: string, scalingSize?: number, repaymentChain?: number): Promise<{
    tokensSendToL2: BigNumber;
    realizedLpFees: BigNumber;
    leaves: PoolRebalanceLeaf[];
    tree: MerkleTree<PoolRebalanceLeaf>;
}>;
export declare function buildSlowRelayTree(slowFills: SlowFill[]): Promise<MerkleTree<SlowFill>>;
export declare function buildV3SlowRelayTree(slowFills: V3SlowFill[]): Promise<MerkleTree<V3SlowFill>>;
