import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
// in this custom decorator, we want to get the user value in the request object,
// so we need to access the underlying request object,
// to do that we invoked createParamDecorator that takes
// ExecutionContext as an argument which from it we can access the request object
// data is the what we passed when we invoked this decorator
