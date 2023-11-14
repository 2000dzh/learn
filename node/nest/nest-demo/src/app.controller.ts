import {
  Controller,
  Get,
  Inject,
  Param,
  OnModuleInit,
  OnApplicationBootstrap,
  UseFilters,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  Body,
  Post,
  SetMetadata,
  UseGuards,
  Headers,
  Ip,
  Session,
  HostParam,
  Req,
  Res,
  Next,
  HttpCode,
  Header,
  Redirect,
  Render,
  Query,
  ParseArrayPipe,
  ParseEnumPipe,
  ParseUUIDPipe,
  DefaultValuePipe,
  ValidationPipe,
  // BadGatewayException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AppFilter, HelloFilter, MyLoginException } from './app.filter';
import { AppValidationPipe, MyValidationPipe } from './app.pipe';
import { AppGuard } from './app.guard';
import { Roles } from './app.roles.decorator';
import { NextFunction, Request, Response } from 'express';
import { Role } from './role';
import { RTY } from './dto/rty.dto';

enum Lll {
  AAA = '111',
  BBB = '222',
  CCC = '333',
}

// host 指定域名生效
// path 指定路径生效 (path是作为访问前缀)
@Controller({ host: ':host.0.0.1', path: 'dzh' })
@Controller()
@SetMetadata('roles', ['user'])
export class AppController implements OnModuleInit, OnApplicationBootstrap {
  // 1.构造器注入
  // constructor(private readonly appService: AppService) {}

  // 2.属性注入
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('person1')
  private readonly person1: { name: string; age: number };

  @Inject('person2')
  private readonly person2: { name: string; age: number };

  @Inject('person3')
  private readonly person3: { name: string };

  @Inject('person4')
  private readonly person4: { name: string; age: number };

  @Inject('person5')
  private readonly person5: { name: string; age: number };

  @Get()
  @UseFilters(AppFilter)
  @UseGuards(AppGuard)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    console.log(22121);
    console.log(this.person1);
    console.log(this.person2);
    console.log(this.person3);
    console.log(this.person4);
    console.log(this.person5);
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    return this.appService.getHello();
  }

  @Get('/ddd/:id')
  @UseGuards(AppGuard)
  @Roles(Role.User)
  // 1.管道只对某个参数使用
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Headers('Accept') accept: string, // 获取请求头信息
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept);
    console.log(headers);
    return `你成功了${id}`;
  }

  // 2.管道针对某个路由使用
  @Get('/xxx/:id')
  @UsePipes(AppValidationPipe)
  getXXXId(@Param('id') id: number) {
    return id;
  }

  @Post('/bbb')
  getHello2(@Body() aaa: { a: number }) {
    console.log(aaa);
    return aaa;
  }

  @Get('/cccc')
  getHello3(@HostParam('host') host) {
    console.log(host);
    return '2121';
  }

  // 通过装饰器拿到 request 对象,可以手动获取任何参数
  // request 对象代表客户端发起的 http 请求,它包含请求的各种信息,如请求头,请求参数,请求体。
  @Get('/ddd')
  getHello4(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
    return req.url;
  }

  // 通过 @Res 或者 @Response 注入 response 对象
  // response 对象代表服务器对客户端的 HTTP 响应。它用于构建和发送响应给客户端。可以使用 responce 对象设置响应的状态码,响应头,响应体等。
  @Get('/eee')
  getHello5(@Res() res: Response) {
    // getHello5(@Res({ passthrough: true }) res: Response) { 也可以通过设置 passthrough 用函数返回值作为响应
    // 只要注入 Res Nest就不会把函数的返回值作为响应了,需要自己返回内容(Nest 这么设计是为了避免你自己返回的响应和 Nest 返回的响应的冲突。)
    res.end('eee');
  }

  // 当你有两个 handler 来处理同一个路由时,可以在第一个 handler 注入 @Next,调用它来把请求转发到第二个 handler
  @Get('/fff')
  fff(@Next() next: NextFunction) {
    next();
    return 'f1';
  }
  @Get('/fff')
  @HttpCode(222) // handler 默认返回的是 200 的状态码，你可以通过 @HttpCode 修改它：
  fff2() {
    return 'f2';
  }

  // 通过 @Header 装饰器 修改 response header
  @Get('/ggg')
  @Header('aaa', 'bbb')
  ggg() {
    return 'ggg hello';
  }

  // 通过 @Redirect 装饰器来指定路由重定向的 url
  @Get('/hhh')
  @Redirect('http://juejin.cn')
  hhh() {}

  @Get('user')
  @Render('user')
  getHello6() {
    return { name: 'dzh', age: 22 };
  }

  // 通过装饰器获取ip
  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log(ip);
    return ip;
  }

  // 通过装饰器拿到 session 对象
  @Get('/session')
  session(@Session() session) {
    // 可以在 session 对象里存储信息了
    if (!session.count) {
      session.count = 0;
    }
    session.count++;
    console.log(session);
    return session.count;
  }

  @Get('bad')
  @UseFilters(AppFilter) // 使用 filter 处理错误
  bad() {
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
  }

  // 数字校验
  @Get('jjj')
  jjj(
    @Query(
      'jj',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND, // 指定错误码
        exceptionFactory(error) {
          console.log(error);
          throw new HttpException('不是数字', HttpStatus.NOT_IMPLEMENTED);
        },
      }),
    )
    jj: string,
  ) {
    // jj.
    return jj;
  }

  // 把参数转成数组
  @Get('kkk')
  kkk(
    @Query(
      'kk',
      new ParseArrayPipe({
        items: Number, // 指定数组每一项的类型
        separator: '..', // 指定分隔符
        optional: true, // 可以不传参数
      }),
    )
    kk: Array<number>,
  ) {
    return kk.reduce((total, num) => total + num, 0);
  }

  // 枚举类型校验
  @Get('lll/:enumm')
  lll(@Param('enumm', new ParseEnumPipe(Lll)) lll: Lll) {
    console.log(lll);
    return lll;
  }

  // 校验uuid
  // b1f024b5-a185-46f0-86df-96c29c3524bd
  @Get('zzz/:uuid')
  zzz(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return uuid;
  }

  // 设置默认值
  @Get('qwe')
  qwe(@Query('qwe', new DefaultValuePipe('aaaa')) qwe: string) {
    return qwe;
  }

  @Post('rty')
  rty(@Body(new ValidationPipe()) rty: RTY) {
    console.log(rty);
    return rty;
  }

  @Post('uio')
  uio(@Body(MyValidationPipe) uio: RTY) {
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    console.log(uio);
  }

  @Post('pas')
  @UseFilters(HelloFilter)
  pas() {
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    // throw new BadGatewayException('yyy');
    throw new MyLoginException('自定义过滤器测试报错');
    return 'pas';
  }

  onModuleInit() {
    console.log('什么时候执行controller1', 'onModuleInit');
  }
  onApplicationBootstrap() {
    console.log('什么时候执行controller', 'onApplicationBootstrap');
  }
}
