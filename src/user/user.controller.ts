import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }

  @Delete()
  async delete(@Param() id: string) {
    return await this.userService.delete(id);
  }
}
