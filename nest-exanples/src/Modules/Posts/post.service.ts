import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PostServices {
  findAll() {
    throw new BadRequestException();
    return { message: 'Hello world from post service' };
  }
}
