import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService, User } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() user): User | HttpStatus {
    return this.authService.register(user);
  }

  @Post('/login')
  login(@Body() candidate): User | HttpStatus {
    return this.authService.login(candidate);
  }

  @Post('/logout')
  logout(): string {
    return this.authService.logout();
  }
}
