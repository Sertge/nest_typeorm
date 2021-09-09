import { PostCategory } from '../enums';
import { IsEnum, IsNumber, IsString } from 'class-validator';
export class CreatePostDTO {
  @IsNumber()
  id: number;
  @IsString()
  content: string;
  @IsEnum(PostCategory)
  category: PostCategory;
}
