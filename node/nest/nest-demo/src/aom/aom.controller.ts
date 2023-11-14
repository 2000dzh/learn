import { Controller, Get, Inject } from '@nestjs/common';
import { AomService } from './aom.service';
import {
  // OPTIONS_TYPE,
  AomModuleOptions,
  MODULE_OPTIONS_TOKEN,
} from './aom.module-definition';

@Controller('aom')
export class AomController {
  constructor(private readonly aomService: AomService) {}

  @Inject(MODULE_OPTIONS_TOKEN)
  private options: AomModuleOptions;
  // private options: typeof OPTIONS_TYPE; // 注册全局模块使用

  @Get('aaa')
  hello() {
    console.log(this.options);
    return 'aom/aaa';
  }
}
