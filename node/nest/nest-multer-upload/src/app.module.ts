import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileSizeValidationPipePipe } from './file-size-validation-pipe.pipe';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: APP_PIPE,
      useClass: FileSizeValidationPipePipe,
    },
  ],
})
export class AppModule {}
