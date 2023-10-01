import { Field, ArgsType } from '@nestjs/graphql';
import { GetTimeSeriesStockArgs } from './get-time-series-stock.args';

@ArgsType()
export class GetTimeSeriesDailyStockArgs extends GetTimeSeriesStockArgs { }