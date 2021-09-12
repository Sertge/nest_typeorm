import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { PostCategory } from '../enums';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
  
  @CreateDateColumn({type:'timestamp'})
  createdAt:Date;
}
