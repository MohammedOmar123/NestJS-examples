import { Controller, Get } from '@nestjs/common';
import { PostServices } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private postServices: PostServices) {}
  @Get()
  findAll() {
    return this.postServices.findAll();
  }
}
