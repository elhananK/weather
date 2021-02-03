import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather.model';
import * as WeatherActions from './../actions/weather.actions';
import { AppState } from './../app.state';


@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent {

  weathers: Observable<Weather>;
  constructor(private store: Store<AppState>) {
    this.weathers = store.select('weather');
  }

  deleteWeather(index: number) {
    this.store.dispatch(new WeatherActions.RemoveWeather(index));
  }
}
