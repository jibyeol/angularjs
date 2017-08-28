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