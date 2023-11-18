import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Aaa } from './aaa.entity';
import { createClient } from 'redis';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.20.10.3',
      port: 3308,
      username: 'root',
      password: 'admin123',
      database: 'aaa',
      synchronize: true,
      logging: true,
      entities: [Aaa],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIEN',
      async useFactory() {
        const client = createClient({
          socket: {
            host: '172.20.10.3',
            port: 6379,
          },
        });

        await client.connect();
        return client;
      },
    },
  ],
})
export class AppModule {}
