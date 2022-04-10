import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getStat(list : any , criteria : string , val : any){
    let nb = 0;
    for(let i in list){
      if(list[i][criteria] == val){
        nb ++
      }
      
    }
    
    return nb
  }





}
