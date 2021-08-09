import { Module } from '@nestjs/common';
import { CofeesController } from './cofee.controller';
import { CofeesService } from './cofee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CofeesController],
  providers: [CofeesService],
})
export class CofeeModule {}
