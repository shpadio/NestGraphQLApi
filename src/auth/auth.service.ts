import { HttpStatus, Injectable } from '@nestjs/common';

export interface User {
  name: string;
  password: string;
  age: number;
  sex: string;
}

@Injectable()
export class AuthService {
  users: User[] = [];

  register(user: User): User | HttpStatus {
    if (this.users.includes(user)) {
      return 404;
    }
    this.users.push(user);
    return user;
  }

  login(candidate): User | HttpStatus {
    const user = this.users.find((user) => {
      return (
        user.name === candidate.name && user.password === candidate.password
      );
    });
    return user ? user : 404;
  }

  logout(): string {
    return 'Logged out successfully';
  }
}
