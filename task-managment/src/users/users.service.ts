import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repository/user.repo';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) { }

    async getAllUser() {
        const found = await this.userRepository.find();
        console.log("found= " + found);
        if (!found) {
            throw new NotFoundException("No Users");
        }
        return found;
    }

    getUserById(){
        
    }

}
