import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, ElementRef} from '@angular/core';
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
    stockSymbol : string = 'IBM';
    price : number;

    constructor(element : ElementRef){
        setInterval(() => {
            let priceQuote : IPriceQuote = {
                stockSymbol : this.stockSymbol,
                lastPrice : 100 * Math.random()
            };
            
            this.price = priceQuote.lastPrice;

            element.nativeElement
                .dispatchEvent(new CustomEvent('last-price', {
                    detail : priceQuote,
                    bubbles : true
                }));
        }, 1000);
    }
}

@Component({
    selector : 'app',
    template : `
        <div (last-price)="priceQuoteHandler($event)">
            <price-quoter></price-quoter>
        </div>
        <br>
        <p>AppComponent received : {{stockSymbol}} {{price|currency : 'USD' : true : '1.2-2'}}</p>
    `
})
class AppComponent {
    stockSymbol : string;
    price : number;

    priceQuoteHandler (event : CustomEvent) {
        this.stockSymbol = event.detail.stockSymbol;
        this.price = event.detail.lastPrice;
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent, PriceQuoterComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * [이벤트 버블링 (Event bubbling)]
 * Angular는 이벤트 버블링을 지원하지 않는다.
 * last-price 이벤트가 발생한 컴포넌트의 부모 계층(<div>)에서는 이벤트를 받을 수 없다.
 * ---------------------------
 * <div (lastPrice)="priceQuoteHandler($event)">
 * 	<price-quoter></price-quoter>
 * </div>
 * ---------------------------
 * 
 * 꼭 버블링이 필요하면, EventEmitter를 쓰지말고, PriceQuoterComponent를 구현해라~!
 * 
 * HTML 렌더러를 사용하지 않는 브라우저에서는 동작하지 않을 것이다.
 */