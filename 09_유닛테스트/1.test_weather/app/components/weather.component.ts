import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import {WeatherService, WeatherResult} from '../services/weather.service';

@Component({
    selector : 'my-weather',
    template : `
        <h2>Weather</h2>
        <input type="text" placeholder="Enter city" [formControl]="searchInput">
        <h3>Current weather in {{weather?.place}} : </h3>
        <ul>
            <li>Temperature : {{weather?.temperature}}C</li>
            <li>Humidity : {{weather?.humidity}}%</li>
        </ul>
    `
})
export class WeatherComponent{
    searchInput : FormControl;
    weather : WeatherResult;

    constructor(weatherService : WeatherService) {
        this.searchInput = new FormControl('');
        this.searchInput.valueChanges
            .debounceTime(1000)
            .switchMap((place : string) => weatherService.getWeather(place))
            .subscribe(
                (weather : WeatherResult) => this.weather = weather,
                err => console.error(err),
                () => console.log('Weather is retrieved')
        );
    }
}