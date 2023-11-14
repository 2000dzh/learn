import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

// filter 是处理抛出的未捕获异常的，通过 @Catch 来指定处理的异常

@Catch(HttpException)
export class AppFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    console.log(exception.message);
    response.status(exception.getStatus()).json({
      msg: exception.message,
    });
  }
}

@Catch(HttpException)
export class HelloFilter implements ExceptionFilter {
  @Inject(AppService)
  private readonly service: AppService;

  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();

    const statusCode = exception.getStatus();

    const res = exception.getResponse() as { message: Array<string> };

    let message = exception.message;
    if (res && Array.isArray(res.message) && res.message.length) {
      message = res.message.join();
    }

    response.status(statusCode).json({
      code: statusCode,
      message,
      erro: 'Bad Request',
      xxx: 111,
      yyy: this.service.getHello(),
    });
  }
}

// 自定义过滤器
export class MyLoginException {
  message: string;

  constructor(message) {
    this.message = message;
  }
}

@Catch(MyLoginException)
export class MyLoginFilter implements ExceptionFilter {
  catch(exception: MyLoginException, host: ArgumentsHost) {
    console.log(exception, host);
    const response = host.switchToHttp().getResponse<Response>();

    response
      .status(HttpStatus.UNAUTHORIZED)
      .json({
        code: HttpStatus.UNAUTHORIZED,
        message: 'fail',
        data: exception.message || '用户登录',
      })
      .end();
  }
}
