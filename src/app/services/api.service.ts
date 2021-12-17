import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Forecast } from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  // Define API
  // http://api.openweathermap.org/data/2.5/forecast?q=London&appid=01c5291941a6173709ddb3db4dea6810
  apiURL = "http://api.openweathermap.org/data/2.5/forecast?q="
  apiKey2 = "01c5291941a6173709ddb3db4dea6810"
  apiKey = "fe3695759da76e0c9dcaf566634a08ed"
  apiUnits="metric"


  //http://api.openweathermap.org/data/2.5/forecast?q=London&appid=fe3695759da76e0c9dcaf566634a08ed


  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  
  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}${city}&units=${this.apiUnits}&appid=${this.apiKey}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  
  // using a forecast model to return data
  
  // xxgetWeather(city: string): Observable<Forecast> {
  //   return this.http.get<Forecast>(`${this.apiURL}${city}&appid=${this.apiKey}`)
  //   .pipe(
  //     map ((response: any) =>  {
  //       console.log('map', response)
  //       return {
  //         city: response.city.name,
  //         list: response.list.map ((i:any) =>{return {weather: i.weather, main:i.main} })
  //        }
  //     }),
  //     catchError(this.handleError)
  //   )
  // }






  // Error handling 
  handleError(error: any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}