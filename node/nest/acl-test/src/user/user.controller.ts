import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Session,
  // UseGuards,
  // ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login.user.dto';
import { RedisService } from 'src/redis/redis.service';
// import { PermissionGuard } from './permission.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(RedisService)
  private redisService: RedisService;

  @Get('init')
  async init() {
    await this.userService.initData();
    return 'done';
  }

  @Post('login')
  async login(@Body() loginUser: LoginUserDto, @Session() session) {
    // console.log(loginUser, session);
    const user = await this.userService.login(loginUser);

    session.user = {
      username: user.username,
    };

    return 'success';
  }

  @Get('ceshi')
  ceshi() {
    console.log(this.redisService);
  }
}
