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
<<<<<<< HEAD
  { path: 'login', loadChildren: './authentication/authentication.module#AuthenticationModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomeModule' },
  { path: '', loadChildren: './weather/weather.module#WeatherModule' }
=======
  {path:'login', loadChildren:'./authentication/authentication.module#AuthenticationModule'},
  {path:'welcome', loadChildren:'./welcome/welcome.module#WelcomeModule'},
  {path:'',loadChildren:'./weather/weather.module#WeatherModule'}
>>>>>>> a0dc0c34e268bc0428b6ebe212aae59f2076ca8f
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
  providers: [authService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }