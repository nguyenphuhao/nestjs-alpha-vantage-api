import { Args, Query, Resolver } from "@nestjs/graphql";
import { DailyStock, Stock } from "./models/stock.model";
import { IStockService } from "./stock.service";
import { GetTimeSeriesDailyStockArgs } from "./dto/get-time-series-daily-stock.args";
import { GetTimeSeriesIntradayStockArgs } from "./dto/get-time-series-intraday-stock.args";
import { Services } from "src/core/di";
import { Inject } from "@nestjs/common";

@Resolver(of => Stock)
export class StocksResolver {
  constructor(
    @Inject(Services.StockService)
    private readonly stockService: IStockService
  ) { }

  @Query(returns => Stock)
  async intradayTimeSeriesStock(@Args() args: GetTimeSeriesIntradayStockArgs) {
    const { symbol, interval } = Object.assign({
      interval: '15min',
    }, args);
    return this.stockService.getTimeSeriesIntradayStock({
      symbol,
      interval
    });
  }

  @Query(returns => DailyStock)
  async dailyTimeSeriesStock(@Args() args: GetTimeSeriesDailyStockArgs) {
    const { symbol, interval } = Object.assign({
      interval: '15min',
    }, args);
    return this.stockService.getTimeSeriesDailyStock({
      symbol,
    });
  }
}
