import { Action } from '@ngrx/store'
import { Weather } from '../models/weather.model'

export const GET_WEATHER =                  '[WEATHER] get'
export const GET_WEATHER_SUCCESS =          '[WEATHER] get success'
export const REMOVE_WEATHER =               '[WEATHER] remove'


export class GetWeather implements Action {
    readonly type = GET_WEATHER

    constructor(public payload: {cityName: string, unit: string}) {}
}

export class GetWeatherSuccess implements Action {
    readonly type = GET_WEATHER_SUCCESS

    constructor(public payload: Weather) {}
}

export class RemoveWeather implements Action {
    readonly type = REMOVE_WEATHER

    constructor(public payload: number) {}
}


export type Actions
    = GetWeather 
    | RemoveWeather
    | GetWeatherSuccess