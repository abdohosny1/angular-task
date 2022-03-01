import { ProductServiceService } from './../product-service.service';
import { DiscountOffers } from './../SharedClassesAndTypes/DiscountOffers';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
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


    




 
      
    ProductList:any;
    ProductListById:any;


     
 
    constructor(private productService:ProductServiceService){

       this.NoDis= DiscountOffers.pres_10;
       this.storName="H$M";
      // this.ProductList.push(this.p1);
      // this.CategoryList.push(this.c1);
       this.StoreLogo="assets/logo.png";
      // this.ClientName="abdelaliem hosny";
     }

     ngOnInit(): void {
     this.ProductListById=this.productService.getProductById(2);
    }
   // @Output() childEvent=new EventEmitter ();
    
    
   

    renderValues(){
       this.ProductList=this.productService.getAllProduct();
      // this.childEvent.emit("ProductList");

        return this.ProductList;

    }

 
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


 
  

 


   
filter=[3,4,5,6,21,3,4];


}
