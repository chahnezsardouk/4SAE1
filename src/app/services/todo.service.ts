import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../model/toDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiurl : string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http : HttpClient) { }

  getTodo(){
    return this.http.get<ToDo[]>(this.apiurl)
  }
  // getToDoByUser(id : number) {
  //   this.http.get(this.apiurl+'/userId='+id)
  // }
 
}
