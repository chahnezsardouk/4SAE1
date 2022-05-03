import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ElectroComponent } from './electro/electro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoComponent,
    NotFoundComponent,
    DetailComponent,
    ProductComponent,
    AddProductComponent,
    ElectroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
