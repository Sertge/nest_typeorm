import { Injectable } from '@nestjs/common';
import { CreatePostDTO, EditPostDTO } from './dto';

@Injectable()
export class PostService {

  getMany(){
    return {ok:'getMany'}
  }
  getOne(id:number){
    return {ok:'getOne'}
  }
  createOne(body:CreatePostDTO){
    return {ok:'createOne'}
  }
  editOne(id:number,body:EditPostDTO){
    return {ok:'editOne'}
  }
  deleteOne(id:number){
    return {ok:'deleteOne'}
  }

}
