import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from 'src/core/Middlewares/Logger.middleware';
import { UserController } from './user.controller';
import { UserServices } from './user.service';
import { GuardMiddleware } from '../../core/Middlewares/Guard.middleware';

@Module({
  controllers: [UserController],
  providers: [UserServices],
  // imports: [PostModule],
}) // implementing NestModule interface in order to implement a middleware
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, GuardMiddleware) // which middleware you want to apply
      .forRoutes({ path: 'users', method: RequestMethod.GET }); // for which routes
  }
}

// Configure function, to add the configurations such as what is the middleware that we want to apply.
// And for which routes.
