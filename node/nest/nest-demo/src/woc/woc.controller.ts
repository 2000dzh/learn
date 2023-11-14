import {
  Controller,
  Get,
  Param,
  Delete,
  UseFilters,
  UseGuards,
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { WocService } from './woc.service';
import { AaaFilter } from './woc.filter';
import { WocException } from './WocException';
import { WocGuard } from './woc.guard';
import { Roles } from '../app.roles.decorator';
import { Role } from '../role';
import { Request } from 'express';

// 合并装饰器
function Bob(path: string, role: Role) {
  return applyDecorators(Get(path), UseGuards(WocGuard), Roles(role));
}

// 自定义参数装饰器
// 获取请求头信息
const MyHeaders = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  return key ? request.headers[key] : request.headers;
});

@Controller({ path: 'woc' })
export class WocController {
  constructor(private readonly aaaService: WocService) {}

  @Get()
  @UseFilters(AaaFilter<WocException>)
  findAll() {
    throw new WocException('aaa', 'bbb');
    return this.aaaService.findAll();
  }

  @Bob('c1c1', Role.User)
  c1c1() {
    console.log('c1c1');
    return 1212;
  }

  @Get('hello2')
  Hello2(@MyHeaders() headers, @MyHeaders('accept') headers2) {
    console.log(headers);
    console.log(headers2);
    return headers;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aaaService.remove(+id);
  }
  // onModuleInit() {
  //   console.log('什么时候执行-controller -aaa', 'onModuleInit');
  // }
  // onApplicationBootstrap() {
  //   console.log('什么时候执行-controller -aaa', 'onApplicationBootstrap');
  // }
}
