import { Component } from '@angular/core';
import {Todo} from "../../models/Todo";
import {NoteTodo} from "../../models/note-todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[] | undefined;
  notes: NoteTodo[] | undefined;

  inputTodo:string = "";
  noteInput:string = "";

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

  addNoteTodo() {
    if (this.noteInput !== "") {
      this.notes?.push({
        addNote: this.noteInput
      });
    }

    this.noteInput = "";
  }
}
