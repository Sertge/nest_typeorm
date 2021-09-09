import { Body, Controller, Get, Param, Post } from '@nestjs/common';

const losPosts=[{id:1,content:"texto bonito"},{id:2,content:"otro texto"}]

@Controller('post')
export class PostController {
  @Get()
  getAll(){
    return losPosts
  }
  @Get(':id')
  getOne(@Param('id') id:string){
    return losPosts.filter((el)=>el.id==parseInt(id))
  }
  @Post()
  postOne(@Body() body:{id: number;content: string;}){
    return [losPosts,body]
}
}
