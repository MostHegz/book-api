import { Body, Controller, Logger, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookRequest } from './dto/request/create-book.request';
import { ApiResponse } from '@nestjs/swagger';
import { CreateBookResponse } from './dto/response';

@Controller('book')
export class BookController {
	private logger = new Logger(BookController.name);
	constructor(private readonly bookService: BookService) {}

	@Post()
	@ApiResponse({ status: 201, description: 'The book was created successfully', type: CreateBookResponse })
	@ApiResponse({ status: 409, description: 'The book name already exists' })
	async create(@Body() body: CreateBookRequest): Promise<CreateBookResponse> {
		this.logger.log(`POST /book with ${body}`);
		return this.bookService.create(body);
	}
}
