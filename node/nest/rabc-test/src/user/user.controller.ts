import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLogin } from './dto/user.login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return '';
  }

  @Get('init')
  async init() {
    await this.userService.initData();
    return 'done';
  }

  @Get('login')
  login(@Body() loginUser: UserLogin) {
    console.log(loginUser);
    return 'success';
  }
}
