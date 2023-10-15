import { MARKET_DATASET } from '@/constants/market';

export interface IOHLCData {
  readonly close: number;
  readonly date: Date;
  readonly high: number;
  readonly low: number;
  readonly open: number;
  readonly volume: number;
}

export type MarketDataset = (typeof MARKET_DATASET)[number];
