import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDTO, EditPostDTO } from './dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService:PostService){}
  @Get()
  getAll() {
    return this.postService.getMany()
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.getOne(id)
  }
  @Post()
  postOne(@Body() body: CreatePostDTO) {
    return this.postService.createOne(body)
  }
  @Put(':id')
  editOne(@Body() body: EditPostDTO, @Param('id', ParseIntPipe) id: number) {
    return this.postService.editOne(id,body)
  }
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.postService.deleteOne(id)
  }
}
