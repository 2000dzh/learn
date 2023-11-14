import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
// import { Response, Request } from 'express';
import { WocException } from './WocException';

@Catch(WocException)
export class AaaFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    console.log(exception, host);
    const type = host.getType();
    switch (type) {
      case 'http':
        const specificException = exception as WocException;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        // const request = ctx.getRequest<Request>();
        // console.log(request);
        response.status(500).json({
          aaa: specificException.aaa,
          bbb: specificException.bbb,
        });
        break;
      case 'ws':
        break;
      case 'rpc':
        break;
    }
  }
}
