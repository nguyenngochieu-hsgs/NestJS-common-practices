import { UserService } from './../user/user.service';
import { Book } from 'src/book/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import CreateBookDto from './dtos/create-book.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book) private bookRepository: Repository<Book>,
        private readonly userService: UserService,
    ) { }
    
    async insert(bookDetails: CreateBookDto) {
        const { name, userID } = bookDetails;
        const book = new Book();
        book.name = name;
        book.user = await this.userService.findById(userID);
        await this.bookRepository.save(book);
        return book;
    }

    async getAllBooks() {
        return await this.bookRepository.find();
    }
}




