/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, UseInterceptors, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { RuleGuard } from 'src/guards/role.guard';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from 'src/guards/auth.guard';

@Roles(Role.Adimin)
@UseGuards(AuthGuard, RuleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

}
