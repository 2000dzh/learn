import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { WocModule } from './woc/woc.module';
import { IotcModule } from './iotc/iotc.module';
import { AomModule } from './aom/aom.module';
import { AppMiddleware, logger } from './app.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HelloFilter, MyLoginFilter } from './app.filter';

// 关于生命周期执行顺序,先遍历一边依赖图，再处理 app 的生命周期

@Module({
  imports: [
    WocModule,
    PersonModule,
    IotcModule.register({
      name: 'iotc',
      age: 66,
    }),
    AomModule.register({
      name: 'aom',
      age: 666,
    }),
  ],
  controllers: [AppController],
  // 简洁写法
  // providers: [AppService],
  providers: [
    {
      // 完整写法
      // token也可以是个字符串(注入的时候就要用 @Inject 手动指定注入对象的 token 了)
      provide: AppService,
      useClass: AppService,
    },
    // 指定值,让 IOC 容器来注入
    {
      provide: 'person1',
      useValue: {
        name: 'dzh',
        age: 22,
      },
    },
    // 注入动态值
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'dzh2',
          age: 22,
        };
      },
    },
    // useFactory 同样支持参数注入
    {
      provide: 'person3',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person1', AppService],
    },
    // useFactory 支持异步
    {
      provide: 'person4',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 300);
        });

        return {
          name: 'dzh4',
          age: 44,
        };
      },
    },
    // 别名提供者
    {
      provide: 'person5',
      useExisting: 'person1',
    },
    // 注册全局过滤器(好处可以注入其他provider)
    {
      provide: APP_FILTER,
      useClass: HelloFilter,
    },
    {
      provide: APP_FILTER,
      useClass: MyLoginFilter,
    },
  ],
})
export class AppModule
  implements
    NestModule,
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  configure(consumer: MiddlewareConsumer) {
    // 全匹配
    consumer.apply(AppMiddleware).forRoutes('*');

    // 函数中间件-精准匹配
    consumer
      .apply(logger)
      .forRoutes({ path: '/dzh/bbb*', method: RequestMethod.POST });

    // 多个中间件
    // consumer
    //   .apply(AppMiddleware, logger)
    //   .forRoutes({ path: '/dzh/bbb*', method: RequestMethod.POST });
  }

  onModuleInit() {
    console.log('什么时候执行module', 'onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('什么时候执行module', 'onApplicationBootstrap');
  }
  onModuleDestroy() {
    console.log('什么时候执行module', 'OnModuleDestroy');
  }
  // beforeApplicationShutdown 是可以拿到 signal 系统信号的，比如 SIGTERM。
  beforeApplicationShutdown(signal?: string) {
    console.log(signal);
    console.log('什么时候执行module', 'beforeApplicationShutdown');
  }
}
