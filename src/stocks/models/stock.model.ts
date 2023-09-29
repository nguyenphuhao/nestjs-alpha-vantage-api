import { Field, ObjectType } from '@nestjs/graphql';
import { Metadata } from './metadata.model';
import { TimeSeries } from './time-series.model';

@ObjectType({ description: 'recipe ' })
export class Stock {
  @Field()
  metadata: Metadata;

  @Field(type => [TimeSeries])
  timeSeries: [TimeSeries];
}
