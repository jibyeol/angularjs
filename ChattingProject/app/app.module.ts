import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ApplicationComponent} from './components/application/application.component';
import {ChattingComponent} from './components/chatting/chatting.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RoomListComponent} from './components/room-list/room-list.component'
import {MyPageComponent} from './components/my-page/my-page.component';
import {RoomService} from './services/room.service';

const routes : Routes = [
    {path : '', component : RoomListComponent},
    {path : 'chatting/:roomId', component : ChattingComponent},
    {path : 'myPage', component : MyPageComponent}
]

@NgModule({
    imports : [BrowserModule, RouterModule.forRoot(routes)],
    declarations : [ApplicationComponent,
        ChattingComponent,
        FooterComponent,
        NavbarComponent,
        RoomListComponent,
        MyPageComponent
    ],
    providers : [RoomService, 
        {provide : LocationStrategy, useClass : HashLocationStrategy}],
    bootstrap : [ApplicationComponent]
})
export class AppModule{}