import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, EntityRepository } from "typeorm";
import { TaskStatus, TaskType } from "src/enums/tasks.enum";

@Entity()
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    describe: string;

    @Column()
    taskType: TaskType;

    @Column()
    status: TaskStatus;
}
