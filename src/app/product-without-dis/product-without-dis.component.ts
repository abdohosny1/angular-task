import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-without-dis',
  templateUrl: './product-without-dis.component.html',
  styleUrls: ['./product-without-dis.component.scss']
})
export class ProductWithoutDisComponent implements OnInit {

  list:any;
  ProductListById:any;
  constructor(private service:ProductServiceService) { }

  ngOnInit(): void {
    this.list=this.service.getproductWithDiscount();
this.ProductListById=this.service.getProductById(2);
  }

}
