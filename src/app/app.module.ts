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
import { AngularFireAuthModule } from 'angularfire2/auth';

export const сonfig  = {
  apiKey: "AIzaSyCha-WkwmwpU_UiZVO1EP9sIjxKsa-RtJA",
  authDomain: "todos-5e346.firebaseapp.com",
  databaseURL: "https://todos-5e346.firebaseio.com",
  projectId: "todos-5e346",
  storageBucket: "todos-5e346.appspot.com",
  messagingSenderId: "514644533260"
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
    AngularFireAuthModule,
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
