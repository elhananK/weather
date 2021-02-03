import * as WeatherActions from './../actions/weather.actions'
import { Weather } from '../models/weather.model';


export function reducer(state: Weather[] = [], action: WeatherActions.Actions) {
    switch (action.type) {
        case WeatherActions.GET_WEATHER:
            return [...state]
        case WeatherActions.GET_WEATHER_SUCCESS:
            return [...state, action.payload]
        case WeatherActions.REMOVE_WEATHER:
            const newState = [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
            return newState;
        default:
            return state;
    }

}