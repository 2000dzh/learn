import { Module } from '@nestjs/common';
import { PcdService } from './pcd.service';
import { PcdController } from './pcd.controller';

@Module({
  controllers: [PcdController],
  providers: [PcdService],
})
export class PcdModule {}
