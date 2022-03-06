import { ProductWithoutDisComponent } from './product-without-dis/product-without-dis.component';
import { ProductWithDisComponent } from './product-with-dis/product-with-dis.component';

import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterrComponent } from './registerr/registerr.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductsComponent},
  {path:"user",component:UserComponent},
  {path:"post",component:PostComponent},
  {path:"login",component:LoginnComponent},
  {path:"register",component:RegisterrComponent},
  {path:"comment/:id",component:CommentComponent},
  {path:"withdis",component:ProductWithDisComponent},
  {path:"without",component:ProductWithoutDisComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
