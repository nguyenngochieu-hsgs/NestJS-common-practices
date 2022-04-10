import { TodoCreateDto } from './dtos/todo.create.dto';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(todo: TodoCreateDto): Promise<Todo>;
    readAll(): Promise<Todo[]>;
    readById(id: string): Promise<Todo>;
    update(id: string, todo: TodoCreateDto): Promise<Todo>;
    delete(id: string): Promise<Todo>;
}
