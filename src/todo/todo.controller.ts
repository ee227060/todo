import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
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
    @Body('completed') completed: boolean,
  ) {
    await this.todoService.update(id, completed);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    await this.todoService.remove(id);
  }
}
