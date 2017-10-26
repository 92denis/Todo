import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  constructor() { }

  private todos: Todo[] = [{
    name: "Hello world",
    checked: false,
    date: new Date()
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
    todos.push(new Todo(todo.name, todo.date, todo.checked))
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
