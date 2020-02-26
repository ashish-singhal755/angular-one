import { Module } from '@nestjs/common';
import { NewtaskController } from './newtask.controller';
import { NewtaskService } from './newtask.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewtaskRepo } from 'src/repository/newTask.repo';

@Module({
  imports:[
    TypeOrmModule.forFeature([NewtaskRepo]),
  ],
  controllers: [NewtaskController],
  providers: [NewtaskService]
})
export class NewtaskModule {}
