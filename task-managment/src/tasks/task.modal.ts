import { TaskType, TaskStatus } from "src/enums/tasks.enum";

export interface Tasks{
    id: string;
    title: string,
    describe: string,
    taskType: TaskType,
    status: TaskStatus,
}