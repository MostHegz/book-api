import { DataSource, Repository } from 'typeorm';
import { Book } from '../entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends Repository<Book> {
	constructor(dataSource: DataSource) {
		super(Book, dataSource.createEntityManager());
	}
}
