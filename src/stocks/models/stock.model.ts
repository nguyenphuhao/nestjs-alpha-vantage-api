import { Field, ObjectType } from '@nestjs/graphql';
import { DailyMetadata, Metadata } from './metadata.model';
import { TimeSeries } from './time-series.model';

@ObjectType({ description: 'Intraday Stock for Historical Stock Data' })
export class Stock {
  @Field()
  metadata: Metadata;

  @Field(type => [TimeSeries])
  timeSeries: [TimeSeries];
}

@ObjectType({ description: 'Intraday Stock for Historical Stock Data' })
export class DailyStock {
  @Field()
  metadata: DailyMetadata;

  @Field(type => [TimeSeries])
  timeSeries: [TimeSeries];
}
