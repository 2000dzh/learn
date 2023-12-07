import { Module } from '@nestjs/common';
import { IotcService } from './iotc.service';
import { IotcController } from './iotc.controller';

@Module({
  controllers: [IotcController],
  providers: [IotcService]
})
export class IotcModule {}
