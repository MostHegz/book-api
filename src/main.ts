import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EnvironmentVariablesConstants, RoutesConstants, SwaggerConstants } from './constant';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe({ transform: true }));

	const config = new DocumentBuilder().setTitle(SwaggerConstants.API_TITLE).build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup(`${RoutesConstants.SWAGGER}`, app, document);

	// TODO: Enable cors only for trusted frontend urls
	app.enableCors();
	const configService = app.get(ConfigService);
	const logger = new Logger('bootstrap');

	logger.log(
		`Application built and listening on ${configService.getOrThrow(
			EnvironmentVariablesConstants.BASE_URL,
		)}:${configService.getOrThrow(EnvironmentVariablesConstants.PORT)}`,
	);
	logger.log(
		`Swagger built on ${configService.getOrThrow(EnvironmentVariablesConstants.BASE_URL)}:${configService.getOrThrow(
			EnvironmentVariablesConstants.PORT,
		)}/${RoutesConstants.SWAGGER}`,
	);

	await app.listen(configService.getOrThrow(EnvironmentVariablesConstants.PORT));
}

bootstrap();
