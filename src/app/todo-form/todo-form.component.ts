import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todos: Todo[];
  newTodo: Todo;
  nameSearch: string;
  minDate: any;

  constructor(private todoService: TodoService) {
    this.newTodo = new Todo(null, null, false, []);
    this.nameSearch = '';
    this.minDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + 'T' + new Date().getHours() + ':' + new Date().getMinutes();

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
