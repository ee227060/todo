import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as nunjucks from 'nunjucks';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewPath = join(__dirname, '..', 'view');
  console.log('View Path:', viewPath); // デバッグ用にパスを表示

  nunjucks.configure(viewPath, {
    autoescape: true,
    express: app,
  });

  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();