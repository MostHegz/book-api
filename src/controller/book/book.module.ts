import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { RepositoryModule } from '../../repository/repository.module';
import { BookProfile } from './dto/profiles/book-profile';

@Module({
	imports: [RepositoryModule],
	providers: [BookService, BookProfile],
	controllers: [BookController],
})
export class BookModule {}
