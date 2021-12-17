import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.css']
})
export class CityForecastComponent implements OnInit {
@Input() cityName = ""
@Input() forecast:any= {}


  constructor() { }

  ngOnInit(): void {
  }


 ngOnChanges() {

  
 } 

}


