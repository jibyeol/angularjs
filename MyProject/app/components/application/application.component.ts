import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector : 'myapplication',
    templateUrl : 'app/components/application/application.component.html',
    styleUrls : ['app/components/application/css/bootstrap.min.css',
        'app/components/application/css/style.css',
        'app/components/application/css/glyphicons.css',
        'app/components/application/css/font-awesome.min.css',
        'app/components/application/css/style-responsive.css'
    ],
    encapsulation : ViewEncapsulation.None
})
export class ApplicationComponent{}