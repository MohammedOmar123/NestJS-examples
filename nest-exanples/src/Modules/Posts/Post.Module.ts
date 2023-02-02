import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostController } from './Post.controller';
import { PostServices } from './post.service';
import { LoggerMiddleware } from '../../core/Middlewares/Logger.middleware';

// setting this module as global enables you to inject the exported services of this module
// without any need to import this module.
// when a have a module that provides services that are widely used in the application,
// it's better to make it a global instead of importing this module in many places
@Global()
@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostServices],
  exports: [PostServices],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude('posts');
  }
}
