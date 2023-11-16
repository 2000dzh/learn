import { Injectable } from '@nestjs/common';
import { CreateIotcDto } from './dto/create-iotc.dto';
import { UpdateIotcDto } from './dto/update-iotc.dto';

@Injectable()
export class IotcService {
  create(createIotcDto: CreateIotcDto) {
    return 'This action adds a new iotc';
  }

  findAll() {
    return `This action returns all iotc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} iotc`;
  }

  update(id: number, updateIotcDto: UpdateIotcDto) {
    return `This action updates a #${id} iotc`;
  }

  remove(id: number) {
    return `This action removes a #${id} iotc`;
  }
}
