import { Module, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { WocService } from './woc.service';
import { WocController } from './woc.controller';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [WocController],
  providers: [WocService],
})
export class WocModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('什么时候执行-module -aaa', 'onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('什么时候执行-module -aaa', 'onApplicationBootstrap');
  }
}
