import { Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService, User } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(user): User {
    return this.authService.register(user);
  }

  @Post('/login')
  login(candidate): User | HttpStatus {
    return this.authService.login(candidate);
  }

  @Post('/test')
  test(body): string {
    return this.authService.test(body);
  }
}
