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

  updateTodo(todo: Todo) {
    return this.todos.update(todo.$key, todo);
  }

  deleteTodo(id: string){
    return this.todos.remove(id);
  }

}
