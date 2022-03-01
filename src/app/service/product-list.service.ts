import { IProduct } from './../SharedClassesAndTypes/IProduct';
import { catchError, Observable,throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {


  private URL:string="assets/Data/employee.json"
  constructor(private http:HttpClient) { }



  returnRroduct():Observable<IProduct[]> {

    return  this.http.get<IProduct[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
