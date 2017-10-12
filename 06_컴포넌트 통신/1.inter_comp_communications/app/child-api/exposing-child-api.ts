import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule, ViewChild, AfterViewInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector : 'child',
    template : `<h3>Child</h3><div id='aaa'></div>`
})
class ChildComponent{
    greet(name){
        console.log(`Hello from ${name}`);
        document.getElementById("aaa").innerHTML = 'abc';
    }
}

@Component({
    selector : 'app',
    template : `
        <h1>Parent</h1>
        <child #child1></child>
        <child #child2></child>
        <button (click)="child2.greet('child2_name')">Invoke greet() on child 2</button>
    `
})
class AppComponent implements AfterViewInit{
    @ViewChild('child1') firstChild : ChildComponent;

    ngAfterViewInit(){
        this.firstChild.greet('child1_name');
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [ChildComponent, AppComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);