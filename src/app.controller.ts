import { Controller, Get, Post } from '@nestjs/common';
import { AppService, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/arr')
  getArray(): number[] {
    return this.appService.getArray();
  }
}
