import { Controller, Get, Post, Body, Param, Delete, Patch, Res, Render } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  @Render('index.njk')
  async getAllTodos() {
    const todos = await this.todoService.findAll();
     return {
      title: 'ToDoリスト',
      tasks: todos,
    };
  }

  @Post()
  async createTodo(@Body('task') task: string) {
    return this.todoService.create(task);
  }

  @Patch(':id')
  async updateTodo(
      @Param('id') id: number,
      @Body('completed') completed?: boolean,
      @Body('task') task?: string
  ) {
      if (task !== undefined) {
          await this.todoService.update(id, { task });
      } else if (completed !== undefined) {
          await this.todoService.update(id, { isCompleted: completed });
      }
  }
  

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    await this.todoService.remove(id);
  }
}
