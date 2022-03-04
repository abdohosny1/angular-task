import { CommentService } from './../service/comment/comment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  list_comment:any;
  errorMassage: any;
  postId: any=0;


  constructor(private service:CommentService,private activeRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activeRout.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
    });

    this.service.returnComment(this.postId).subscribe(
      (data) => {
        this.list_comment = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    ); 
  }

}
