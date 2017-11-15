import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  product = {title:'',price:0}
  constructor(private _route: ActivatedRoute, private _service:ProductService) { 
    this._route.paramMap.subscribe( params => {
        this.id = params.get('id')
    }) 
  }

  ngOnInit() {
  }

  edit(){
    this._service.editProduct(this.id,this.product)
    this.product = {title:'',price:0}
  }



}
