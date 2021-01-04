import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('double')
  views: number;

  @Column()
  isPublished: boolean;

  constructor(name: string, description: string, filename: string, views: number, isPublished: boolean) {
    this.name = name;
    this.description = description;
    this.filename = filename;
    this.views = views;
    this.isPublished = isPublished;
  }
}