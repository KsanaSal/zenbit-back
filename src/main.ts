import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const cors = {
  //   origin: ['http://localhost:3001', 'https://zenbit-test.vercel.app'],
  //   method: 'GET, POST, HEAD, PUT, PATCH, DELETE, OPTIONS',
  // };
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
