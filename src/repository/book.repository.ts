import { DataSource, Repository } from 'typeorm';
import { Book } from '../entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository extends Repository<Book> {
	constructor(dataSource: DataSource) {
		super(Book, dataSource.createEntityManager());
	}

	async getMany(searchTerm?: string, skip?: number, limit?: number): Promise<[Book[], number]> {
		const query = this.createQueryBuilder('book');
		if (searchTerm) {
			query.where('book.title LIKE :searchTerm', { searchTerm: `%${searchTerm}%` });
		}

		if (skip) {
			query.skip(skip);
		}

		if (limit) {
			query.take(limit);
		}
		return query.getManyAndCount();
	}
}
