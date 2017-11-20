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
    this.user = firebaseAuth.authState;
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.todos = this.af.list(`/users/${user.uid}`) as FirebaseListObservable<Todo[]>;
      }
    });
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    return this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    return this.todos.update(todo.$key, todo);
  }

  deleteTodo(id: string) {
    return this.todos.remove(id);
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password).then((user) => {
      }).catch(error => alert(error));
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password).then((user) => {

      }).catch(error => alert(error));
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
