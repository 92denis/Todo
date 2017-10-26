import { Component,Input, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
 @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
