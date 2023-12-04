// 创建 nest 项目 (-p pnpm 是指定包管理器)
// npx @nestjs/cli new 项目名 -p pnpm

// 全局安装
// npm install -g @nestjs/cli
// nest new 项目名

// 建个 user 的 CRUD 模块
// npx nest g resource user
// --no-spec 不生成测试文件

// 生成一个 pipe(管道)
// npx nest g pipe 文件名 --no-spec --flat
// --no-spec 不生成测试文件夹
// --flat 不会生成文件夹

// 生成一个 guard(守卫)
// npx nest g guard 文件名 --no-spec --flat

// 生成一个 iotc 模块
// npx nest g module iotc (一个 iotc 文件夹和一个 iotc.module.ts 文件)

// 生成一个 iotc 服务
// npx nest g service iotc (一个 iotc 文件夹和一个 iotc.service.ts 文件)