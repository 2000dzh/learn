import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PermissionGuard } from './permission.guard';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    // {
    //   provide: PermissionGuard,
    //   useClass: PermissionGuard
    // }
    // 简写
    PermissionGuard,
  ],
  exports: [UserService, PermissionGuard],
})
export class UserModule {}
