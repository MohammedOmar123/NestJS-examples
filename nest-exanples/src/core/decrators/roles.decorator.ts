import { SetMetadata } from '@nestjs/common';
// Here we created a custom decorator which is a very simple function
// that takes array of string as an argument and pass it to SetMetadata function

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// Nest provides the ability to attach custom metadata to route handlers
// through the @SetMetadata() decorator. This metadata supplies our missing role data,
//  which a smart guard needs to make decisions. Let's take a look at using @SetMetadata():
