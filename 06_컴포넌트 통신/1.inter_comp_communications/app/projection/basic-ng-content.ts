import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component, ViewEncapsulation} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector : 'child',
    template : `
        <div class="wrapper">
            <h2>Child</h2>
            <div>This div is defined in the child's template</div>
            <ng-content></ng-content>
        </div>
    `,
    styles : [`.wrapper {background:lightgreen;}`],
    encapsulation : ViewEncapsulation.None
})
class ChildComponent {}

@Component({
    selector : 'app',
    template : `
        <div class="wrapper">
            <h2>Parent</h2>
            <div>This div is defined in the Parent's template</div>
            <child>
                <div>Parent projects this div onto the child</div>
            </child>
        </div>
    `,
    styles : [`.wrapper {background:cyan;}`],
    encapsulation : ViewEncapsulation.None
})
class AppComponent{}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent, ChildComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);