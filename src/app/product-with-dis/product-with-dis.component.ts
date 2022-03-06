import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-with-dis',
  templateUrl: './product-with-dis.component.html',
  styleUrls: ['./product-with-dis.component.scss']
})
export class ProductWithDisComponent implements OnInit {

  list:any;
  ProductListById:any;
  constructor(private service:ProductServiceService) { }
   
  ngOnInit(): void {
this.list=this.service.getproductWithOutDiscount();
this.ProductListById=this.service.getProductById(2);

  }

 

}
