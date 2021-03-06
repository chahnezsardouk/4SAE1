import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToDoComponent } from './to-do/to-do.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { ElectroComponent } from './electro/electro.component';


const ROUTES : Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'todo' , component : ToDoComponent},
  
  {path : 'electro' , component : ElectroComponent},
  {path : 'home/:id' , component : DetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
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
