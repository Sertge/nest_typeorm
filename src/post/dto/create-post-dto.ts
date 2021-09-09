import { PostCategory } from '../enums';
import { IsNumber, IsString } from 'class-validator';
export class CreatePostDTO {
  @IsNumber()
  id: number;
  @IsString()
  content: string;
  @IsString()
  category: PostCategory;
}
