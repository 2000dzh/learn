import { Injectable } from '@nestjs/common';
import { CreateIotcDto } from './dto/create-iotc.dto';

@Injectable()
export class IotcService {
  create(createIotcDto: CreateIotcDto) {
    return 'This action adds a new iotc';
  }
}
