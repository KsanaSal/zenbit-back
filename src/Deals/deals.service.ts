import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { Deals } from './deals.model';
import { CreateDealDto } from './deals.dto';

@Injectable()
export class DealsService {
  constructor(private prisma: PrismaService) {}

  async getAllDeals(): Promise<Deals[]> {
    return this.prisma.deals.findMany();
  }

  async createDeal(createDealDto: CreateDealDto) {
    const { userId, ...dealData } = createDealDto;

    return this.prisma.deals.create({
      data: {
        Users: { connect: { id: userId } },
        ...dealData,
      },
    });
  }
}
