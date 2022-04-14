import { User } from 'src/user/user.entity';
import { Injectable } from '@nestjs/common';
import CreateUserDto from './dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async insert(userDetails: CreateUserDto) {
        const user = this.userRepository.create(userDetails);
        await this.userRepository.save(user);
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async getBooksOfUser(userID: number) {
        const user = await this.userRepository.findOne({
            where: { id: userID },
            relations: ['books'],

        });
        return user.books;
    }

    async findById(userID: number) {
        const user = await this.userRepository.findOne({
            where: { id: userID },
        });
        return user;
    }
}




