import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() user): Promise<User | HttpStatus> {
    return this.authService.register(user);
  }

  @Post('/login')
  async login(@Body() candidate): Promise<User | HttpStatus> {
    return this.authService.login(candidate);
  }

  @Post('/logout')
  async logout(): Promise<string> {
    return this.authService.logout();
  }
}
