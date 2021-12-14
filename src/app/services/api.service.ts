import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  // Define API
  // http://api.openweathermap.org/data/2.5/weather?q=London&appid=01c5291941a6173709ddb3db4dea6810
  apiURL = "http://api.openweathermap.org/data/2.5/weather?q="
  apiKey = "01c5291941a6173709ddb3db4dea6810";

  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  
  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}${city}&appid=${this.apiKey}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }




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