import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IotcService } from './iotc.service';
import { CreateIotcDto } from './dto/create-iotc.dto';
import { UpdateIotcDto } from './dto/update-iotc.dto';
import { RequireLogin } from 'src/custom-decorato';

@Controller('iotc')
@RequireLogin()
export class IotcController {
  constructor(private readonly iotcService: IotcService) {}

  @Post()
  create(@Body() createIotcDto: CreateIotcDto) {
    return this.iotcService.create(createIotcDto);
  }

  @Get()
  findAll() {
    return this.iotcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iotcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIotcDto: UpdateIotcDto) {
    return this.iotcService.update(+id, updateIotcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iotcService.remove(+id);
  }
}
