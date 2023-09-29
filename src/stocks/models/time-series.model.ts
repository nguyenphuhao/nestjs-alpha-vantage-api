import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Time Series for Historical Stock Data' })
export class TimeSeries {
  @Field()
  timestamp: string;
  @Field()
  open: string;
  @Field()
  high: string;
  @Field()
  low: string;
  @Field()
  close: string;
  @Field()
  volume: string;
}
