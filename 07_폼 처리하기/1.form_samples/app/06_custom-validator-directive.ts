import {Directive} from '@angular/core';
import { NG_VALIDATORS, FormControl, FormGroup } from "@angular/forms";

function ssnValidator (control : FormControl) : { [key : string] : any } {
	const value : string = control.value || '';
	const valid = value.match(/^\d{9}$/);
	return valid ? null : { ssn : true };
}

@Directive({
    selector : '[ssn]', // [] : 어트리뷰트로 적용된다는 의미
    providers : [{
        provide : NG_VALIDATORS, // ssnValidator() 함수를 NG_VALIDATORS 프로바이더 형식으로 등록
        useValue : ssnValidator,
        multi : true // 유효성 검사기를 하나만 받지 않고, 배열형태로 받는다.
    }]
})
export class SsnValidatorDirective {}

function equalValidator ({ value } : FormGroup) : { [key : string] : any } {
	const [first, ...rest] = Object.keys(value || {});
	const valid = rest.every(v => value[v] === value[first]);
	return valid ? null : { equal : true };
}

@Directive({
	selector : '[equal]',
	providers : [{ provide : NG_VALIDATORS, useValue : equalValidator, multi : true }]
})
export class EqualValidatorDirective {
}