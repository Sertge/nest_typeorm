import { PostCategory } from "../enums";
export class CreatePostDTO {
  id:number;
  content:string;
  category:PostCategory
}