import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

// 利用同名 interface 会自动合并的特点来扩展 Session
declare module 'express-session' {
  interface Session {
    user: {
      username: string;
    };
  }
}

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if (!request.session?.user) {
      throw new UnauthorizedException('用户未登录');
    }

    return true;
  }
}
