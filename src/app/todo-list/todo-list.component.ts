import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo;
  @Output() getTodos = new EventEmitter();

  constructor(private todoService: TodoService) { }
  tagValue: string;

  remove(item, todo) {
    this.todo.tags.splice(item, 1);
    this.todoService.updateTodo(todo.$key,todo);
  }

  add(value, todo) {
    this.todo.tags.push(value);
    this.tagValue = "";
    this.todoService.updateTodo(todo.$key, todo);
  }

  toggle(todo) {
    todo.checked = !todo.checked;
    this.todoService.updateTodo(todo.$key, todo);
  }

  ngOnInit() {
  }

}
