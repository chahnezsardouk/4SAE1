import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  //json-server --watch db.json
  api: string = 'http://localhost:3000/products'
  getProducts() {
    return this.http.get<Product[]>(this.api)
  }
  getProductById(id: number) {
    return this.http.get<Product>(this.api + '/' + id)
  }

  addProduct(product: Product) {
    return this.http.post(this.api, product)
  }
  deleteProduct(id: number) {
    return this.http.delete(this.api + '/' + id)
  }

}
