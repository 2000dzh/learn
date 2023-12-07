import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(MapTestInterceptor)
  async getHello() {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(3000);
    return this.appService.getHello();
  }

  @Get('bbb')
  @UseInterceptors(TapTestInterceptor)
  getHello2() {
    return 'bbb';
  }

  @Get('ccc')
  @UseInterceptors(CatchErrorTestInterceptor)
  getHello3() {
    throw new Error('xxx');
    return 'ccc';
  }

  @Get('ddd')
  @UseInterceptors(TimeoutInterceptor)
  async getHello4() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return 'ddd';
  }
}
