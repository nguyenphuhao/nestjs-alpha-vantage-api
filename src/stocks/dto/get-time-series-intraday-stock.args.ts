import { Field, ArgsType } from '@nestjs/graphql';
import { IntradayInterval } from 'src/core/domain/stock/stock.entity';

@ArgsType()
export class GetTimeSeriesIntradayStockArgs {
  @Field()
  symbol: string;
  @Field()
  interval: IntradayInterval;
}