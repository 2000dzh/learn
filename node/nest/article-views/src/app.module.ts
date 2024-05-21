import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticeModule } from './artice/artice.module';
import { User } from './user/entities/user.entity';
import { Article } from './artice/entities/artice.entity';
import { RedisModule } from './redis/redis.module';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'admin123',
      database: 'article_views',
      synchronize: true,
      logging: true,
      entities: [User, Article],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    UserModule,
    ArticeModule,
    RedisModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
