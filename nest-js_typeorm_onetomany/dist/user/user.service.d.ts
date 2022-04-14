import { User } from 'src/user/user.entity';
import CreateUserDto from './dtos/create-user.dto';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    insert(userDetails: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getBooksOfUser(userID: number): Promise<import("../book/book.entity").Book[]>;
    findById(userID: number): Promise<User>;
}
