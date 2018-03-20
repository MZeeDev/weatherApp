import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { authService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('signIn') signInForm:NgForm;
  constructor(private authService:authService) { }

  ngOnInit() {
  }
  logIn()
  {
this.authService.logIn();
console.log("log in sucessfully");  }
logOut()
{
  
this.authService.logOut();
console.log("log Out");

  }
  onSignIn(f)
  {
    console.log(this.signInForm.value);
 
  }
}
