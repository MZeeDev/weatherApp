import { Component, OnChanges, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {
  public weatherStatus = {
    list: []
  };
  currentCity:string;
  @Input('cityName') cityName: string;
  constructor(public ws: WeatherService) { }

  async ngOnChanges() {
    if (this.cityName != null && this.cityName != '') {
      try {
        
        let response = await this.ws.updateWeatherStatus(this.cityName);
        this.weatherStatus = response.json();
        console.log(this.weatherStatus);
      } 
      catch (error) {
        alert('Something Went Wrong.')
      }
    }
  }

}
