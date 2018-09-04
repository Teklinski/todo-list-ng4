import { Component } from '@angular/core';

type Title = string;
type CompletionStatus = boolean;

interface Todo {
  title:Title;
  complete:CompletionStatus;
}

@Component({
  selector: 'todo-list-app',
  templateUrl: './todo-list-app.component.html',
  styleUrls: ['./todo-list-app.component.css']
})
export class TodoListAppComponent {
  public newTodoTitle: string = '';
  public todos:Array<Todo> = [];
                            /*[{
                              title: 'kupić chleb',
                              complete: true
                            }, {
                              title: 'zrobić kanapkę',
                              complete: false
                            }];*/

  public addTodo() {
    // console.log(this.newTodoTitle);
    if (!this.newTodoTitle) {
      return;
    }

    const newTodo:Todo = {
      title: this.newTodoTitle,
      complete: false
    };

    this.todos.push(newTodo);

    this.newTodoTitle = '';
  }

}
