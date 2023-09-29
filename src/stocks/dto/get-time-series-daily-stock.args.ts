import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetTimeSeriesDailyStockArgs {
  @Field()
  symbol: string;
}