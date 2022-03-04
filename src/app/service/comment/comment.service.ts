import { IPost } from './../../SharedClassesAndTypes/post';
import { Observable, throwError, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from 'src/app/SharedClassesAndTypes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private URL:string="https://jsonplaceholder.typicode.com/posts/"

  constructor(private http:HttpClient) { }

  returnComment(id:any):Observable<IComment[]> {

    return  this.http.get<IComment[]>(this.URL+id+"/comments").pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
