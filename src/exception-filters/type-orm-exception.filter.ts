import { Catch, ExceptionFilter, Logger, ArgumentsHost } from '@nestjs/common';
import { TypeORMError } from 'typeorm';
import { Response } from 'express';

@Catch(TypeORMError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
	logger = new Logger(TypeOrmExceptionFilter.name);
	catch(exception: TypeORMError, host: ArgumentsHost): void {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		this.logger.error(`Exception caught: ${exception.message}`, exception.stack);

		const responseBody = {
			statusCode: 409,
			message: 'Entity violates constraint',
			path: request.url,
		};

		response.status(409).json(responseBody);
	}
}
