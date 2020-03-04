import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { NewtaskRepo } from 'src/repository/newTask.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'winston';

@Injectable()
export class NewtaskService {
    constructor(
        @InjectRepository(NewtaskRepo)
        private readonly newTaskRepo: NewtaskRepo,
        @Inject('winston')
        private readonly logger: Logger
    ) { }

    async getAllTasks() {

        const tasks = await this.newTaskRepo.find();
        if (!tasks) {
            throw new NotFoundException("No task found!");
        }
        this.logger.info(' INFO : Going to fetch all task on NewTaskService.', "getAllTasks");
        // this.logger.error(`ERROR : Going to fetch all task on NewTaskService.`);
        return tasks;
    }
}
