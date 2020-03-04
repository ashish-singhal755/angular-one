import { Controller, Get, Logger } from '@nestjs/common';
import { NewtaskService } from './newtask.service';

@Controller('newtask')
export class NewtaskController {
    constructor(private readonly newtaskService: NewtaskService) { }

    @Get()
    getAllTasks(){  
        return this.newtaskService.getAllTasks();
    }
}
