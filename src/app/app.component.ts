import { Component } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password: string;
  email: string;
  constructor(public todoService: TodoService) { }

  signup() {
    this.todoService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.todoService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.todoService.logout();
  }

}
