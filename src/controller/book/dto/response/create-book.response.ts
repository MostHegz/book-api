import { ApiProperty } from '@nestjs/swagger';

export class CreateBookResponse {
	@ApiProperty()
	id: number;

	@ApiProperty()
	title: string;

	@ApiProperty()
	authorName: string;

	@ApiProperty()
	publicationDate: Date;
}
