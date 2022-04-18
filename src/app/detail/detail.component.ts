import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
id : any;
product : Product ;
  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params['id'];
  }
}
