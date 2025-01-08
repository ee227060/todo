import { Controller, Get, Render ,Redirect} from '@nestjs/common';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(private readonly TodoService: TodoService) {}

  @Get()
  @Redirect('todo')
  getRoot(){}
}
