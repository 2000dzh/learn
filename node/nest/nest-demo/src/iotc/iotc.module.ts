import { DynamicModule, Module } from '@nestjs/common';
import { IotcService } from './iotc.service';
import { IotcController } from './iotc.controller';

// @Module({
//   controllers: [IotcController],
//   providers: [IotcService],
// })
// export class IotcModule {}

// 创建动态模块
// 这里  register 方法其实叫啥都行，但 nest 约定了 3 种方法名
// register
// forRoot
// forFeature
// register：用一次模块传一次配置，比如这次调用是 BbbModule.register({aaa:1})，下一次就是 BbbModule.register({aaa:2}) 了
// forRoot：配置一次模块用多次，比如 XxxModule.forRoot({}) 一次，之后就一直用这个 Module，一般在 AppModule 里 import
// forFeature：用了 forRoot 固定了整体模块，用于局部的时候，可能需要再传一些配置，比如用 forRoot 指定了数据库链接信息，再用 forFeature 指定某个模块访问哪个数据库和表。

@Module({})
export class IotcModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      // global: true,
      module: IotcModule,
      controllers: [IotcController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        IotcService,
      ],
      exports: [],
    };
  }
}
