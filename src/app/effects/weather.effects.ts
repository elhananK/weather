import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import * as WeatherActions from './../actions/weather.actions';


@Injectable()
export class WeatherEffects {
 
  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActions.GET_WEATHER),
    map((action: WeatherActions.GetWeather) => action.payload),
    mergeMap((payload) => {
      return this.weatherService.getWeather(payload.cityName, payload.unit).pipe(
      map(weather => ({ type: '[WEATHER] get success', payload: weather })),
      catchError(() => EMPTY)
  )}))
  );
 
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}