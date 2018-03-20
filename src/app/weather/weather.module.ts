import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MainPageComponent} from './main-page/main-page.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CityDetailComponent} from './city-detail/city-detail.component';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../authentication/auth.guard';

const routes:Routes=
[
  {path:'',component:HomepageComponent},
  //{path:'Home',component:MainPageComponent},
   {path:'Home',component:HomepageComponent ,children:
  [
    {path:'new',component:MainPageComponent},
     {path:':cityName',component:CityDetailComponent}
            
   ]},
  // {path:':cityName',component:CityDetailComponent},
  {path:'**', component:MainPageComponent}
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailComponent,MainPageComponent,HomepageComponent,CityDetailComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
