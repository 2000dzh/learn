import { SetMetadata } from '@nestjs/common';

export const RequireLogin = () => SetMetadata('require-login', true);

export const RequirePermission = (...permission: Array<string>) =>
  SetMetadata('require-permissoin', permission);
