import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor() { }

  private todos: Todo[] = [{
    name: "Hello",
    checked: false,
    date: new Date(),
    tags: ['Важное']
  }];

  getTodos(): Todo[] {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (todos === null || todos === undefined) {
      todos = this.todos;
    }
    return todos;
  }

  addTodo(todo: Todo) {
    let todos = this.getTodos()
    todos.push(new Todo(todo.name, todo.date, todo.checked, todo.tags))
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
