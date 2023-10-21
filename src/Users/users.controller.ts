import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/authentication/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUser(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.userService.getAllUser();
      return response.status(200).json({
        status: 200,
        message: 'Successfully fetch data!',
        data: result,
      });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: 'Internal Server Error!',
        data: error,
      });
    }
  }
}
