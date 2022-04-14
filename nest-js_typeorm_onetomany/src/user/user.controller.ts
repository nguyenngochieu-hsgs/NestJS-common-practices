import { UserService } from './user.service';
import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import CreateUserDto from './dtos/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('post')
    postUser(@Body() user: CreateUserDto) {
        return this.userService.insert(user);
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @Get('books')
    getBooks(@Body('userID', ParseIntPipe) userID: number) {
        return this.userService.getBooksOfUser(userID);
    }
}




