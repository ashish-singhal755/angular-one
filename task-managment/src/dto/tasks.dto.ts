import { TaskStatus, TaskType } from "src/enums/tasks.enum";

export class TasksModuleDto{
    title: string;
    describe: string;
    taskType: TaskType;
}