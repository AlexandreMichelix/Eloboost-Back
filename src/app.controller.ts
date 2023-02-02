import { Controller, Get, Post, Body, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  async signupUser(
    @Body()
    userData: {
      username: string;
      email: string;
      hashedPassword: string;
    },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get('user')
  async getUsers(): Promise<User[]> {
    return this.userService.users({});
  }

  @Patch('user')
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

  @Delete('user')
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
