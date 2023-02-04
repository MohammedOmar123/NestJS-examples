import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/HttpExceptionFilter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  // cannot inject dependencies since this is done outside the context of any module,
  // so you have to create an instance from HttpExceptionFilter
  // OR  you can register a global-scoped filter directly from any module
  // Go the App Module file now
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(8000);
}
bootstrap();
