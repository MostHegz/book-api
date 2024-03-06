import { Mapper, MappingProfile, autoMap, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Book } from '../../../../entity';
import { BookResponse } from '../response';
import { CreateBookRequest } from '../request';

@Injectable()
export class BookProfile extends AutomapperProfile {
	constructor(@InjectMapper() mapper: Mapper) {
		super(mapper);
	}

	override get profile(): MappingProfile {
		return (mapper) => {
			createMap(
				mapper,
				Book,
				BookResponse,
				autoMap('id'),
				autoMap('authorName'),
				autoMap('title'),
				autoMap('publicationDate'),
			);
			createMap(mapper, CreateBookRequest, Book, autoMap('authorName'), autoMap('title'), autoMap('publicationDate'));
		};
	}
}
