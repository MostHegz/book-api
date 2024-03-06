import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { PaginatedRequest } from '../../../../common/request';

export class GetBooksRequest extends PaginatedRequest {
	@ApiProperty({
		required: false,
	})
	@IsOptional()
	@IsNotEmpty()
	searchTerm?: string;
}
