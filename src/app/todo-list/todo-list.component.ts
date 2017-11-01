import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service'

const COMMA = 188;

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
  }

  add(value) {
    // console.log(value);
    this.todo.tags.push(value);
    this.tagValue = "";
  }

  removeByKey(value) {
    // console.log(event)
    if (value.length < 1) {
      if (this.todo.tags.length > 0) {
        this.todo.tags.pop();
      }
    }
  }
  
  ngOnInit() {
  }

}
