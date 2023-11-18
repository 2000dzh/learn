import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import config from './config';
import config2 from './config2';

@Module({
  imports: [
    ConfigModule.forRoot({
      // 后面的配置会覆盖前面的配置
      // envFilePath: [
      //   path.join(process.cwd(), '.aaa.env'),
      //   path.join(process.cwd(), '.env'),
      // ],

      // 后面的配置会覆盖前面的配置
      load: [config2, config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
