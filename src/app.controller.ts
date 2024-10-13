import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { title } from 'process';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return this.appService.getHello();
  }
}
