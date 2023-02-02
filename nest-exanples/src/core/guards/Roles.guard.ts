import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // if there is no roles attached to this route handler
    if (!roles) {
      return true;
    }
    // if there is a role attached, get the role from the request object
    const request = context.switchToHttp().getRequest();
    // of course in real world, we attached the user to request object using custom Auth Guard
    const user = request?.user;
    return this.matchRoles(roles, user?.roles);
  }

  matchRoles(roles: string[], userRole: string): boolean {
    return roles.includes(userRole);
  }
}
// What we want to do, is get the role from the metadata that we attached to the route handler
// And then compare it with the role from the incoming request
// in order to do that we get the role from metadata using Reflector class
