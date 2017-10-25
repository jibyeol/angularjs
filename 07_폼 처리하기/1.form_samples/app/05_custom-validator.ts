import {Component, NgModule} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector : 'app',
    template : `
        <form [formGroup]="formModel" (ngSubmit)="onSubmit()">
            <div>
                <p>
                    Username : <input type="text" formControlName="username">
                    <span [hidden]="!formModel.hasError('required', ['username'])">Username is required</span>
                </p>
            </div>
            <div>
                <p>
                    SSN : <input type="text" formControlName="ssn">
                    <span [hidden]="!formModel.hasError('ssn', ['ssn'])">SSN is invalid</span>
                </p>
            </div>
            <div formGroupName="passwordsGroup">
                <div>
                    <p>
                        Password : 
                        <input type="password" formControlName="password">
                        <span [hidden]="!formModel.hasError('minlength', ['passwordsGroup', 'password'])">
                        Password is too short</span>
                    <p>
                </div>
                <div>
                    <p>
                        Confirm Password : 
                        <input type="password" formControlName="pconfirm">
                        <span [hidden]="!formModel.hasError('equal', ['passwordsGroup'])">
                        Passwords must be the same</span>
                    </p>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    `
})
class AppComponent {
    formModel : FormGroup;

    constructor() {
        this.formModel = new FormGroup({
            'username' : new FormControl('', Validators.required),
            'ssn' : new FormControl('', ssnValidator),
            'passwordsGroup' : new FormGroup({
                'password' : new FormControl('', Validators.minLength(5)),
                'pconfirm' : new FormControl('')
            }, equalValidator)
        });
    }

    onSubmit() {
        if(this.formModel.valid)
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

function ssnValidator (control : FormControl) : {[key: string]: any} { // 필드를 하나씩 검사하기 위해 FormControl 타입을 받는다.
    const value : string = control.value || ''; // null을 검사하지 않도록 객체의 값을 보정한다.
    const valid = value.match(/^\d{9}$/); // 정규표현식으로 문자열을 검사한다.
    return valid ? null : {ssn:true}; // 형식에 맞지 않으면 에러 객체를 반환한다. 성공시 null을 반환하고 에러가 없다는 뜻이다.
}
// 사용 -- 
// let ssnControl = new FormControl('', ssnValidator);

function equalValidator ({value} : FormGroup) : {[key : string] : any} {
    const [first, ...rest] = Object.keys(value || {}); // 폼 데이터의 모든 프로퍼티를 개별 변수로 할당
    const valid = rest.every(v => value[v] === value[first]); // 프로퍼티를 순회하며 값이 같은지 검사
    return valid ? null : {equal : true};
}

function asyncSsnValidator(control : FormControl) : Observable<any> {
	const value : string = control.value || '';
	const valid = value.match(/^\d{9}$/);
	return Observable.of(valid ? null : {ssn:true}).delay(1000);
}
// let ssnControl = new FormControl('', null, asyncSsnValidator);
// 비동기 유효성 검사기는 세번쨰 인자로 전달한다.