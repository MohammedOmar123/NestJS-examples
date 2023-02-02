import { Injectable } from '@nestjs/common';
import { PostServices } from '../Posts/post.service';

@Injectable()
export class UserServices {
  constructor(private postServices: PostServices) {}
  findAll() {
    return this.postServices.findAll();
  }
}
