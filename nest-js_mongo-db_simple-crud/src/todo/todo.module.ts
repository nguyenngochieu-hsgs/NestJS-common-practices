import { Todo, TodoSchema } from './todo.schema';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema
      }
    ])
  ],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
