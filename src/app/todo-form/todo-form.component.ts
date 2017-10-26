import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service'

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todos: Todo[];
  newTodo: Todo;

  constructor(private todoService: TodoService) {
    this.newTodo = new Todo(null, null, false);
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();

  }

  addItem() {
    this.todoService.addTodo(this.newTodo);
    this.getTodos();
  }

  ngOnInit() {
    this.getTodos();
  }

}
