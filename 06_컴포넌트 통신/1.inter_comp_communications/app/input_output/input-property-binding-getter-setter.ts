import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector : 'order-processor',
    template : `
        Buying {{quantity}} shares of {{stockSymbol}}
    `,
    styles : [`:host {background:cyan;}`]
})
class OrderComponent {
    @Input() quantity : number;

    private _stockSymbol : string; // setter를 쓰기위해 이름을 바꾸고, private로 바꿧다.

    @Input()
    set stockSymbol(value : string) {
        this._stockSymbol = value;
        if(this._stockSymbol !== undefined) {
            console.log(`Sending a Buy order to NASDAQ : ${this.stockSymbol} ${this.quantity}`)
        }
    }

    get stockSymbol() : string {
        return this._stockSymbol
    }
}

/**
 * setter를 사용하면, 변수의 값이 변경될 때 원하는 동작을 추가할 수 있다.
 */

@Component({
    selector : 'app',
    template : `
        <input type="text" placeholder="Enter stock (e.g. IBM)"
            (input)="onInputEvent($event)">
        <br>
        <order-processor [stockSymbol]="stock"
            quantity="100"></order-processor>
    `
})
class AppComponent{
    stock : string;

    onInputEvent({target}) : void {
        this.stock = target.value;
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent, OrderComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);