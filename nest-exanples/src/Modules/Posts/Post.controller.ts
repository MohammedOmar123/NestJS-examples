import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from 'src/core/interceptors/transform.interceptor';
import { PostServices } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postServices: PostServices) {}
  @UseInterceptors(TransformInterceptor)
  @Get()
  findAll() {
    return this.postServices.findAll();
  }

  @Post()
  create(@Body() dto: any) {
    // this will give internal server, because we want to custom error response
    console.log(dto.message());
    return 'any';
  }
}
