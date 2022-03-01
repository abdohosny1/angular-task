import { ProductsComponent } from './products/products.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-myfirstapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fristapp';

  ProductList:any;
  IsPurshased:boolean=false;
  ngOnInit(): void {
  }

  @ViewChild(ProductsComponent)child?: ProductsComponent ;


  ngAfterViewInit(): void {
    //console.log(this.child.renderValues());
    this.ProductList=this.child?.renderValues();
  }

  show(){
    this.IsPurshased=!this.IsPurshased;
    }
}
