import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity("tasks")
export class NewTask extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task: string;

    @Column()
    status: number;

    @Column()
    created_at: Date;

}