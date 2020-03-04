import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { infoTrensport, errorTrensport } from './config/logging.config';
import { UsersModule } from './users/users.module';
import { NewtaskModule } from './newtask/newtask.module';
import { AppMiddleware } from './cross.middelwere';
import { NewtaskController } from './newtask/newtask.controller';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as wdrf from 'winston-daily-rotate-file';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    WinstonModule.forRoot({
      transports:[
        // new winston.transports.File({
        //   filename:"error.log",
        //   level:"info",
        //   format: winston.format.combine(
        //     winston.format.timestamp(), 
        //     winston.format.simple(),
        //     winston.format.colorize()
        //     ),
        // })
        infoTrensport,
        errorTrensport
      ]
    }),
    TasksModule,
    UsersModule,
    NewtaskModule
  ],
})
export class AppModule { }

// implements NestModule {
//    configure(consumer: MiddlewareConsumer){
//      consumer
//         .apply(AppMiddleware)
//         .forRoutes(NewtaskController);
//    }
//  }
