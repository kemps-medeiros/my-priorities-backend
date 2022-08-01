import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  app.enableCors();
  app.setGlobalPrefix('/myprioritiesapp');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(port);

  app.useLogger(new Logger());
  Logger.log(`Server started on host: http://localhost:${port};`);
}
bootstrap();
