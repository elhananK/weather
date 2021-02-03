import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { WeatherService } from '../services';
import * as WeatherActions from './../actions/weather.actions';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-create-weather',
  templateUrl: './create-weather.component.html',
  styleUrls: ['./create-weather.component.css']
})
export class CreateWeatherComponent implements OnInit {
  readonly UNITS: string = 'Units(Standart, Metric, etc)';
  myForm: FormGroup;
  cityArray: FormControl = new FormControl('');
  cityArrassy: FormControl = new FormControl('');
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private store: Store<AppState>,
    private fb: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.weatherService.getCities()
      .subscribe(res => {
        this.cityArray.setValue(res.data);
      })
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      cityName: ['', [Validators.required]],
      unit: [''],
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    const cityName = this.myForm.controls['cityName'].value;
    const unit = this.myForm.controls['unit'].value || undefined;
    if (this.myForm.valid)
      this.store.dispatch(new WeatherActions.GetWeather({cityName, unit}));
  }

}

