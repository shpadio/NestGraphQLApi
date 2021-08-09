import { IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsNumber()
  age: number;
}
