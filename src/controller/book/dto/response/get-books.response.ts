import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponse } from '../../../../common/response';
import { BookResponse } from './create-book.response';

export class GetBooksResponse extends PaginatedResponse<BookResponse> {
	@ApiProperty({ type: [BookResponse] })
	data: BookResponse[];
}
