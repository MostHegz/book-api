import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, Min } from 'class-validator';
import { DefaultValuesConstants } from '../constant';

export class PaginatedRequest {
	@ApiProperty({
		required: false,
	})
	@IsOptional()
	@Min(1)
	@Type(() => Number)
	pageNumber: number = DefaultValuesConstants.DEFAULT_PAGE_NUMBER;

	@ApiProperty({
		required: false,
	})
	@IsOptional()
	@Min(1)
	@Type(() => Number)
	pageSize: number = DefaultValuesConstants.DEFAULT_PAGE_SIZE;
}
