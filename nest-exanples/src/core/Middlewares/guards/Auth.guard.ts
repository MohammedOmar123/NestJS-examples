/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  //every guard must implement a canActivate() function, 
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
  // just for simulating validation process
  validateRequest(request: Request): boolean {
    if (request) {
      console.log("valid request");
      return true;
    } else {
      return false;
    }
  }
}
