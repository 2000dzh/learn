import { Controller, Get, Param, Req, Session } from '@nestjs/common';
import { ArticeService } from './artice.service';

@Controller('artice')
export class ArticeController {
  constructor(private readonly articeService: ArticeService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articeService.findOne(+id);
  }

  @Get(':id/view')
  async view(@Param('id') id: string, @Session() session, @Req() req) {
    return this.articeService.view(+id, session?.user?.id || req.ip);
  }
}
