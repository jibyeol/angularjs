import {Component, NgModule} from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {SsnValidatorDirective, EqualValidatorDirective} from './06_custom-validator-directive';

@Component({
    selector : 'app',
    template : `
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value, f.valid)" novalidate>
            <div>
                <p>
                    Username : <input type="text" name="username" ngModel required>
                    <span [hidden]="!f.form.hasError('required', ['username'])">Username is required</span>
                </p>
            </div>
            <div>
                <p>
                    SSN : <input type="text" name="ssn" ngModel ssn>
                    <span [hidden]="!f.form.hasError('ssn', ['ssn'])">SSN is invalid</span>
                </p>
            </div>
            <div ngModelGroup="passwordsGroup" equal>
                <div>
                    <p>
                        Password : 
                        <input type="password" name="password" ngModel minlength="5">
                        <span [hidden]="!f.form.hasError('minlength', ['passwordsGroup', 'password'])">
                        Password is too short</span>
                    <p>
                </div>
                <div>
                    <p>
                        Confirm Password : 
                        <input type="password" name="pconfirm" ngModel>
                        <span [hidden]="!f.form.hasError('equal', ['passwordsGroup'])">
                        Passwords must be the same</span>
                    </p>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    `
})
class AppComponent{
    onSubmit(formValue : any, isFormValid : boolean) {
        if(isFormValid) {
            console.log(formValue);
        }
    }
}

@NgModule({
    imports : [BrowserModule, FormsModule],
    declarations : [AppComponent, EqualValidatorDirective, SsnValidatorDirective],
    bootstrap : [AppComponent]
})
class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);