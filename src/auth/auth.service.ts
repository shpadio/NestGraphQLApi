import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';

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
        user.login === candidate.login && user.password === candidate.password
      );
    });
    return user ? user : 404;
  }

  logout(): string {
    return 'Logged out successfully';
  }
}
