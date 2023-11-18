import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLogin } from './dto/user.login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  findAll() {
    return '';
  }

  @Get('init')
  async init() {
    await this.userService.initData();
    return 'done';
  }

  @Post('login')
  async login(@Body() loginUser: UserLogin) {
    console.log(loginUser);
    const user = await this.userService.login(loginUser);
    console.log(user);

    const token = this.jwtService.sign({
      user: {
        username: user.username,
        roles: user.roles,
      },
    });

    return {
      token,
    };
  }
}
