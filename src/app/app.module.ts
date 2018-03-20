import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { authService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  {path:'login', loadChildren:'./authentication/authentication.module#AuthenticationModule'},
  {path:'welcome', loadChildren:'./welcome/welcome.module#WelcomeModule'},
  {path:'',loadChildren:'./weather/weather.module#WeatherModule'}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
   ],
  providers: [authService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }