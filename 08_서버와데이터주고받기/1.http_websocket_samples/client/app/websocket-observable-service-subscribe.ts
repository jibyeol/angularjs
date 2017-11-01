import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {WebSocketService} from './websocket-observable.service';

@Component({
    selector : 'app',
    providers : [WebSocketService],
    template : `
        <h1>Angular subscriber to WebSocket service</h1>
        <p>{{messageFromServer}}</p>
        <button (click)="sendMessageToServer()">Send msg to Server</button>
    `
})
class AppComponent {
    messageFromServer : string;

    constructor(private wsService : WebSocketService) {
        this.wsService.createObservableSocket('ws://localhost:8085')
            .subscribe(
                data => this.messageFromServer = data,
                error => console.log(error),
                () => console.log('The Observeable stream is complete')
            );
    }

    sendMessageToServer() {
        console.log('Sending message to WebSocket server');
        this.wsService.sendMessage('Hello from client');
    }
}

@NgModule({
    imports : [BrowserModule],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);