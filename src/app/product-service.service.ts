import { DiscountOffers } from './SharedClassesAndTypes/DiscountOffers';
import { IProduct } from './SharedClassesAndTypes/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  itemProduct:any={};
  productWithDiscount:Array<IProduct>=[];
  productWithOutDiscount:Array<IProduct>=[];


  constructor() { }


  allProductList:Array<IProduct>=[
    {Id:1,name:"T-shirt",quentity:12,price:200,img:"assets/pr1.jpg",pres:DiscountOffers.pres_10},
    {Id:2,name:"Cotton Solid ",quentity:12,price:200,img:"assets/2.jpg",pres:DiscountOffers.Nodis},
    {Id:3,name:"Hoodie grey",quentity:12,price:200,img:"assets/3.png",pres:DiscountOffers.pres_15},
    {Id:4,name:"T-Shirt Summer",quentity:12,price:200,img:"assets/4.jpg",pres:DiscountOffers.Nodis},
   
  ];

  
  getAllProduct(){
    return this.allProductList;

  }

  getProductById(id:any){

    if(typeof id == 'number')
    {
     this.allProductList.forEach((e)=>{
       if(e.Id===id){
        this.itemProduct=e;
       }
       
     });
     return this.itemProduct;

    }else{
      return null;
    }
    
  }

  getproductWithDiscount(){
    this.productWithDiscount=[];
    this.allProductList.forEach((e)=>{
      if(e.pres===DiscountOffers.Nodis){
        this.productWithDiscount.push(e);
      }
    
    })
    return this.productWithDiscount;

  }


  getproductWithOutDiscount(){
    this.productWithOutDiscount=[];
    this.allProductList.forEach((e)=>{
      if(!(e.pres===DiscountOffers.Nodis)){
        this.productWithOutDiscount.push(e);
      }
    
    })
    return this.productWithOutDiscount;

  }
}
