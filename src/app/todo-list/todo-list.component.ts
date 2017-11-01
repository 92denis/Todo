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
   
  todos: Todo[];
  tags: any[];
  tag: any[];

    constructor(private todoService: TodoService) {}
  tagValue: string;
  
  remove(item){
    this.tags.splice(item, 1);
  }
  
  add(value){
    // console.log(value);
    this.tags.push(value);
    this.tagValue = "";
  }
  
  removeByKey(value){
    // console.log(event)
    if(value.length < 1){
      if(this.tags.length > 0){
        this.tags.pop();
      }
    }
  }
  ngOnInit() {
    this.todos  = this.todoService.getTodos();
    console.log(this.todos);
    this.tags = this.todos.map(todo =>todo.tags);
        
  }

}
