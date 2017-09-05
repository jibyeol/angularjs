import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ApplicationComponent} from './components/application/application.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {NavbarComponent} from './components/navbar/navbar.component';

const routes : Routes = [
    {path : '', component : DashboardComponent}
]

@NgModule({
    imports : [BrowserModule, RouterModule.forRoot(routes)],
    declarations : [ApplicationComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent
    ],
    providers : [{provide : LocationStrategy, useClass : HashLocationStrategy}],
    bootstrap : [ApplicationComponent]
})
export class AppModule{}