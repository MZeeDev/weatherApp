import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  
  public cityName:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   
    this.route.params.subscribe((param)=>{
      this.cityName = param.cityName;
      console.log(this.cityName);
    })
  }

}
