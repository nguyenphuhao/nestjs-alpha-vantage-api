import { IUseCase } from "../../usecase";
import { TimeSeriesStockData } from "./stock.entity";
export class GetTimeSeriesStockDataUseCase implements IUseCase {
  constructor(
    private readonly handler: {
      getTimeSeriesIntradayStock: (options: any) => Promise<TimeSeriesStockData>,
      getTimeSeriesDailyStock: (options: any) => Promise<TimeSeriesStockData>
    }
  ) { }
  async execute(timeFrame: 'intraday' | 'daily', options: any): Promise<TimeSeriesStockData> {
    switch (timeFrame) {
      case 'intraday':
        return this.handler.getTimeSeriesIntradayStock(options);
      default:
        return this.handler.getTimeSeriesDailyStock(options);
    }
  }
}
