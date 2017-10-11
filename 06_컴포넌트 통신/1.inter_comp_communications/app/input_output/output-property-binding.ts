import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, Output, EventEmitter} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

interface IPriceQuote {
    stockSymbol : string;
    lastPrice : number;
}

@Component({
    selector : 'price-quoter',
    template : `
        <strong>Inside PriceQuoterComponent : {{stockSymbol}} {{price | currency : 'USD' : true : '1.2-2'}}</strong>
    `,
    styles : [`:host{background:pink;}`]
})
class PriceQuoterComponent{
    @Output() lastPrice : EventEmitter<IPriceQuote> = new EventEmitter();
    // 이 프로퍼티에서 보내는 이벤트는 부모 컴포넌트가 받는다.
    stockSymbol : string = 'IBM';
    price : number;

    constructor(){
        setInterval(() => {
            let priceQuote : IPriceQuote = {
                stockSymbol : this.stockSymbol,
                lastPrice : 100 * Math.random()
            };
            this.price = priceQuote.lastPrice;
            this.lastPrice.emit(priceQuote);
            // 새로운 값이 생성될 때마다 출력 프로퍼티를 통해 이벤트를 보낸다.
        }, 1000);
    }
}

@Component({
    selector : 'app',
    template : `
        <price-quoter (lastPrice)="priceQuoteHandler($event)"></price-quoter>
        <br>
        <p>AppComponent received : {{stockSymbol}} {{price|currency : 'USD' : true : '1.2-2'}}</p>
    `
    // <price-quoter>의 lastPrice는 자식 컴포넌트에서 출력 프로퍼티로 지정된 클래스 변수 이름이면서,
    // 부모 컴포넌트에서 사용하는 이벤트 이름이다.
    // 다른 이름을 쓰고 싶으면, 
    // @Output('last-price-event') lastPrice
    // 이런식으로 작성하면 된다.
})
class AppComponent {
    stockSymbol : string;
    price : number;

    priceQuoteHandler (event : IPriceQuote) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent, PriceQuoterComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);