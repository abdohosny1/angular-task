import { UserService } from './../service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  list_User:any;
  errorMassage: any;


  constructor( private listUser:UserService) { }

  ngOnInit(): void {
    this.listUser.returnUsers().subscribe(
      (emp_Data) => {
        this.list_User = emp_Data;
      },
      (error) => {
        this.errorMassage = error;
      }
    );  }

}
