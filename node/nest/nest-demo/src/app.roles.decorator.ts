import { SetMetadata } from '@nestjs/common';
import { Role } from './role';

// 元数据装饰器
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
