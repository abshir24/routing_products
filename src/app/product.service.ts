import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ProductService {
  products = []
  
  
  constructor(private _route:ActivatedRoute,private _router:Router) { }

  addProduct(product){
    this.products.push(product)
    console.log(this.products)
    this._router.navigate(['/list']);
  }

  editProduct(idx, product){
    this.products[idx] = product
    this._router.navigate(['/list']);
  }

  deleteProduct(idx){
    console.log("delete",idx)
    this.products.splice(idx,1)
    this._router.navigate(['/list']);
  }
  allProducts(){
    return this.products
  }
}
