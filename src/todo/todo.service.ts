import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,  // Todoエンティティに基づくリポジトリ
  ) {}

  // データベースからすべてのTodoリストを取得する
  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();  // TypeORM のリポジトリメソッドを使用してデータ取得
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
  async update(id: number, updateData: { task?: string; isCompleted?: boolean }) {
    const todo = await this.findOne(id); // IDでタスクを見つける
    // タスクの内容を更新
    if (updateData.task !== undefined) {
        todo.task = updateData.task;
    }
    // 完了ステータスを更新
    if (updateData.isCompleted !== undefined) {
        todo.isCompleted = updateData.isCompleted;
    }
    return await this.todoRepository.save(todo); // 更新を保存
}

}
