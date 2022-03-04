import { PostsService } from './../service/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private service:PostsService,private router:Router) { }

  list_post:any;
  errorMassage: any;
  ngOnInit(): void {

    this.service.returnPost().subscribe(
      (data) => {
        this.list_post = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    ); 
  }

  goToCommentDetails(comment:any){
    this.router.navigate(["/comment",comment.id]);
     // this.router.navigate(["/characterData"]);
   // alert(charDetails.char_id);
     
   }

}
