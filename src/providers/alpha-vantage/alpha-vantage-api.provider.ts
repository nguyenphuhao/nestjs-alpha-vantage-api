import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { IntradayInterval, TimeSeriesStockData } from "src/core/domain/stock/stock.entity";

type TimeSeriesFunction = 'TIME_SERIES_INTRADAY' | 'TIME_SERIES_DAILY';
interface BaseOptions {
  symbol: string;
  function?: TimeSeriesFunction;
  outputsize?: 'compact' | 'full';
}

export interface TimeSeriesIntradayOptions extends BaseOptions {
  interval: IntradayInterval;
  adjusted?: boolean;
  extendedHours?: boolean;
  month?: string;

};

export interface TimeSeriesDailyOptions extends BaseOptions { };

@Injectable()
export class AlphaVantageAPIProvider {
  private static httpService: HttpService
  constructor(
    httpService: HttpService
  ) {
    AlphaVantageAPIProvider.httpService = httpService;
  }

  async getTimeSeriesIntradayStock(options: TimeSeriesIntradayOptions): Promise<TimeSeriesStockData> {
    const result = await AlphaVantageAPIProvider.httpService.axiosRef.get(`/query`, {
      params: {
        ...options,
        function: 'TIME_SERIES_INTRADAY',
      }
    });
    return result.data;
  }

  async getTimeSeriesDailyStock(options: TimeSeriesIntradayOptions): Promise<TimeSeriesStockData> {
    const result = await AlphaVantageAPIProvider.httpService.axiosRef.get(`/query`, {
      params: {
        ...options,
        function: 'TIME_SERIES_DAILY'
      }
    });
    return result.data;
  }
}
