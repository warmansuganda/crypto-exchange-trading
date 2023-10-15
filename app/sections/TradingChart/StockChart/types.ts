import { IOHLCData } from '../data';

export interface StockChartProps {
  data?: IOHLCData[];
  dateTimeFormat?: string;
  height?: number;
  width?: number;
  ratio?: number;
}
