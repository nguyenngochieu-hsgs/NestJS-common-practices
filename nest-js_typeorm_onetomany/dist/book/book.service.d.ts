import { UserService } from './../user/user.service';
import { Book } from 'src/book/book.entity';
import CreateBookDto from './dtos/create-book.dto';
import { Repository } from 'typeorm';
export declare class BookService {
    private bookRepository;
    private readonly userService;
    constructor(bookRepository: Repository<Book>, userService: UserService);
    insert(bookDetails: CreateBookDto): Promise<Book>;
    getAllBooks(): Promise<Book[]>;
}
