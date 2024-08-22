import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // 启用跨域
  // app.enableCors();

  console.log(path.join(__dirname));
  // D:\dzh\个人学习\learn\node\Nest\book-management-system-backend\dist

  console.log(path.join(__dirname, '../uploads'));
  // D:\dzh\个人学习\learn\node\Nest\book-management-system-backend\uploads

  app.useStaticAssets(path.join(__dirname, '../uploads'), {
    prefix: '/uploads',
  });

  await app.listen(3000);
}
bootstrap();
