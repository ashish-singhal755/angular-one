import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksModuleDto } from 'src/dto/tasks.dto';
import { Task } from 'src/entities/task.entity';
import { TaskStatus } from 'src/enums/tasks.enum';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Get("/:id")
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.tasksService.getTaskById(id);
    }


    @Post()
    createTask(@Body() inTaskDto: TasksModuleDto): Promise<Task> {
        return this.tasksService.createTask(inTaskDto);
    }

    @Get("allTask")
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    // @Post()
    // createTask(@Body() inTaskDto: TasksModuleDto) {
    //     if (inTaskDto != null) {
    //         return this.tasksService.createTask(inTaskDto);
    //     } else {
    //         return "something went worng please try again!";
    //     }
    // }

    // @Delete()
    // deleteTaskById(@Body('id') id: string) {
    //     if (id != "") {
    //         return this.tasksService.deleteTaskById(id);
    //     } else {
    //         return "something went worng please try again!";
    //     }
    // }

    // @Patch("/:id/status")
    // updateTask(@Param('id') id: string, @Body('status') status: TaskStatus) {
    //     return this.tasksService.updateTask(id, status);
    // }
}
