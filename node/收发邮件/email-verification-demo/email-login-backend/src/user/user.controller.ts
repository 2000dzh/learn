import {
  Controller,
  Post,
  Body,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';

import { LoginUserDto } from './dto/login-user.dto';
import { RedisService } from 'src/redis/redis.service';

@Controller('user')
export class UserController {
  @Inject(RedisService)
  private redisService: RedisService;

  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const { email, code } = loginUserDto;
    console.log(email);
    const codeInRedis = await this.redisService.get(`captcha_ ${email}`);

    console.log(codeInRedis);
    if (!codeInRedis) {
      throw new UnauthorizedException('验证码失效');
    }

    if (code !== codeInRedis) {
      throw new UnauthorizedException('验证码不正确');
    }

    const user = await this.userService.findUserByEmail(email);

    console.log(user);
    return 'success';
  }
}
