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

import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    FilterPipe,
    UserComponent,
    PostComponent,
    PageNotFoundComponent,
    HomeComponent,
    CommentComponent,

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
