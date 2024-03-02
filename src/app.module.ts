import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				type: 'sqlite',
				database: 'db/sql',
				entities: [join(__dirname, 'entity/**/*.entity{.ts,.js}')],
				migrations: ['./migrations/**/*.ts'],
				synchronize: false,
				logging: true,
			}),
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
