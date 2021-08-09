import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return await this.coffeeRepository.find({
      relations: ['flavors'],
    });
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) {
      throw new NotFoundException('Coffee is not found');
    }
    return coffee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeRepository.save(
      this.coffeeRepository.create(createCoffeeDto),
    );
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee not found!`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.coffeeRepository.findOne(id);
    return await this.coffeeRepository.remove(coffee);
  }
}
