import {Component, NgModule} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector : 'app',
    template : `
        <form [formGroup]="formModel" (ngSubmit)="onSubmit()">
            <div>Username : <input type="text" formControlName="username"></div>
            <div>SSN : <input type="text" formControlName="ssn"></div>
            <div formGroupName="passwordsGroup">
                <div>Password : <input type="password" formControlName="password"></div>
                <div>Confirm Password : <input type="password" formControlName="pconfirm"></div>
            </div>
            <button type="submit">Submit</button>
        </form>
    `
})
class AppComponent {
    formModel : FormGroup;

    constructor(fb : FormBuilder) {
        this.formModel = fb.group({
            'username' : ['user'], // 초기값, 유효성 검사 함수, 비동기 유효성 검사 함수
            'ssn' : [''],
            'passwordsGroup' : fb.group({
                'password' : [''],
                'pconfirm' : ['']
            })
        });
    }

    onSubmit() {
        console.log(this.formModel.value);
    }
}

@NgModule({
	imports : [BrowserModule, ReactiveFormsModule],
	declarations : [AppComponent],
	bootstrap : [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);