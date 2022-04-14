import { BookModule } from './../book/book.module';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => BookModule)],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule { }




