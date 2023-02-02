import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class GuardMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // simulating to GuardMiddleware
    if (req.httpVersionMajor >= 1) {
      next();
    } else {
      res.send('Bad request');
    }
  }
}
