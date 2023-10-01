import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphQLLoggingInterceptor } from './interceptors/graphql-logging.interceptor';
import { ExternalExceptionFilter } from './exceptions/base.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 400
  }));
  const logger = new ConsoleLogger();
  app.useGlobalInterceptors(new GraphQLLoggingInterceptor(logger));
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExternalExceptionFilter(logger))
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
