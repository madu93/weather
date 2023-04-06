

export interface City {
    cityCode: string;
    cityName: string;
    temp: string;
    status: string;
  }
  

  export interface WeatherData {
    cnt: number;
    list: WeatherInfo[];
  }
  
  export interface WeatherInfo {
    id: number;
    name: string;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
  }
  
  /*
  export interface WeatherData  {
      coord: Coord
      weather: Weather[]
      base: string
      main: Main
      visibility: number
      wind: Wind
      rain: Rain
      clouds: Clouds
      dt: number
      sys: Sys
      timezone: number
      id: number
      name: string
      cod: number
    }
    
    export interface Coord {
      lon: number
      lat: number
    }
    
    export interface Weather {
      id: number
      main: string
      description: string
      icon: string
    }
    
    export interface Main {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
      sea_level: number
      grnd_level: number
    }
    
    export interface Wind {
      speed: number
      deg: number
      gust: number
    }  */