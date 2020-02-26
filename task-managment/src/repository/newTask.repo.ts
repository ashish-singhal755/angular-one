import { Repository, EntityRepository } from "typeorm";

import { NewTask } from "src/entities/newTask.entity";

@EntityRepository(NewTask)
export class NewtaskRepo extends Repository<NewTask>{

}