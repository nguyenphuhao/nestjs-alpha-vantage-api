import { Inject, Injectable } from '@nestjs/common';
import { Providers } from 'src/core/di';
import { GetTimeSeriesStockDataUseCase } from 'src/core/domain/stock/get-time-series-stock-data.usecase';
import { TimeSeriesStockData } from 'src/core/domain/stock/stock.entity';
import { TimeSeriesDailyOptions, TimeSeriesIntradayOptions } from 'src/providers/alpha-vantage/alpha-vantage-api.provider';

export interface IStockService {
  getTimeSeriesIntradayStock(params: TimeSeriesIntradayOptions): Promise<TimeSeriesStockData>;
  getTimeSeriesDailyStock(params: TimeSeriesDailyOptions): Promise<TimeSeriesStockData>;
}

@Injectable()
export class StockService {
  constructor(
    @Inject(Providers.GetTimeSeriesStockDataUseCase)
    private readonly getTimeSeriesStockDataUseCase: GetTimeSeriesStockDataUseCase
  ) { }
  getTimeSeriesIntradayStock(params: TimeSeriesIntradayOptions): Promise<TimeSeriesStockData> {
    return this.getTimeSeriesStockDataUseCase.execute('intraday', params);
  }
  getTimeSeriesDailyStock(params: TimeSeriesDailyOptions): Promise<TimeSeriesStockData> {
    return this.getTimeSeriesStockDataUseCase.execute('daily', params);
  }
}
