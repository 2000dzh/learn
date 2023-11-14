import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';

// 可以依赖注入
@Injectable()
export class AppMiddleware implements NestMiddleware {
  // 构造器注入
  constructor(private readonly appService: AppService) {}

  // 属性注入
  // @Inject(AppService)
  // private readonly appService: AppService;

  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    console.log('---' + this.appService.getHello());
    next();
    console.log('after');
  }
}

// 函数中间件
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('before---函数中间件');
  next();
  console.log('after---函数中间件');
}
