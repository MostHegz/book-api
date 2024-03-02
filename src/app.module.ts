import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { RepositoryModule } from './repository/repository.module';
import { BookModule } from './controller/book/book.module';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmExceptionFilter } from './exception-filters/type-orm-exception.filter';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				type: 'sqlite',
				database: 'db/sql',
				entities: [join(__dirname, 'entity/**/*.entity{.ts,.js}')],
				migrations: [join(__dirname, 'migrations/**/*.ts')],
				synchronize: false,
				logging: true,
			}),
		}),
		RepositoryModule,
		BookModule,
		AutomapperModule.forRoot({
			strategyInitializer: classes(),
		}),
	],
	controllers: [],
	providers: [
		{
			provide: APP_FILTER,
			useClass: TypeOrmExceptionFilter,
		},
	],
})
export class AppModule {}
