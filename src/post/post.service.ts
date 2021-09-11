import { Injectable } from '@nestjs/common';
import { CreatePostDTO, EditPostDTO } from './dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>
  ){}
  getMany(){
    return this.postRepo.find()
  }
  getOne(id:number){
    return this.postRepo.findOne(id)
  }
  createOne(body:CreatePostDTO){
    const newPost = this.postRepo.create(body)
    return this.postRepo.save(newPost);
  }
  async editOne(id:number,body:EditPostDTO){
    const post= await this.postRepo.findOne(id)
    post.content= body.content
    return this.postRepo.save(post)
  }
  deleteOne(id:number){
    this.postRepo.delete(id)
    return true
  }

}
