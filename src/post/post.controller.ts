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
  getOne(@Param('id', ParseIntPipe) id: number) {
    return losPosts.filter((el) => el.id == id);
  }
  @Post()
  postOne(@Body() body: CreatePostDTO) {
    return [...losPosts, body];
  }
  @Put(':id')
  editOne(@Body() body: EditPostDTO, @Param('id', ParseIntPipe) id: number) {
    return { ...losPosts.filter((el) => el.id == id)[0], ...body };
  }
  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return losPosts.filter((el) => el.id != id);
  }
}
