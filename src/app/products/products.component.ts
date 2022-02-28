import { DiscountOffers } from './../SharedClassesAndTypes/DiscountOffers';
import { Component, Inject, OnInit } from '@angular/core';
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
    NoDis=DiscountOffers.pres_10;
    no=DiscountOffers.Nodis;
    ClientName:any="";
    IsPurshased:boolean=true;
    CategorySelected:string="";


 
      
    ProductList:Array<IProduct>=[
      {Id:1,name:"T-shirt",quentity:12,price:200,img:"assets/pr1.jpg",pres:DiscountOffers.pres_10},
      {Id:2,name:"Cotton Solid ",quentity:12,price:200,img:"assets/2.jpg",pres:DiscountOffers.Nodis},
      {Id:3,name:"Hoodie grey",quentity:12,price:200,img:"assets/3.png",pres:DiscountOffers.pres_15},
      {Id:4,name:"T-Shirt Summer",quentity:12,price:200,img:"assets/4.jpg",pres:DiscountOffers.Nodis},
     
    ];
     CategoryList:Array<ICategory>=[
       {id:1,name:"Laptop"},
       {id:2,name:"Clothes"},
       {id:3,name:"Mobile"},
       {id:4,name:"Food"},
      ];

      oneProduct:Array<IProduct>=[
        {Id:1,name:"T-shirt",quentity:12,price:200,img:"assets/pr1.jpg",pres:DiscountOffers.pres_10},
       
       
      ];



      show(){
      this.IsPurshased=!this.IsPurshased;
      }
 
    constructor(){

       this.NoDis= DiscountOffers.pres_10;
       this.storName="H$M";
      // this.ProductList.push(this.p1);
      // this.CategoryList.push(this.c1);
       this.StoreLogo="assets/logo.png";
      // this.ClientName="abdelaliem hosny";
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


   
filter=[3,4,5,6,21,3,4];


}
