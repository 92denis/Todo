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

  constructor(private todoService: TodoService) { }

  getTodos(): void {
    this.todos = this.todoService.getTodos();

  }

  ngOnInit() {
    this.getTodos();
  }

}
