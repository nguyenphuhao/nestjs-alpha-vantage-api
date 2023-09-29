import { ConsoleLogger, LoggerService } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { GraphQLLoggingInterceptor } from './interceptors/graphql-logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new GraphQLLoggingInterceptor(new ConsoleLogger()));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
