import { PostCategory } from '../enums';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { EnumToSTring } from 'src/helpers/enum-to-string';
export class CreatePostDTO {
  @IsNumber()
  id: number;
  @IsString()
  content: string;
  @IsEnum(PostCategory,{
    message:`Valor invalido, los valores correctos son "${EnumToSTring(PostCategory)}"`
  })
  category: PostCategory;
}
