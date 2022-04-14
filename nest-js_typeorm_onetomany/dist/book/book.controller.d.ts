import { BookService } from './book.service';
import CreateBookDto from './dtos/create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(bookDetails: CreateBookDto): Promise<import("./book.entity").Book>;
}
