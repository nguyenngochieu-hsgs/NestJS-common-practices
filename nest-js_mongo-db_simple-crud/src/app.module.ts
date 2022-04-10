import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb://localhost:27017/NestJS_MongoDB_Simple_CRUD')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
