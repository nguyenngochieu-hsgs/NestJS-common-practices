import { Book } from 'src/book/book.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), UserModule],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule { }




