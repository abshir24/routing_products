import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private _service:ProductService) { 
    this.products = this._service.allProducts()
  }

  ngOnInit() {
  }

  delete(product){
    this._service.deleteProduct(product)
  }



}
