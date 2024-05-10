import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BmiCalculations, Mealtime, Plans, RecipeMealtimeMapping, Recipes, User, UserBmiMapping, UserPlanMapping } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@123',
      database: 'test',
      entities: [
        User,
        Recipes,
        Mealtime,
        Plans,
        UserPlanMapping,
        UserBmiMapping,
        RecipeMealtimeMapping,
        BmiCalculations
      ],
      synchronize: false,
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
