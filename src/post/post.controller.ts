import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDTO } from './dto';

const losPosts = [
  { id: 1, content: 'texto bonito', category: 'TEXT' },
  { id: 2, content: 'otro texto', category: 'BONITO' },
];

@Controller('post')
export class PostController {
  @Get()
  getAll() {
    return losPosts;
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return losPosts.filter((el) => el.id == parseInt(id));
  }
  @Post()
  postOne(@Body() body: CreatePostDTO) {
    return [...losPosts, body];
  }
}
