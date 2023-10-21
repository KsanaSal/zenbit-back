import { PrismaService } from 'src/prisma.service';
import { User } from './users.model';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAllUser(): Promise<User[]> {
    return this.prisma.users.findMany();
  }

  async createUser(data: User): Promise<User> {
    const existing = await this.prisma.users.findUnique({
      where: {
        username: data.username,
      },
    });

    if (existing) {
      throw new ConflictException('username already exists');
    }

    return this.prisma.users.create({
      data,
    });
  }
}
