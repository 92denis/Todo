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
  completedTodos: Todo[];
  noCompletedTodos: Todo[];

  constructor(private todoService: TodoService) {
    this.newTodo = new Todo();
    this.nameSearch = "";
    this.minDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + 'T' + new Date().getHours() + ':' + new Date().getMinutes();
  }

  addItem() {
    this.todoService.addTodo(this.newTodo);
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.completedTodos = this.todos.filter(todo => todo.checked === true);
      this.noCompletedTodos = this.todos.filter(todo => todo.checked === false);
    })
  }

}
