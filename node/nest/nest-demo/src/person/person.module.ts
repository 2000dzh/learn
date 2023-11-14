import {
  Global,
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

// 全局装饰器,其他模块不需要引入可以直接使用
// @Global()
@Module({
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule implements OnModuleInit, OnApplicationBootstrap {
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('什么时候执行-module -person', 'onModuleInit');
  }
  onApplicationBootstrap() {
    const cccService = this.moduleRef.get<PersonService>(PersonService);
    console.log('什么时候执行-module -person', 'onApplicationBootstrap');
    console.log(cccService.findAll());
  }
}
