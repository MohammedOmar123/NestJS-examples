import { Injectable } from '@nestjs/common';

@Injectable()
export class PostServices {
  findAll() {
    return 'Hello world from post service class';
  }
}
