import { Prisma } from '@prisma/client';

export class User implements Prisma.UsersCreateInput {
  username: string;
  password: string;
  email: string;
}
