import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePetInputDto {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;
}
