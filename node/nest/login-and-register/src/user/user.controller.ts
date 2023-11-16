import {
  Controller,
  Post,
  Body,
  Inject,
  Res,
  Get,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { Register } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginGuard } from './login.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('login')
  async login(
    @Body(ValidationPipe) user: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const foundUser = await this.userService.login(user);
    if (!foundUser) {
      return 'login fail';
    }

    const token = await this.jwtService.signAsync({
      user: {
        id: foundUser.id,
        username: foundUser.username,
      },
    });

    res.setHeader('token', token);

    return 'login success';
  }

  @Post('register')
  async register(@Body(ValidationPipe) user: Register) {
    console.log(user);
    return await this.userService.register(user);
  }

  // 只有登录才能访问的接口
  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa() {
    return 'aaa';
  }

  @Get('bbb')
  bbb() {
    return 'bbb';
  }
}
