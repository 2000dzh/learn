import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { IotcService } from './iotc.service';
import { CreateIotcDto } from './dto/create-iotc.dto';

@Controller('iotc')
export class IotcController {
  constructor(private readonly iotcService: IotcService) {}

  @Inject('CONFIG_OPTIONS')
  private configOptions: Record<string, any>;

  @Post()
  create(@Body() createIotcDto: CreateIotcDto) {
    return this.iotcService.create(createIotcDto);
  }

  @Get()
  hello() {
    console.log(this.configOptions);
    return 'iotc';
  }
}
