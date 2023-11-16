import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';

// acl 直接给用户分配权限

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // secret 是加密 cookie 的密钥。
  // resave 是 session 没变的时候要不要重新生成 cookie。
  // saveUninitialized 是没登录要不要也创建一个 session。
  app.use(
    session({
      secret: 'ding',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // 全局启用 验证器
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
