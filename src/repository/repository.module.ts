import { Module } from '@nestjs/common';
import { BookRepository } from './book.repository';

@Module({
	providers: [BookRepository],
	exports: [BookRepository],
})
export class RepositoryModule {}
