
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {
  constructor(private httpService:Http) { }
  updateWeatherStatus(val:string)
  {
    let response=this.httpService.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+val+'&APPID=a1f2d85f6babd3bf7afd83350bc5f2a6&units=imperial&cnt=7').toPromise()
    return response;
  }

}
