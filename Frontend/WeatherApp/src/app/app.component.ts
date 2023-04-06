import { Component} from '@angular/core';
import { WeatherService } from './services/weather.service';
import { City } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  cities: City[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    
    let cityCodes: string = '';
    const cities = require('../assets/cities.json').List;
    cities.forEach((city: { CityCode: string; }) => {
      cityCodes += city.CityCode + ',';
    });
    cityCodes = cityCodes.slice(0, -1);

    
    this.weatherService.getWeatherForCities(cityCodes).subscribe(data => {
      data.list.forEach((weather: any, index: number) => {
        this.cities.push({
          cityCode: weather.id,
          cityName: cities[index].CityName,
          temp: weather.main.temp,
          status: weather.weather[0].main
        });
      });
    });
  }
}