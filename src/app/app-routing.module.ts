import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NotFoundComponent } from './not-found/not-found.component';


const ROUTES : Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'todo' , component : ToDoComponent},
  {path : '**' , component : NotFoundComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
