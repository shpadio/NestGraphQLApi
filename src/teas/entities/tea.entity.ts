import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsPositive, IsString } from 'class-validator';

@Entity()
export class Tea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsPositive()
  price: number;
}
