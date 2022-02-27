import { Component, Inject, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { IProduct } from '../SharedClassesAndTypes/IProduct.js';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    storName:string;
    StoreLogo:string;
     ProductList:Array<IProduct>=[];
     CategoryList:Array<ICategory>=[];
    NoDiscount=DiscountOffers.pres_10;
    ClientName:string="";
    IsPurshased:boolean=false;

 
     p1:IProduct={Id:1,name:"T-shirt",quentity:12,price:200,img:"assets/pr1.jpg"};
     c1:ICategory={id:2,name:"cat2"};


 
    constructor(){

       this.NoDiscount= DiscountOffers.pres_15;
       this.storName="H$M";
       this.ProductList.push(this.p1);
       this.CategoryList.push(this.c1);
       this.StoreLogo="assets/logo.png";
       this.ClientName="abdelaliem hosny";
     }
 
  // constructor(
  //  NoDiscount:DiscountOffers,
  // @Inject(String) storName: string="H$M",
  // @Inject(Array) ProductList:Array<IProduct>,
  // @Inject(string) StoreLogo:string ){
  //   this.NoDiscount=DiscountOffers.pres_10;
  //   this.storName=storName;
  //   this.ProductList=ProductList;
  //   this.StoreLogo=StoreLogo;
  // }


 
  

  ngOnInit(): void {
  }


   



}
