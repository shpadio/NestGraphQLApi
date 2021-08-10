import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TeasResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
