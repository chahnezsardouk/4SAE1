import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/toDo';
import { CalculService } from '../services/calcul.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDoList: ToDo[]
  constructor(private calculService: CalculService, private todoService: TodoService) { }
  n: number;
  ngOnInit(): void {
    // this.toDoList = [
    //   { id: 1, title: 'todo1', completed: true },
    //   { id: 2, title: 'todo2', completed: true },
    //   { id: 3, title: 'todo3', completed: false },
    //   { id: 4, title: 'todo4', completed: false },
    // ] 
      this.todoService.getTodo().subscribe((data:ToDo[])=>(this.toDoList = data))

   // this.n = this.calculService.getStat(this.toDoList, 'completed', true)
  }
  calcul(){
    this.n = this.calculService.getStat(this.toDoList, 'completed', true)
  }

}
