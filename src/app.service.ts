import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
  sex: string;
}

@Injectable()
export class AppService {
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  getHello(): string {
    return 'Hello World!';
  }
  getArray(): number[] {
    return this.array;
  }
}
