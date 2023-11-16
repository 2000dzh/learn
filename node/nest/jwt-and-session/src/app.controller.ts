import {
  Controller,
  Get,
  Headers,
  Inject,
  Res,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  aaa(@Session() session) {
    console.log(session);
    session.count = session.count ? session.count + 1 : 1;
    return session.count;
  }

  @Get('bbb')
  bbb(@Res({ passthrough: true }) response: Response) {
    const newToken = this.jwtService.sign({
      count: 1,
    });
    response.setHeader('token', newToken);
    return 'hello';
  }

  @Get('ccc')
  ccc(
    @Headers('authorization') authorization: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (authorization) {
      try {
        const token = authorization.split(' ')[1];
        const data = this.jwtService.verify(token);

        const count = data.count + 1;
        const newToken = this.jwtService.sign({
          count,
        });

        response.setHeader('token', newToken);
        return count;
      } catch (e) {
        console.log(e);
        throw new UnauthorizedException();
      }
    } else {
      const newToken = this.jwtService.sign({
        count: 1,
      });
      response.setHeader('token', newToken);

      return 1;
    }
  }
}
