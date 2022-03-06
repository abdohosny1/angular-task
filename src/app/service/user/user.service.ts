import { Observable, throwError, catchError } from 'rxjs';
import { IUser } from './../../SharedClassesAndTypes/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL:string="https://jsonplaceholder.typicode.com/users"
  user:any;
  getoneuser:any;

  constructor(private http:HttpClient) { }

  returnUsers():Observable<IUser[]> {

    return this.user= this.http.get<IUser[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }

  getuserId(id:any){

    if(typeof id == 'number')
    {
     this.user.forEach((e:any)=>{
       if(e.id===id){
        this.getoneuser=e;
       }
       
     });
     return this.getoneuser;
  
    }else{
      return null;
    }
    
  }
}
