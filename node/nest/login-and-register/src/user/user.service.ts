import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Register } from './dto/register.dto';
import * as crypto from 'crypto';
import { LoginDto } from './dto/login.dto';

function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  async login(user: LoginDto) {
    const { username, password } = user || {};

    const foundUser = await this.userRepository.findOneBy({
      username,
    });

    if (!foundUser) {
      throw new HttpException('用户不存在 请先注册!', 200);
    }

    if (md5(password) !== foundUser.password) {
      throw new HttpException('密码错误', 200);
    }

    return foundUser;
  }

  async register(user: Register) {
    const { username, password } = user || {};
    const foundUser = await this.userRepository.findOneBy({
      username,
    });

    if (foundUser) {
      throw new HttpException('用户已存在', 200);
    }

    const newUser = new User();
    newUser.username = username;
    newUser.password = md5(password);

    try {
      await this.userRepository.save(newUser);
      return '注册成功';
    } catch (e) {
      return '注册失败';
    }
  }
}
