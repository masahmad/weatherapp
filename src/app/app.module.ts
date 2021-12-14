import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherWidgetComponent,
    CityForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
