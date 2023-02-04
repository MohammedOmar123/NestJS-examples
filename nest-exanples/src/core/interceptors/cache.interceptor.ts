import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    // is there data in the Cache return it, else go and to route handler
    if (isCached) {
      return of([]);
    }
    // when you invoke handle() the route handler implementation will be invoked.
    return next.handle();
  }
}
// this just is simple example to  demonstrates the main concept. without any validations.
