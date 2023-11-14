import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit, OnApplicationBootstrap {
  getHello(): string {
    return 'Hello World!';
  }
  onModuleInit() {
    console.log('什么时候执行service', 'onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('什么时候执行service', 'onApplicationBootstrap');
  }
}
