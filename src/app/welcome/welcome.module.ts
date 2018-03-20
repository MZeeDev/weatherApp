import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
const router:Routes=
[
  {path:'',component:WelcomeComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
    ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }