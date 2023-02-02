import { Controller, Get, Post, Body, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('register')
  async signUpUser(
    @Body()
    userData: {
      username: string;
      email: string;
      hashedPassword: string;
    },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Post('login')
  async Login(): Promise<User> {
    return this.userService.user({});
  }

  @Post('logout')
  async Logout(): Promise<User> {
    return this.userService.user({});
  }

  @Patch('user/{id}')
  async updateUser(
    @Body()
    userData: {
      username: string;
      email: string;
      hashedPassword: string;
    },
  ): Promise<any> {
    // return this.userService.updateUser(userData);
  }

  @Delete('user/{id}')
  async deleteUser(
    @Body()
    userData: {
      username: string;
      email: string;
      hashedPassword: string;
    },
  ): Promise<User> {
    return this.userService.deleteUser(userData);
  }
}
