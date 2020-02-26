import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { NewtaskModule } from './newtask/newtask.module';
import { AppMiddleware } from './cross.middelwere';
import { NewtaskController } from './newtask/newtask.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    UsersModule,
    NewtaskModule
  ],
})
export class AppModule implements NestModule {
   configure(consumer: MiddlewareConsumer){
     consumer
        .apply(AppMiddleware)
        .forRoutes(NewtaskController);
   }
 }
