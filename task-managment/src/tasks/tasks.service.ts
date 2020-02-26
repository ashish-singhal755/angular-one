import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksModuleDto } from 'src/dto/tasks.dto';
import { TaskRepository } from 'src/repository/task.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { EntityRepository } from 'typeorm';
import * as uuid from "uuid/v1";
import { TaskStatus } from 'src/enums/tasks.enum';
import { Tasks } from './task.modal';

@Injectable()
export class TasksService {

    // constructor(
    //     @InjectRepository(TaskRepository)
    //     private taskRepository: TaskRepository
    // ) { }

    // async getTaskById(id: number): Promise<Task> {
    //     const found = await this.taskRepository.findOne(id);

    //     if (!found) {
    //         throw new NotFoundException('Task with Id: ' + id + ' not found');
    //     }
    //     return found;
    // }

    // async createTask(createTaskDto: TasksModuleDto):Promise<Task> {
    //     const { title, describe, taskType } = createTaskDto;
    //     const task = new Task();
    //     task.title = title;
    //     task.describe = describe;
    //     task.taskType = taskType;
    //     task.status=TaskStatus.ACTIVE;
    //     await task.save();
    //     return task;
    // }

    private tasks = [];

    getAllTasks() {
        return this.tasks;
    }

    createTask(inTaskDto: TasksModuleDto): Tasks {
        const { title, describe, taskType } = inTaskDto;
        const task: Tasks = {
            id: uuid(),
            title: title,
            describe: describe,
            taskType: taskType,
            status: TaskStatus.ACTIVE,
        }
        this.tasks.push(task);
        return task;
    }

    deleteTaskById(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks;
    }
    getTaskById(id: string){
        return this.tasks.find(task=> task.id === id);
    }
    updateTask(id: string, status: TaskStatus): Task{
        const task = this.getTaskById(id);
        task.status = TaskStatus.INACTIVE;
        return task;
    }
}
