import { ProductListService } from './../product-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrls: ['./get-all-product.component.scss']
})
export class GetAllProductComponent implements OnInit {

  constructor(private list:ProductListService ) { }
  productList: any;
  errorMassage: any;

  ngOnInit(): void {
    this.list.returnRroduct().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    );
  }

}
