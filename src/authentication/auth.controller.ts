import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/loginUser.dto';
import { Request, Response } from 'express';
import { RegisterUsersDto } from './dto/registerUser.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    try {
      const result = await this.authService.login(loginDto);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully login!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error33!',
      });
    }
  }

  @Post('/register')
  async register(
    @Req() request: Request,
    @Res() response: Response,
    @Body() registerDto: RegisterUsersDto,
  ): Promise<any> {
    try {
      const result = await this.authService.register(registerDto);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully register user!',
        result: result,
      });
    } catch (err) {
      console.log(err);
      console.log(err.status, 'status');
      if (err.code === 'P2002' || err.status === 409) {
        console.log('first');
        return response.status(409).json({
          status: 'Error!',
          message: 'Username already exists!',
        });
      }
      return response.status(500).json({
        status: 'Error!',
        statusText: 'Internal Server Error55!',
        message: 'Internal Server Error55!',
        err,
      });
    }
  }
}
