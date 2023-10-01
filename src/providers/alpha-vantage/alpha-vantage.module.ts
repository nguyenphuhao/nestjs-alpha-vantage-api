import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AlphaVantageAPIProvider } from './alpha-vantage-api.provider';
import { toTimeSeriesStockData } from './alpha-vantage.helper';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: 5000,
        maxRedirects: 5,
        baseURL: configService.get('PROVIDER_ALPHA_VANTAGE_STOCK_API_URL'),
        params: {
          apikey: configService.get('PROVIDER_ALPHA_VANTAGE_STOCK_API_KEY'),
          datatype: 'json'
        },
        transformResponse: (data) => {
          return toTimeSeriesStockData(data);
        }
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AlphaVantageAPIProvider],
  exports: [AlphaVantageAPIProvider]
})
export class AlphaVantageAPIProviderModule { }
