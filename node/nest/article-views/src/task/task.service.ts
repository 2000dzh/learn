import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ArticeService } from 'src/artice/artice.service';

@Injectable()
export class TaskService {
  @Inject(ArticeService)
  private articeService: ArticeService;

  @Cron(CronExpression.EVERY_DAY_AT_4AM)
  async handleCron() {
    await this.articeService.flushRedisToDB();
  }
}
