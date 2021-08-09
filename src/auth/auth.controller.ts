import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @Post('/login')
  async login(@Body() candidate: UserDto) {
    return this.authService.login(candidate);
  }

  @Post('/logout')
  async logout(): Promise<string> {
    return this.authService.logout();
  }
}
