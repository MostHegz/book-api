import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateBookRequest {
	@ApiProperty()
	@IsNotEmpty()
	@MaxLength(500)
	title: string;

	@ApiProperty()
	@IsNotEmpty()
	@MaxLength(500)
	authorName: string;

	@ApiProperty()
	@IsDate()
	@Type(() => Date)
	publicationDate: Date;
}
