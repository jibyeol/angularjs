// 변수를 선언하면서 타입 지정
let name1 = 'John Smith'; 
// 타입을 지정하지 않아도 할당되는 값을 기준으로 타입을 예측하고 타입 체크를 수행한다.
// 이를 타입 추론이라고 한다.
let name2 : string = 'John Smith';

// 이 변수에는 string 타입만 할당할 수 있다.

name1 = 123;
name2 = 123;
// 둘다 에러!

let salary : number;
let name : string = 'Alax';
let isValid : boolean;
let customerName : string = null;
// 모든 타입은 any 타입의 하위 타입이다.
// 타입을 명시하지 않으면 any 타입을 지정한 것으로 간주. 처음에는 모든 타입을 허용

let name3 : any = 'John Smith';
name3 = 123;
// 잘 동작한다.


// B.5.1 함수
function calcTax (state, income, dependents) {
	if(state === 'NY'){
		return income * 0.06 - dependents * 500;
	} else if(state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}

let tax = calcTax('NJ', 50000, 2);
let tax2 = calcTax('JN', 50000, 'two'); // 실행하기 전까지 문제가 되는 것을 알 수 없다.

function calcTax2 (state : string, income : number, dependents : number) : number {
	if(state === 'NY'){
		return income * 0.06 - dependents * 500;
	} else if(state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}

let tax3 = calcTax2('JN', 50000, 'two'); // 컴파일 에러가 난다!
let tax4 : string = calcTax2('JN', 50000, 'two'); // 실행하면 컴파일러에서 에러를 발생시킴

// B.5.2 인자 기본값
// 인자 기본값은 마지막 인자부터 채워져야 한다!
// 첫 번? 인자만 기본값을 넣어주면 동작하지 않는다.

function calcTax3(income : number, dependents : number, state : string = 'NY') : number {
	if(state === 'NY'){
		return income * 0.06 - dependents * 500;
	} else if(state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}

let tax5 = calcTax3(50000, 2);
let tax6 = calcTax3(50000, 2, 'NY');

// B.5.3 옵션 인자
// 생략할 수 있는 함수의 인자 이름 뒤에 ?를 붙여서 옵션 인자로 지정할 수 있다.
// 마지막부터 채워져야한다.
