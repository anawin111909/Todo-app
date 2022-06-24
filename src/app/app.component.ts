import { Component } from '@angular/core';
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
  } 
  done(id:number){
    this.todos[id].IsCompleted =! this.todos[id].IsCompleted;
  }
  remove(id:number){
    this.todos = this.todos.filter((todo,number)=> number !== id);
  }
  clearCompleted(): void {
    this.todos = this.todos.filter((todo,Number) => todo.IsCompleted);
  }
  clearAll(): void {
    this.todos = this.todos.filter((todo) => !this.done);
  }
}