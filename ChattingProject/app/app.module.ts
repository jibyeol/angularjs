import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ApplicationComponent} from './components/application/application.component';
import {ChattingComponent} from './components/chatting/chatting.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RoomListComponent} from './components/room-list/room-list.component'
import {RoomService} from './services/room.service';

const routes : Routes = [
    {path : '', component : RoomListComponent},
    {path : 'chatting', component : ChattingComponent}
]

@NgModule({
    imports : [BrowserModule, RouterModule.forRoot(routes)],
    declarations : [ApplicationComponent,
        ChattingComponent,
        FooterComponent,
        NavbarComponent,
        RoomListComponent
    ],
    providers : [RoomService, 
        {provide : LocationStrategy, useClass : HashLocationStrategy}],
    bootstrap : [ApplicationComponent]
})
export class AppModule{}