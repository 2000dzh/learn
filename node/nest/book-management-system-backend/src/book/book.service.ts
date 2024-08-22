import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from 'src/db/db.service';
import { Book } from './entities/book.entity';

function randomNum() {
  return Math.floor(Math.random() * 1000000);
}

@Injectable()
export class BookService {
  @Inject()
  dbService: DbService;

  async list(name: string) {
    let books: Book[] = await this.dbService.read();

    if (name) {
      books = books.filter((item) => {
        if (typeof item.name === 'string') {
          return item.name.toLowerCase().includes(name.toLowerCase());
        }
        return false;
      });
    }

    return books;
  }

  async findById(id: number) {
    const books: Book[] = await this.dbService.read();

    return books.find((book) => book.id === id);
  }

  async create(createBookDto: CreateBookDto) {
    const books: Book[] = await this.dbService.read();

    const book = new Book();
    book.id = randomNum();
    book.author = createBookDto.author;
    book.name = createBookDto.name;
    book.description = createBookDto.description;
    book.cover = createBookDto.cover;

    books.push(book);

    await this.dbService.write(books);

    return book;
  }

  async update(updateBookDto: UpdateBookDto) {
    if (!updateBookDto.id) {
      throw new BadRequestException('书籍不存在');
    }

    const books: Book[] = await this.dbService.read();

    const foundUser = books.find((item) => item.id == updateBookDto.id);

    if (!foundUser) {
      throw new BadRequestException('书籍不存在');
    }

    foundUser.author = updateBookDto.author;
    foundUser.name = updateBookDto.name;
    foundUser.description = updateBookDto.description;
    foundUser.cover = updateBookDto.cover;

    await this.dbService.write(books);

    return foundUser;
  }

  async delete(id: number) {
    if (!id) {
      throw new BadRequestException('书籍不存在');
    }

    const books: Book[] = await this.dbService.read();

    const index = books.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new BadRequestException('书籍不存在');
    }

    books.splice(index, 1);

    await this.dbService.write(books);

    return '删除成功';
  }
}
