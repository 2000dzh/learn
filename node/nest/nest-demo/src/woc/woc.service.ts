import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';

import { PersonService } from 'src/person/person.service';

@Injectable()
export class WocService implements OnModuleInit, OnApplicationBootstrap {
  constructor(private personService: PersonService) {}

  create() {
    return 'This action adds a new aaa';
  }

  findAll() {
    return `This action returns all aaa` + this.personService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} aaa`;
  }

  remove(id: number) {
    return `This action removes a #${id} aaa`;
  }
  onModuleInit() {
    console.log('什么时候执行-service -aaa', 'onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('什么时候执行-service -aaa', 'onApplicationBootstrap');
  }
}
