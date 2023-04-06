import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private apiUrl = 'http://api.openweathermap.org/data/2.5/group';
  private apiKey = '60587c1f1d041a598fa8b90a2a3d474c';

  constructor(private http: HttpClient) { }

  getWeatherForCities(cityIds: string): Observable<any> {
    const url = `${this.apiUrl}?id=${cityIds}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }

}

  
 
 

  
