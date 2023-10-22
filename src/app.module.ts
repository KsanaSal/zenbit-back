import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { AuthModule } from './authentication/auth.module';
import { DealsModule } from './Deals/deals.module';

@Module({
  imports: [UsersModule, AuthModule, DealsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
