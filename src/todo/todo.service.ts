import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  create(task: string): Promise<Todo> {
    const newTodo = this.todoRepository.create({ task });
    return this.todoRepository.save(newTodo);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }

  async update(id: number, isCompleted: boolean): Promise<void> {
    await this.todoRepository.update(id, { isCompleted });
  }
}
