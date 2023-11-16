import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { IotcService } from './iotc.service';
import { CreateIotcDto } from './dto/create-iotc.dto';
import { UpdateIotcDto } from './dto/update-iotc.dto';
import { LoginGuard } from 'src/login.guard';
import { PermissionGuard } from 'src/user/permission.guard';

@Controller('iotc')
export class IotcController {
  constructor(private readonly iotcService: IotcService) {}

  @Post()
  @UseGuards(LoginGuard)
  create(@Body() createIotcDto: CreateIotcDto) {
    return this.iotcService.create(createIotcDto);
  }

  @Get()
  // 这里使用 PermissionGuard 守卫 iotc-module 必须引入 user-module 因为 守卫内部注入了 user-service
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'query_aaa')
  findAll() {
    return this.iotcService.findAll();
  }

  @Get(':id')
  @UseGuards(LoginGuard)
  findOne(@Param('id') id: string) {
    return this.iotcService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(LoginGuard)
  update(@Param('id') id: string, @Body() updateIotcDto: UpdateIotcDto) {
    return this.iotcService.update(+id, updateIotcDto);
  }

  @Delete(':id')
  @UseGuards(LoginGuard)
  remove(@Param('id') id: string) {
    return this.iotcService.remove(+id);
  }
}
