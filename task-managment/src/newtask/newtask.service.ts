import { Injectable, NotFoundException } from '@nestjs/common';
import { NewtaskRepo } from 'src/repository/newTask.repo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewtaskService {
    constructor(
        @InjectRepository(NewtaskRepo)
        private readonly newTaskRepo: NewtaskRepo
    ) { }

    async getAllTasks() {
        const tasks = await this.newTaskRepo.find();
        if (!tasks) {
            throw new NotFoundException("No task found!");
        }
        return tasks;
    }
}
