import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeather(city: string = 'jerusalem', units: string = 'metric'): Observable<any> {
    return this.http
      .get<any>(`http://api.openweathermap.org/data/2.5/find?q=` + city + `&units=` + units + `&appid=0d7303c17ee3d3482cd82a2ad273a90d`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
  
  
  getCities(): Observable<any> {
    return this.http
      .post<any>(`https://countriesnow.space/api/v0.1/countries/cities`, {country: "israel"})
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
