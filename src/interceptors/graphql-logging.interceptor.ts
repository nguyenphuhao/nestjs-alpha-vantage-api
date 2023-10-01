import { Injectable, NestInterceptor, ExecutionContext, CallHandler, LoggerService } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { tap } from 'rxjs/operators';

@Injectable()
export class GraphQLLoggingInterceptor implements NestInterceptor {
  constructor(private logger: LoggerService) {
  }
  intercept(context: ExecutionContext, next: CallHandler) {
    const args = context.getArgs();
    const { req } = args[2];
    const { fieldName: action } = args[3];
    const stringify = (data) => JSON.stringify(data).replace(/\\n/g, '');
    this.logger.log(stringify(req.body), `Request - ${action} `);

    return next.handle().pipe(
      tap((response) =>
        this.logger.log(stringify(response), `Response - ${action}`)
      )
    );
  }
}