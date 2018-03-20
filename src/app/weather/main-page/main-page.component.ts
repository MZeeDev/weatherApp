import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @ViewChild('f') sLForm :NgForm;
  cityName='';
  tempCityName=''
  public weatherStatus = {
    list:[]
  };
  constructor(private ws:WeatherService) { }

  ngOnInit() {
  }
  async onSubmit(Form:NgForm)
  {
    this.cityName = this.tempCityName;
  }
}
