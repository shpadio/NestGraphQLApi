import { Body, HttpStatus, Injectable } from '@nestjs/common';

export interface User {
  name: string;
  password: string;
  age: number;
  sex: string;
}

@Injectable()
export class AuthService {
  users: User[] = [];

  register(@Body() user): User {
    this.users.push(user);
    return user;
  }

  login(@Body() candidate): User | HttpStatus {
    const user = this.users.find((user) => {
      return (
        user.name === candidate.name && user.password === candidate.password
      );
    });
    return user ? user : 200;
  }

  test(@Body() body: User): string {
    return body.sex;
  }
}
