import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// Example for class middleware
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.baseUrl);
    next();
  }
}
// Also You can make it simpler by using functional Middleware
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
}
