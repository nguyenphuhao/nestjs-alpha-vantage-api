export type DailyInterval = 'daily';
export type IntradayInterval = '1min' | '5min' | '15min' | '30min' | '60min';
export interface TimeSeries {
  timestamp: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface Metadata {
  information: string;
  symbol: string;
  lastRefreshed: string;
  interval: string;
  outputSize: string;
  timeZone: string;
}

export interface TimeSeriesStockData {
  metadata: Metadata;
  timeSeries: TimeSeries[];
}