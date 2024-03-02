import { ApiProperty } from '@nestjs/swagger';

export abstract class PaginatedResponse<T> {
	abstract data: T[];

	@ApiProperty()
	currentPage: number;

	@ApiProperty()
	totalCount: number;
}
