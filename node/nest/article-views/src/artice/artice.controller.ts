import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticeService } from './artice.service';
import { CreateArticeDto } from './dto/create-artice.dto';
import { UpdateArticeDto } from './dto/update-artice.dto';

@Controller('artice')
export class ArticeController {
  constructor(private readonly articeService: ArticeService) {}

  @Post()
  create(@Body() createArticeDto: CreateArticeDto) {
    return this.articeService.create(createArticeDto);
  }

  @Get()
  findAll() {
    return this.articeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticeDto: UpdateArticeDto) {
    return this.articeService.update(+id, updateArticeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articeService.remove(+id);
  }
}
