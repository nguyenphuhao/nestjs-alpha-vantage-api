import { ArgumentsHost, HttpException, Logger, LoggerService } from '@nestjs/common';

export class ExternalExceptionFilter<T = any, R = any> {
  constructor(private readonly logger: LoggerService) { }

  catch(exception: HttpException, host: ArgumentsHost): R | Promise<R> {
    this.logger.error(exception.getResponse(), exception);
    throw exception;
  }
}