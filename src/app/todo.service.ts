import { Injectable } from '@angular/core';
import { Todo } from './todo';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  todos: FirebaseListObservable<any>;
  todo: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) {
    this.todos = this.af.list('/todos') as FirebaseListObservable<Todo[]>;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    return this.todos.push(todo)
  }

  updateTodo(id, todo) {
    return this.todos.update(id, todo);
  }

}
