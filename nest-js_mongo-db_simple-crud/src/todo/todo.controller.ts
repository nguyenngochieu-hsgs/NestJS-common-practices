import { TodoCreateDto } from './dtos/todo.create.dto';
import { TodoService } from './todo.service';
import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res, Delete } from '@nestjs/common';
import { response } from 'express';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    async createTodo(@Res() response, @Body() todo: TodoCreateDto) {
        const newTodo = await this.todoService.create(todo);
        return response.status(HttpStatus.CREATED).json({
            newTodo
        });
    }

    @Get()
    async getAll(@Res() response) {
        const todos = await this.todoService.readAll();
        return response.status(HttpStatus.OK).json({
            todos
        });
    }

    @Get(':id')
    async getById(@Res() response, @Param('id') id: string) {
        const todo = await this.todoService.readById(id);
        return response.status(HttpStatus.OK).json({
            todo
        });
    }

    @Put(':id')
    async update(@Res() response, @Param('id') id: string, @Body() todo: TodoCreateDto) {
        const updateTodo = await this.todoService.update(id, todo);
        return response.status(HttpStatus.OK).json({
            updateTodo
        })
    }

    @Delete(':id')
    async delete(@Res() response, @Param('id') id: string) {

        const deletedBook = await this.todoService.delete(id);
        console.log(deletedBook);
        return response.status(HttpStatus.OK).json({
            deletedBook
        });
    }
}
