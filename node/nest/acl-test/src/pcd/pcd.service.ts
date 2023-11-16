import { Injectable } from '@nestjs/common';
import { CreatePcdDto } from './dto/create-pcd.dto';
import { UpdatePcdDto } from './dto/update-pcd.dto';

@Injectable()
export class PcdService {
  create(createPcdDto: CreatePcdDto) {
    return 'This action adds a new pcd';
  }

  findAll() {
    return `This action returns all pcd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pcd`;
  }

  update(id: number, updatePcdDto: UpdatePcdDto) {
    return `This action updates a #${id} pcd`;
  }

  remove(id: number) {
    return `This action removes a #${id} pcd`;
  }
}
