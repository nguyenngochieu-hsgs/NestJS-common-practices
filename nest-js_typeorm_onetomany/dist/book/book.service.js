"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const user_service_1 = require("./../user/user.service");
const book_entity_1 = require("./book.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let BookService = class BookService {
    constructor(bookRepository, userService) {
        this.bookRepository = bookRepository;
        this.userService = userService;
    }
    async insert(bookDetails) {
        const { name, userID } = bookDetails;
        const book = new book_entity_1.Book();
        book.name = name;
        book.user = await this.userService.findById(userID);
        await this.bookRepository.save(book);
        return book;
    }
    async getAllBooks() {
        return await this.bookRepository.find();
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map