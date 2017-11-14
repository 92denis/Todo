import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatExpansionModule, MatIconModule, MatChipsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { TodoService } from './todo.service';
import { SearchPipe } from './search.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

export const сonfig  = {
  apiKey: "AIzaSyCSF9bF9hKFQuMi2b3fNHBFYsS5Qa3EbQc",
  authDomain: "todo-1c9a5.firebaseapp.com",
  databaseURL: "https://todo-1c9a5.firebaseio.com",
  projectId: "todo-1c9a5",
  storageBucket: "todo-1c9a5.appspot.com",
  messagingSenderId: "642484543969"
};

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
    AngularFireModule.initializeApp(сonfig),
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [AngularFireDatabase,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
