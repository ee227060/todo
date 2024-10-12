import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.njk') // 'index.njk' をレンダリング
  getHello() {
    return {
      task: '1st todo',
    }; // ビューに渡すデータがあればここに記述
  }
}
