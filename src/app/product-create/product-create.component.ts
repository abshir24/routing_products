import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product = {title:'',price:0}

  constructor(private _service:ProductService) { }

  ngOnInit() {
  }

  create(){
    this._service.addProduct(this.product)
    this.product = {title:'',price:0}
  }

}
