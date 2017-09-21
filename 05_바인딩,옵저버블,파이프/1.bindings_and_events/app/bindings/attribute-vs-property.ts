import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


@Component({
    selector : 'app',
    template : `
        <h3>Property vs attribte binding:</h3>
        <input [value]="greeting"
            [attr.value]="greeting"
            (input)="onInputEvent($event)">
    `
    // [value]="greeting" : 프로퍼티
    // [attr.value]="greeting" : 애트리뷰트
    // (input)="onInputEvent($event)" : 이벤트 핸들러 바인딩!
})
class AppComponent{
    greeting : string = 'A value';

    onInputEvent(event : Event) : void {
        let inputElement : HTMLInputElement 
                = <HTMLInputElement> event.target; // 이벤트가 발생한 HTML 엘리먼트

        console.log(`The input property value = ${inputElement.value}`);
        console.log(`The input attribute value = ${inputElement.getAttribute('value')}`);
        console.log(`The greeting property value = ${this.greeting}`);
    }

    onInputEvent2({target}) : void { // 비구조화로 코드 간단하게 만들기
        // Event의 target 프로퍼티를 참조한다~
        console.log(`The input property value = ${target.value}`);
        console.log(`The input attribute value = ${target.getAttribute('value')}`);
        console.log(`The greeting property value = ${this.greeting}`);
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);