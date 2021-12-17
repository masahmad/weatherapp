import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  cities: string[] = ["Birmingham", "London", "Cardiff"];
  cityData: any
  cityName: string = ""
  cityForecast: any[] = []

  constructor(
    private apiService: ApiService,
    public fb: FormBuilder) { }


  ngOnInit(): void {
  }


  form = new FormGroup({  
    city: new FormControl('', Validators.required)  
  });  

    
  // get f(){  
  //   return this.form.controls;  
  // }  
    
  submit(){  
    console.log(this.form.value.city);  
    return this.apiService.getWeather(this.form.value.city).subscribe((data: {}) => {
      this.cityData = data;
      this.cityName = this.cityData.city.name
      this.cityForecast = this.cityData.list
      console.log(this.cityData)
    })
  }  
  

}
