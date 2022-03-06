import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfirmPasswordValiditor } from '../validitor/confirmpassword.validitor';

@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.scss']
})
export class RegisterrComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registerForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmpassword:['']
  }  ,{validator:[ConfirmPasswordValiditor]});


  get userName(){
    return this.registerForm.get('userName');
  }

  get email(){
    return this.registerForm.get('email');
  }
   
  get password(){
    return this.registerForm.get('password');
  }

  get confirmpassword(){
    return this.registerForm.get('confirmpassword');
  }


}
