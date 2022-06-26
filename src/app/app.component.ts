import { LocalizedString } from '@angular/compiler';
import { Component } from '@angular/core';
import { json } from 'express';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo : string;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.IsCompleted = true
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert('Please Add Tasks');
    }
    localStorage.setItem('list',JSON.stringify(this.todos));
  } 

  done(id:number){
    this.todos[id].IsCompleted =! this.todos[id].IsCompleted;
  }

  remove(id:number){
    this.todos = this.todos.filter((todo,number)=> number !== id);

    localStorage.setItem('list',JSON.stringify(this.todos));
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo,Number) => todo.IsCompleted);

    localStorage.setItem('list',JSON.stringify(this.todos));
  }

  clearAll(): void {
    this.todos = this.todos.filter((todo) => !this.done);

    localStorage.clear();
  }
}