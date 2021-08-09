import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(user: UserDto) {
    return await this.userRepository.save(this.userRepository.create(user));
  }
  async findAll() {
    return await this.userRepository.find({});
  }
  async delete(id: string) {
    const userToBeDeleted = await this.userRepository.findOne(id);
    return await this.userRepository.remove(userToBeDeleted);
  }

  async getUserByLogin(login: string) {
    const user = await this.userRepository.findOne({ where: login });
    if (!user) throw new NotFoundException(`User not found!`);
    return user;
  }
}
