import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesModule } from './coffees/cofees.module';
import { UserModule } from './user/user.module';
import { TeasModule } from './teas/teas.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoffeesModule,
    UserModule,
    TeasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
