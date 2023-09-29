import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeSeriesIntradayOptions } from './providers/alpha-vantage/alpha-vantage-api.provider';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
