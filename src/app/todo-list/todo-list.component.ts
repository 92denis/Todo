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

  remove(item) {
    this.todo.tags.splice(item, 1);
    this.todoService.updateTodo(this.todo);
  }

  add(value) {
    this.todo.tags.push(value);
    this.tagValue = "";
    this.todoService.updateTodo(this.todo);
  }

  todos() {
    this.getTodos.emit();
  }

  toggle(todo: Todo) {
    todo.checked = !todo.checked;
    this.todoService.updateTodo(todo);
    this.todos();
  }

  ngOnInit() {
  }

}
