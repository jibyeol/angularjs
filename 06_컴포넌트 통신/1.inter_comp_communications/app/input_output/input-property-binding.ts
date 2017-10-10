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
    @Input() stockSymbol : string;
    @Input() quantity : number; // 입력 프로퍼티 2개 선언
}

@Component({
    selector : 'app',
    template : `
        <input type="text" placeholder="Enter stock (e.g. IBM)"
            (input)="onInputEvent($event)">
        <br>
        <order-processor [stockSymbol]="stock"
            quantity="100"></order-processor>
    `
    // AppComponent의 stock 프로퍼티를 OrderComponent의 stockSymbol 프로퍼티로 바인딩
    // quantity 변수는 바인딩 하지 않고, 직접 값을 지정한다.
})
class AppComponent{
    stock : string;

    onInputEvent({target}) : void {
        this.stock = target.value;
        // 사용자가 값을 입력하면 이 함수가 실행되고, 인자로 받은 객체에서 target.value 프로퍼티를 참조해서 stock에 할당한다.
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent, OrderComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);