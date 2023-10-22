import { Prisma } from '@prisma/client';

export class Deals implements Prisma.DealsCreateManyInput {
  image: string;
  title: string;
  price: number;
  yield: any;
  sold: number;
  tiket: number;
  daysLeft: number;
  usersId: number;
}
