import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async register(userDto: UserDto) {
    const candidate = await this.userService.getUserByLogin(userDto.login);
    if (candidate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.userService.create({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async generateToken(user) {
    const payload = {
      login: user.login,
      id: user.id,
    };
    return this.jwtService.sign(payload);
  }

  async login(userDto: UserDto) {
    const candidate = await this.userService.getUserByLogin(userDto.login);
    if (candidate && bcrypt.compare(userDto.password, candidate.password)) {
      return candidate;
    }
    throw new HttpException('Wrong password', HttpStatus.BAD_REQUEST);
  }

  logout(): string {
    return 'Logged out successfully';
  }
}
