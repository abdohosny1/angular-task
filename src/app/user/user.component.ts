import { UserService } from './../service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {




  list_User:any=[];
  getoneuser:any;
  errorMassage: any=[];


  constructor( private listUser:UserService) { }

  ngOnInit(): void {
    this.listUser.returnUsers().subscribe(
      (emp_Data) => {
        this.list_User = emp_Data;
      },
      (error) => {
        this.errorMassage = error;
      }
    ); 

    this.getoneuser=this.listUser.getuserId(1);
   }


   
    

 // getoneusers(id:any){
    //  this.list_User.forEach(function(e)  {
       
    //  });
    //  }
//      this.list_User.forEach(function (value) {
//   console.log(value);
// });





getuserId(id:any){

  if(typeof id == 'number')
  {
   this.list_User.forEach((e:any)=>{
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
