import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBookTable1709385724446 implements MigrationInterface {
	name = 'CreateBookTable1709385724446';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "book" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "title" varchar(500) NOT NULL,
                "authorName" varchar(500) NOT NULL,
                "publicationDate" datetime NOT NULL,
                CONSTRAINT "UQ_c10a44a29ef231062f22b1b7ac5" UNIQUE ("title")
            )`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "book"`);
	}
}
