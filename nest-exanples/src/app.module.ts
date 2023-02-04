import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/Users/user.module';
import { PostModule } from './Modules/Posts/Post.Module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './core/HttpExceptionFilter/http-exception.filter';
import { AllExceptionsFilter } from './core/HttpExceptionFilter/AllExceptions.filter';
import { TransformInterceptor } from './core/interceptors/transform.interceptor';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
// You can add as many filters with this technique as needed; simply add each to the providers array.
// we used this approach to perform dependency injection for the filter
// note that regardless of the module where this construction is employed, the filter is, in fact, global
// which means that if I add this filter provider to any module instead of app will be the same thing
