import { IsNotEmpty, Length } from 'class-validator';

export class UserLogin {
  @IsNotEmpty()
  @Length(1, 50)
  username: string;

  @IsNotEmpty()
  @Length(1, 50)
  password: string;
}
