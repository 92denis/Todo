import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service'

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo;
  
  constructor(private todoService: TodoService) { }
  tagValue: string;

  remove(item) {
    this.todo.tags.splice(item, 1);
    this.todoService.updateTodo(this.todo);
  }

  add(value) {
    if (!this.todo.tags){ this.todo.tags = []}
    this.todo.tags.push(value);
    this.tagValue = "";
    this.todoService.updateTodo(this.todo);
  }

  toggle(todo) {
    todo.checked = !todo.checked;
    this.todoService.updateTodo(todo);
  }

  ngOnInit() {
  }

}
