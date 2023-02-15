import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { PostServices } from '../Posts/post.service';
import { Cache } from 'cache-manager';
@Injectable()
export class UserServices {
  constructor(
    private postServices: PostServices,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  findAll() {
    return this.postServices.findAll();
  }
  async createUser() {
    // 1- store it in the database here
  }

  async findUser() {
    const value = await this.cacheManager.get('userDetails');
    // check if the data still in the cache
    console.log(value);
    if (value) {
      console.log(value);
      // return the cached data
      console.log('from cache');
      return value;
    }
    // else
    const data = this.getDataFromDatabase();
    await this.cacheManager.set('userDetails', data, 5); // 100 in seconds
    console.log('from database');
    return data;
  }

  getDataFromDatabase() {
    return { name: 'mohammed', age: 22 };
  }
}
