import { UserService } from './user.service';
import CreateUserDto from './dtos/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    postUser(user: CreateUserDto): Promise<import("./user.entity").User>;
    getAll(): Promise<import("./user.entity").User[]>;
    getBooks(userID: number): Promise<import("../book/book.entity").Book[]>;
}
