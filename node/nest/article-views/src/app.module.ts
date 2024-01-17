import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticeModule } from './artice/artice.module';
import { User } from './user/entities/user.entity';
import { Article } from './artice/entities/artice.entity';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3308,
    //   username: 'root',
    //   password: 'admin123',
    //   database: 'email_login_test',
    //   synchronize: true,
    //   logging: true,
    //   entities: [User, Article],
    //   poolSize: 10,
    //   connectorPackage: 'mysql2',
    //   extra: {
    //     authPlugin: 'sha256_password',
    //   },
    // }),
    // UserModule,
    // ArticeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
