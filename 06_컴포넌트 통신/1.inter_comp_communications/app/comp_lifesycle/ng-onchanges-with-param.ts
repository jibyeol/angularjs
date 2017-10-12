import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, Input, OnChanges, SimpleChange, enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

interface IChanges {
    [key : string] : SimpleChange
}; // 값을 저장할 데이터 형식 정의

@Component({
    selector : 'child',
    styles : ['.child {background:lightgreen;}'],
    template : `
        <div class="child">
            <h2>CHild</h2>
            <div>Greeting : {{greeting}}</div>
            <div>User name : {{user.name}}</div>
            <div>Message : <input [(ngModel)]="message"></div>
        </div>
    `
})
class ChildComponent implements OnChanges {
    @Input() greeting : string;
    @Input() user : {name : string}; // AppComponent로 부터 데이터를 받음
    message : string = 'Initial message'; // @Input이 없어서 값이 변경되어도 ngOnChanges()가 실행되지 X
    ngOnChanges(changes : IChanges){ // @Input정의된 프로퍼티가 수정되면 실행 됨
        console.log('aaa');
        console.log(JSON.stringify(changes, null, 2));
    }
}

@Component({
    selector : 'app',
    styles : ['.parent{background : lightblue;}'],
    template : `
        <div class="parent">
            <h2>Parent</h2>
            <div>Greeting : <input type="text" [value]="greeting"
                (input)="greeting=$event.target.value"></div>
            <div>User name : <input type="text" [value]="user.name"
                (input)="user.name=$event.target.value"></div>
            <child [greeting]="greeting" [user]="user"></child>
        </div>
    `
})
class AppComponent {
    greeting : string = 'Hello';
    user : {name:string} = {name:'John'};
}

enableProdMode(); // Angular 운영모드 활성화
/**
 * Angular is running in the development mode. Call enableProdMode() to enable the production mode.
 * 위처럼 개발모드라는 문구가 뜨지 않음.
 * 운영 모드에서는 코드의 유효성을 프레임워크가 검증한 후에 코드가 실행.
 * 변화 감지 동작이 또 다른 변화를 발생시키지 않도록 막는 기능도 운영모드에서는 동작하지 않는다.
 * 프레임워크가 유효성 검증 로직이 일부 생략되어서 성능이 약간 향상된다.
 * bootstrap실행하기 전에 enableProdMode()를 실행하면 된다.
 */

@NgModule({
    imports : [BrowserModule, FormsModule],
    declarations : [AppComponent, ChildComponent],
    bootstrap : [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * greeting 객체는 변경되면 바로 ngOnChanges()가 실행된다.
 * user는 값을 바꾸어도 실행되지 않는다.
 * 뮤터블 객체인 user안에 있는 name 객체가 변경된 것은 아니기 때문이다.
 * message도 변경해도 실행되지 않는다.
 * 이것은 @Input 어노테이션이 지정되지 않아서이다.
 * 
 * user의 값이 바뀌면 ngOnChanges()가 실행되지 않지만,
 * 내부에서 값이 변경된 것은 Angular의 변화 감지기가 감지하고 화면에도 반영한다.
 * 
 * 6.1.1절에서 프로퍼티 변경 시점을 가로채려고 세터함수를 썻는데,
 * ngOnChanges() 함수로 사용할 수 있다.
 */