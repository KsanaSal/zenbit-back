import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { DealsService } from './deals.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DealsController],
  providers: [DealsService, PrismaService],
})
export class DealsModule {}
