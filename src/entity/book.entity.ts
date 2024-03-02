import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 500, unique: true })
	title: string;

	@Column({ length: 500 })
	authorName: string;

	@Column()
	publicationDate: Date;
}
