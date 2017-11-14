import { Injectable } from '@angular/core';
import { Todo } from './todo';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  user: Observable<firebase.User>;
  todos: FirebaseListObservable<any>;
  todo: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
    this.todos = this.af.list('/todos') as FirebaseListObservable<Todo[]>;
    this.user = firebaseAuth.authState;
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

  deleteTodo(id: string) {
    return this.todos.remove(id);
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}
