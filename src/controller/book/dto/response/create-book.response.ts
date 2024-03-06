import { ApiProperty } from '@nestjs/swagger';

export class BookResponse {
	@ApiProperty()
	id: number;

	@ApiProperty()
	title: string;

	@ApiProperty()
	authorName: string;

	@ApiProperty()
	publicationDate: Date;
}
