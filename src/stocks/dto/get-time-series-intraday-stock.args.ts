import { Field, ArgsType } from '@nestjs/graphql';
import { IntradayInterval } from 'src/core/domain/stock/stock.entity';
import { GetTimeSeriesStockArgs } from './get-time-series-stock.args';
import { IsIn, IsOptional, IsString, Matches, isBoolean } from 'class-validator';

@ArgsType()
export class GetTimeSeriesIntradayStockArgs extends GetTimeSeriesStockArgs {
  @Field()
  @Matches(/^(1|5|15|30|60)min$/, {
    message: "interval must be in 1min, 5min, 15min, 30min, 60min"
  })
  interval: IntradayInterval;
  @Field({ nullable: true })
  @IsOptional()
  @IsIn(['true', 'false'])
  adjusted: string;
  @Field({ nullable: true })
  @IsOptional()
  @IsIn(['true', 'false'])
  extended_hours: string;
}