import { Field, ArgsType } from '@nestjs/graphql';
import { IsIn, IsOptional, Matches } from 'class-validator';

@ArgsType()
export class GetTimeSeriesStockArgs {
  @Field()
  symbol: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsIn(['compact', 'full'])
  outputsize: 'compact' | 'full';
}