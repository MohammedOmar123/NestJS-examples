import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/core/decrators/roles.decorator';
import { AuthGuard } from 'src/core/guards/Auth.guard';
import { RolesGuard } from 'src/core/guards/Roles.guard';
import { UserServices } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userServices: UserServices) {}
  @Get()
  findAll(): string {
    return this.userServices.findAll();
  }
  // As you see here we passed a class and leaving responsibility for instantiation to the framework and enabling dependency injection
  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get('auth')
  getAdmin() {
    return 'this is an admin';
  }
}
