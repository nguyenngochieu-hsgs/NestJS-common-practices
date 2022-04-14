import { BookService } from './book.service';
import { Body, Controller, Post } from '@nestjs/common';
import CreateBookDto from './dtos/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { }

    @Post('')
    async createBook(@Body() bookDetails: CreateBookDto) {
        return await this.bookService.insert(bookDetails);
    }
}




