import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PcdService } from './pcd.service';
import { CreatePcdDto } from './dto/create-pcd.dto';
import { UpdatePcdDto } from './dto/update-pcd.dto';
import { RequireLogin, RequirePermission } from 'src/custom-decorato';

@Controller('pcd')
@RequireLogin()
export class PcdController {
  constructor(private readonly pcdService: PcdService) {}

  @Post()
  create(@Body() createPcdDto: CreatePcdDto) {
    return this.pcdService.create(createPcdDto);
  }

  @Get()
  @RequirePermission('查询 bbb')
  findAll() {
    return this.pcdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePcdDto: UpdatePcdDto) {
    return this.pcdService.update(+id, updatePcdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcdService.remove(+id);
  }
}
