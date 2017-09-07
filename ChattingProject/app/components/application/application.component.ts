import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector : 'chatting-application',
    templateUrl : 'app/components/application/application.component.html',
    styleUrls : ['app/components/application/application.component.css',
                 'app/components/application/bootstrap.min.css']
    encapsulation : ViewEncapsulation.None
})
export class ApplicationComponent{}