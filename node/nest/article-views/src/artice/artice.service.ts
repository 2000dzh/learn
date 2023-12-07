import { Injectable } from '@nestjs/common';
import { CreateArticeDto } from './dto/create-artice.dto';
import { UpdateArticeDto } from './dto/update-artice.dto';

@Injectable()
export class ArticeService {
  create(createArticeDto: CreateArticeDto) {
    return 'This action adds a new artice';
  }

  findAll() {
    return `This action returns all artice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artice`;
  }

  update(id: number, updateArticeDto: UpdateArticeDto) {
    return `This action updates a #${id} artice`;
  }

  remove(id: number) {
    return `This action removes a #${id} artice`;
  }
}
