import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用跨域支持
  app.enableCors();

  // 添加全局前缀
  app.setGlobalPrefix('/api');

  await app.listen(3001);
}
bootstrap();
