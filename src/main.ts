import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as nunjucks from 'nunjucks';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Nunjucksの設定
  nunjucks.configure(join(__dirname, '..', 'views'), {
    autoescape: true,
    express: app,
  });

  // Nunjucksをテンプレートエンジンとしてセット
  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();