import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Metadata for Historical Stock Data' })
export class Metadata {
  @Field()
  information: string;
  @Field()
  symbol: string;
  @Field()
  lastRefreshed: string;
  @Field()
  interval: string;
  @Field()
  outputSize: string;
  @Field()
  timeZone: string;
}

@ObjectType({ description: 'Metadata for Historical Stock Data' })
export class DailyMetadata {
  @Field()
  information: string;
  @Field()
  symbol: string;
  @Field()
  lastRefreshed: string;
  @Field()
  outputSize: string;
  @Field()
  timeZone: string;
}
