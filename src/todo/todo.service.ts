import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>
    ){}
    findAll(){
        return this.todoRepository.find();
    }
    create(task:string){
        const todo = new Todo()
        todo.task = task;
        return this.todoRepository.save(todo);
    }
    async update(id: number, isCompleted: boolean){
        const todo = await this.todoRepository.findOne({where:{id: id}})
        if(todo){
            todo.isCompleted = isCompleted;
            return this.todoRepository.save(todo);
        }
        return null;
    }
    delete(id:number){
        return this.todoRepository.delete(id).then(() => {})
    }
}