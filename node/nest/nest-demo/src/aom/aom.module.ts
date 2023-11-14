import { Module } from '@nestjs/common';
import { AomService } from './aom.service';
import { AomController } from './aom.controller';
import { ConfigurableModuleClass } from './aom.module-definition';

// 第二种创建动态模块的方式
@Module({
  controllers: [AomController],
  providers: [AomService],
})
export class AomModule extends ConfigurableModuleClass {}
