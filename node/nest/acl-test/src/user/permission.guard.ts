import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
// import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(UserService)
  private userService: UserService;

  @Inject(Reflector)
  private reflector: Reflector;

  @Inject(RedisService)
  private redisService: RedisService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    console.log(request.session);
    const user = request.session.user;

    if (!user) {
      throw new UnauthorizedException('用户未登录');
    }

    const key = `user_${user.username}_permissions`;

    // 先去redis查找权限(redis 是基于内存的，访问速度会比 mysql 快很多。这就是为什么要用 redis。)
    let permissions = await this.redisService.listGet(key);

    // 如果 redis 没有就去查数据库,并把查到的权限存到 redis 过期时间为 30分钟
    if (!permissions) {
      const foundUser = await this.userService.findByUsername(user.username);
      permissions = foundUser.permissions.map((item) => item.name);
      this.redisService.listSet(key, permissions, 60 * 30);
    }

    // 获取当前路由的元数据
    const permission = this.reflector.get('permission', context.getHandler());

    if (permissions.some((item) => item === permission)) {
      return true;
    } else {
      throw new UnauthorizedException('没有权限访问该接口');
    }
  }
}
