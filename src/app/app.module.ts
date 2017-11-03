import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatIconModule, MatChipsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { TodoService } from './todo.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    SearchPipe
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
    MatCardModule,
    MatDatepickerModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
