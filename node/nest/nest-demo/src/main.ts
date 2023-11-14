import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'guang',
      cookie: { maxAge: 10000 },
    }),
  );
  // 调用 useStaticAssets 来支持静态资源的请求(注意要给 create 方法传入 NestExpressApplication 的泛型参数才有 useStaticAssets这些方法)
  app.useStaticAssets('public', { prefix: '/static' });

  // 返回的内容指定渲染引擎
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs'); // 指定模版引擎为 handlerbars

  await app.listen(3000);

  // of(1, 2, 3)
  //   .pipe(map((x) => x * x))
  //   .pipe(filter((x) => x % 2 !== 0))
  //   .subscribe((v) => console.log(`value ${v}`));

  // const number$ = of(1, 2, 3);
  // number$
  //   .pipe(
  //     scan((total, x) => x + total),
  //     map((sum, index) => sum / (index + 1)),
  //   )
  //   .subscribe(console.log);

  // setTimeout(() => {
  //   app.close();
  // }, 3000);
}
bootstrap();
