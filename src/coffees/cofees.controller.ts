import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './cofees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  async findAll() {
    return await this.coffeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.coffeesService.findOne(id);
  }

  @Post()
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return await this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return await this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.coffeesService.remove(id);
  }
}
