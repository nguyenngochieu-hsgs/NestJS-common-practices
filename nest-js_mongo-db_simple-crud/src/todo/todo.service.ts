import { TodoCreateDto } from './dtos/todo.create.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

    async create(todo: TodoCreateDto): Promise<Todo> {
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    }

    async readAll(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
    }

    async readById(id: string): Promise<Todo> {
        return await this.todoModel.findById(id).exec();
    }

    async update(id: string, todo: TodoCreateDto): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todo, {new: true}).exec();
    }

    async delete(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndRemove(id);
    }
}
