import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 title : string;
  productList : Product[]
  nombreMax : number
  image: string ='../assets/1.jpg'
  nb : number = 0;

  constructor(private calculService : CalculService) { }

  ngOnInit(): void {
    this.title = 'E-commerce'
    this.productList=[
      {id : 1 , title : 'Product1'  ,price : 20 , quantity : 20 ,like : 0},
      {id : 2 , title : 'Product2'  ,price : 15 , quantity : 0 ,like : 0},
      {id : 3 , title : 'Product3'  ,price : 17 , quantity : 10 ,like : 0},
    ]
  }
  IncrementLike(i : number){
   this.productList[i].like ++
  }
  buyProduct(product){
   product.quantity --
  }

  getStat(){
    this.nb = this.calculService.getStat(this.productList , 'quantity' , 0)
  }

}
