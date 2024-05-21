import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { ArticeModule } from 'src/artice/artice.module';

@Module({
  imports: [ArticeModule],
  providers: [TaskService],
})
export class TaskModule {}
