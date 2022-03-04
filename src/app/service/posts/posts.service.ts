import { throwError, Observable, catchError } from 'rxjs';
import { IPost } from './../../SharedClassesAndTypes/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private URL:string="https://jsonplaceholder.typicode.com/posts"


  constructor(private http:HttpClient) { }


  returnPost():Observable<IPost[]> {

    return  this.http.get<IPost[]>(this.URL).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
