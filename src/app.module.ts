import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StockModule } from './stocks/stock.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      autoTransformHttpErrors: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: (error, e) => {
        const orgError = error.extensions?.originalError as any;
        const graphQLFormattedError = {
          message:
            orgError?.message || error.message,
          name: error.extensions?.code,
        };
        return graphQLFormattedError;
      },
    }),
    StockModule,

  ],

})
export class AppModule { }
