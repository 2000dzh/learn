import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
// import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject()
  private userService: UserService;

  @Inject()
  private reflector: Reflector;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log(this.userService);

    const request = context.switchToHttp().getRequest<Request>();

    if (!request.user) {
      return true;
    }

    const roles = await this.userService.findRolesByIds(
      request.user.roles.map((item) => item.id),
    );

    const permission = roles.reduce((total, current) => {
      total.push(...current.permissions);
      return total;
    }, []);

    const requirePermission = this.reflector.getAllAndOverride(
      'require-permissoin',
      [context.getClass(), context.getHandler()],
    );

    const len = requirePermission.Length;
    for (let i = 0; i < len; i++) {
      const curPermission = requirePermission[i];
      const found = permission.find((item) => item.name === curPermission);
      if (!found) {
        throw new UnauthorizedException('没有权限访问该接口');
      }
    }

    console.log(requirePermission);

    console.log(permission);

    return true;
  }
}
