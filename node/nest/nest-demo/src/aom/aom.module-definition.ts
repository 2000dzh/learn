import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface AomModuleOptions {
  name: string;
  age: number;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<AomModuleOptions>().build(); // 默认暴露 register
// new ConfigurableModuleBuilder<AomModuleOptions>().setClassMethodName('forRoot').build(); // 可以设置

// 注册全局模块
// export const {
//   ConfigurableModuleClass,
//   MODULE_OPTIONS_TOKEN,
//   OPTIONS_TYPE,
//   ASYNC_OPTIONS_TYPE, // 异步创建模块的 option 类型
// } = new ConfigurableModuleBuilder<AomModuleOptions>()
//   .setClassMethodName('register')
//   .setExtras(
//     {
//       isGlobal: true,
//     },
//     (definition, extras) => ({
//       ...definition,
//       global: extras.isGlobal,
//     }),
//   )
//   .build();
