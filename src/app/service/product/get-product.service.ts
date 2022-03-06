import { Observable, throwError, catchError } from 'rxjs';
import { IProduct } from './../../SharedClassesAndTypes/IProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  private URL:string='https://student.valuxapps.com/api/home';
  constructor(private http:HttpClient) { }


  returnProduct():Observable<IProduct[]> {

    return  this.http.get<IProduct[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
