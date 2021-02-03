import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// reactive forms
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../material.module';


// services
import * as fromServices from './services';

// ngrx
import { StoreModule } from '@ngrx/store';

// reducers
import { reducer } from './reducer/weather.reducer';

// components
import { ShowWeatherComponent } from './show-weather/show-weather.component';
import { CreateWeatherComponent } from './create-weather/create-weather.component';

// effects
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './effects/weather.effects';


@NgModule({
  declarations: [
    AppComponent,
    CreateWeatherComponent,
    ShowWeatherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      weather: reducer
    }),
    EffectsModule.forRoot([WeatherEffects])
  ],
  providers: [...fromServices.services,],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
