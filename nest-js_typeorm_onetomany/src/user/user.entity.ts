import { Book } from 'src/book/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ unique: true })
    public name: string;

    @OneToMany(() => Book, (book: Book) => book.user)
    public books: Book[];
}




