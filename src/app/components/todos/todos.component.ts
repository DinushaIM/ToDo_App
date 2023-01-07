import { Component } from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[] | undefined;

  inputTodo:string = "";

  constructor() {
  }

  ngOnInit(): void{
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false

      }
    ]
  }

  toggleDone (id: number) {
    // @ts-ignore
    this.todos.map((v,i) =>{
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deteleTodo(id: number) {
    this.todos = this.todos?.filter((v,i) => i !== id);
  }

  addTodo () {
    if(this.inputTodo !== "") {
      this.todos?.push({
        content: this.inputTodo,
        completed: false
      });
    }

    this.inputTodo = "";
  }
}
