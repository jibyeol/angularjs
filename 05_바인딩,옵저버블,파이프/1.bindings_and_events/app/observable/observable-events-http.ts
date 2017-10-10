import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, ReactiveFormsModule} from '@angular/forms'
import {HttpModule, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
    selector : 'app',
    template : `
        <h2>Observable weather</h2>
        <input type="text" placeholder="Enter city" [formControl]="searchInput">
        <h3>{{temperature}}</h3>
    `
})
export class AppComponent{
    private baseWeatherUrl : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    searchInput : FormControl = new FormControl();
    temperature : string;

    constructor(private http : Http) {
        // 검색 필드에서 만드는 옵저버블 스트림 -- 1
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => this.getWeather(city))
            .subscribe(
                res => {
                    this.temperature = 
                        `Current temperature is ${res['main'].temp}℃, ` + 
                        `humidity : ${res['main'].humidity}%`;
                },
                err => console.log(`Can't get weather. Error code : %s, URL : %s`, err.message, err.url),
                () => console.log(`Weather is retrieved`)
            );
    }

    getWeather(city : string) : Observable<Array<string>> { // HTTP응답으로 발생하는 옵저버블 스트림 -- 2
        return this.http.get(this.baseWeatherUrl + city + this.urlSuffix)
            .map(res => {
                console.log(res.json());
                return res.json();
            })
            .catch(err => {
                if(err.status === 404) {
                    console.log(`City ${city} not found`);
                    return Observable.of();
                }
            });
    }
}

@NgModule({
    imports : [BrowserModule, ReactiveFormsModule, HttpModule],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * 옵저버블1 -> switchMap() -> 옵저버블2 -> subscribe()
 * switchMap() 함수는 옵저버블1을 옵저버블2로 변환하는데,
 * 옵저버블2가 만들어지기 전에 옵저버블1에 새로운 값이 전달되면, 
 * 이전에 있던 옵저버블은 폐기된다.
 * 
 * 네트워크의 속도를 늦춰서 실행해보면, canceled 된 것을 확인할 수 있다.
 */