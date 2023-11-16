import { Module } from '@nestjs/common';
import { IotcService } from './iotc.service';
import { IotcController } from './iotc.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [IotcController],
  providers: [IotcService],
})
export class IotcModule {}
