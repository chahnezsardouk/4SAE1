import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  @Output() notificationAddProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    
    this.product = new Product()
  }
  addProduct(){
    this.notificationAddProduct.emit(this.product)
    console.log("okkk")
  }
}
