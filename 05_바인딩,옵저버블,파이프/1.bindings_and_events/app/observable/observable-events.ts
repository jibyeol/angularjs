import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import 'rxjs/add/operator/debounceTime'; // rxjs/Rx로 해서 모든 함수를 불러올 수 있다.

@Component({
    selector : 'app',
    template : `
        <h2>Observable events demo</h2>
        <input type="text" placeholder="Enter stock" [formControl]="searchInput">
    `
    // 컴포넌트 프로퍼티 searchInput으로 바인딩되서 컨트롤로 동작한다.
})
class AppComponent{
    searchInput : FormControl = new FormControl('');

    constructor(){
        this.searchInput.valueChanges
                .debounceTime(500) // 이벤트를 바로 발생시키지않고, 500ms 지연시킨다.
                .subscribe(stock => this.getStockQuoteFromServer(stock)); // 옵저버블 스트림을 구독한다.
        /**
         * debounceTime()를 사용하지 않는다면, 키를 입력할 때마다 valueChanges 이벤트가 발생한다.
         */
    }

    getStockQuoteFromServer(stock : string) {
        console.log(`The price of ${stock} is ${100*Math.random().toFixed(4)}`);
    }
}

@NgModule({
    imports : [BrowserModule, ReactiveFormsModule], // 반응형 폼 모듈을 앱 모듈에 불러온다.
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);