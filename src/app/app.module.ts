import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
