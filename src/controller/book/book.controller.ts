import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { ApiResponse } from '@nestjs/swagger';
import { BookResponse, GetBooksResponse } from './dto/response';
import { CreateBookRequest, GetBooksRequest } from './dto/request';

@Controller('book')
export class BookController {
	private logger = new Logger(BookController.name);
	constructor(private readonly bookService: BookService) {}

	@Post()
	@ApiResponse({ status: 201, description: 'The book was created successfully', type: BookResponse })
	@ApiResponse({ status: 409, description: 'The book name already exists' })
	async create(@Body() body: CreateBookRequest): Promise<BookResponse> {
		this.logger.log(`POST /book with ${body}`);
		return this.bookService.create(body);
	}

	@Get()
	@ApiResponse({ status: 200, description: 'returns the list of books', type: GetBooksResponse })
	async find(@Query() query: GetBooksRequest): Promise<GetBooksResponse> {
		this.logger.log(`GET /book with ${query}`);
		return this.bookService.find(query);
	}
}
