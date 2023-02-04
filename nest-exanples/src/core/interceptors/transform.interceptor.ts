import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // try this path for example in the postman
    // http://localhost:8000/api/v1/
    return next.handle().pipe(map((data) => ({ data, timestamp: Date.now() })));
  }
}
// In this example, the map operator is used to transform the original response data for example, adding a new property.

//  For example, imagine we need to transform each occurrence of a null value to an empty string ''.
// We can do it using one line of code and bind the interceptor globally so that it will automatically be used by each registered handler.
// https://docs.nestjs.com/interceptors#response-mapping
