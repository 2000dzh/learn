import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppInterceptor } from './app.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注入
  app.useGlobalInterceptors(new AppInterceptor());

  // 添加全局前缀
  app.setGlobalPrefix('/api');

  await app.listen(3000);
}
bootstrap();
