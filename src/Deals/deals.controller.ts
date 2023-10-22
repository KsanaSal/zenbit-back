import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DealsService } from './deals.service';
import { CreateDealDto } from './deals.dto';

@Controller('/deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}
  @Get('/all')
  async getAllUser(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.dealsService.getAllDeals();
      return response.status(200).json({
        status: 200,
        message: 'Successfully fetch data!',
        data: result,
      });
    } catch (error) {
      return response.status(500).json({
        status: 500,
        message: 'Internal Server Error44!',
        data: error,
      });
    }
  }

  @Post('/create')
  async createDeal(
    @Req() request: Request,
    @Res() response: Response,
    @Body() createDealDto: CreateDealDto,
  ): Promise<any> {
    try {
      //   createDealDto.userId = 1;

      const result = await this.dealsService.createDeal(createDealDto);
      return response.status(201).json({
        status: 201,
        message: 'Successfully created a deal!',
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
