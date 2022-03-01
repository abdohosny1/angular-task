import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { GetAllProductComponent } from './service/get-all-product/get-all-product.component';
import { GetAllProductDetailsComponent } from './service/get-all-product-details/get-all-product-details.component';

import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterPipe,
    GetAllProductComponent,
    GetAllProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    NgbModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
