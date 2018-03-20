import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { authService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('signIn') signInForm: NgForm;
  constructor(public authService: authService) { }

  ngOnInit() {
  }
  logIn() {
    // this.authService.logIn();
    console.log("log in sucessfully");
  }
  logOut() {

    this.authService.logOut();
    console.log("log Out");

  }
  async onSignIn(f:NgForm) {
    let response = await this.authService.loginWithCredentials(this.signInForm.value.email, this.signInForm.value.password);
  }
}
