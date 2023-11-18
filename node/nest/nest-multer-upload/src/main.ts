import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true, //1.支持跨域
  });

  // 2.启用跨域支持
  // app.enableCors(); // 启用跨域支持

  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static',
  });

  await app.listen(3245);
}
bootstrap();
