import { Module, Provider } from '@nestjs/common';
import { StocksResolver } from './stock.resolvers';
import { AlphaVantageAPIProviderModule } from 'src/providers/alpha-vantage/alpha-vantage.module';
import { Providers, Services } from 'src/core/di';
import { GetTimeSeriesStockDataUseCase } from 'src/core/domain/stock/get-time-series-stock-data.usecase';
import { AlphaVantageAPIProvider } from 'src/providers/alpha-vantage/alpha-vantage-api.provider';
import { StockService } from './stock.service';

const providers: Provider[] = [
  {
    provide: Providers.GetTimeSeriesStockDataUseCase,
    useFactory: (alphaVantageAPIProvider: AlphaVantageAPIProvider) => {
      return new GetTimeSeriesStockDataUseCase({
        getTimeSeriesIntradayStock: alphaVantageAPIProvider.getTimeSeriesIntradayStock,
        getTimeSeriesDailyStock: alphaVantageAPIProvider.getTimeSeriesDailyStock,
      });
    },
    inject: [AlphaVantageAPIProvider]
  },
  {
    provide: Services.StockService,
    useClass: StockService
  },
  StocksResolver,
]

@Module({
  imports: [AlphaVantageAPIProviderModule],
  providers,
})
export class StockModule { }