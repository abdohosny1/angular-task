import { Observable, throwError, catchError } from 'rxjs';
import { IUser } from './../../SharedClassesAndTypes/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL:string="https://jsonplaceholder.typicode.com/users"


  constructor(private http:HttpClient) { }

  returnUsers():Observable<IUser[]> {

    return  this.http.get<IUser[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
