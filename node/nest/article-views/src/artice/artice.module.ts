import { Module } from '@nestjs/common';
import { ArticeService } from './artice.service';
import { ArticeController } from './artice.controller';

@Module({
  controllers: [ArticeController],
  providers: [ArticeService],
  exports: [ArticeService],
})
export class ArticeModule {}
