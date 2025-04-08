import { IsEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ message: 'không được để trống' })
  @IsEmpty()
  @Column({ length: 500 })
  name: string;

  @IsString()
  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column({ default: 0 })
  views: number;

  @Column()
  isPublished: boolean;
}
