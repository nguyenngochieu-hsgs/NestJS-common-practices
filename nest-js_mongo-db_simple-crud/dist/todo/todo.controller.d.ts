import { TodoCreateDto } from './dtos/todo.create.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(response: any, todo: TodoCreateDto): Promise<any>;
    getAll(response: any): Promise<any>;
    getById(response: any, id: string): Promise<any>;
    update(response: any, id: string, todo: TodoCreateDto): Promise<any>;
    delete(response: any, id: string): Promise<any>;
}
