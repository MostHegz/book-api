import { Injectable, Logger } from '@nestjs/common';
import { BookRepository } from '../../repository/book.repository';
import { Book } from '../../entity';
import { CreateBookRequest, GetBooksRequest } from './dto/request';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { BookResponse, GetBooksResponse } from './dto/response';

@Injectable()
export class BookService {
	private logger = new Logger(BookService.name);
	constructor(
		private readonly bookRepository: BookRepository,
		@InjectMapper() private readonly mapper: Mapper,
	) {}

	async create(createBookRequest: CreateBookRequest): Promise<BookResponse> {
		this.logger.log(`Creating book with ${createBookRequest}`);
		const book = this.mapper.map(createBookRequest, CreateBookRequest, Book);
		const createdBook = await this.bookRepository.save(book);
		const bookResponse = this.mapper.map(createdBook, Book, BookResponse);
		return bookResponse;
	}

	async find(query: GetBooksRequest): Promise<GetBooksResponse> {
		const [books, count] = await this.bookRepository.getMany(query.searchTerm);
		const response = new GetBooksResponse();
		response.data = this.mapper.mapArray(books, Book, BookResponse);
		response.totalCount = count;
		response.currentPage = query.pageNumber;
		return response;
	}
}
