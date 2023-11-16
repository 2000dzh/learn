import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PcdService } from './pcd.service';
import { CreatePcdDto } from './dto/create-pcd.dto';
import { UpdatePcdDto } from './dto/update-pcd.dto';
import { LoginGuard } from 'src/login.guard';

@Controller('pcd')
export class PcdController {
  constructor(private readonly pcdService: PcdService) {}

  @Post()
  @UseGuards(LoginGuard)
  create(@Body() createPcdDto: CreatePcdDto) {
    return this.pcdService.create(createPcdDto);
  }

  @Get()
  @UseGuards(LoginGuard)
  findAll() {
    return this.pcdService.findAll();
  }

  @Get(':id')
  @UseGuards(LoginGuard)
  findOne(@Param('id') id: string) {
    return this.pcdService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(LoginGuard)
  update(@Param('id') id: string, @Body() updatePcdDto: UpdatePcdDto) {
    return this.pcdService.update(+id, updatePcdDto);
  }

  @Delete(':id')
  @UseGuards(LoginGuard)
  remove(@Param('id') id: string) {
    return this.pcdService.remove(+id);
  }
}
