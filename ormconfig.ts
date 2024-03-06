import { DataSource } from 'typeorm';
export default new DataSource({
	type: 'sqlite',
	database: 'db/sql',
	entities: ['./src/entity/**/*.entity{.ts,.js}'],
	migrations: ['./src/migrations/**/*.ts'],
	synchronize: false,
	logging: true,
});
