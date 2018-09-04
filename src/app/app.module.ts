import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoListAppComponent } from './todo-list-app.component';

@NgModule({
  declarations: [
    TodoListAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [TodoListAppComponent]
})
export class AppModule { }
