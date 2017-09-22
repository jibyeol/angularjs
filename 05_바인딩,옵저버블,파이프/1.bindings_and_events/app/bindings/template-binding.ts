import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector : 'app',
    template : `
        <button (click)="flag=!flag">Toggle flag's value</button>
        <p>
            Flag's value : {{flag}}
        </p>
        <p>
            1. sapn with *ngIf="flag" : <span *ngIf="flag">Flag is true</span>
        </p>
        <p>
            2. sapn with [ngIf]="flag" : <ng-template [ngIf]="flag">Flag is true</ng-template>
        </p>
    `
    // 2. <ng-template> 사용한 것은 <span>과같은 태그 없이 텍스트만 생겻다 없어졋다함.
})
class AppComponent {
    flag : boolean = true;
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
