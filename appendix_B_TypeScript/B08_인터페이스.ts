// ES6에서는 인터페이스가 없다.

// B.8.1 커스텀 타입으로 사용하기

interface IPerson {
	firstName : string,
	lastName : string,
	age : number,
	ssn? : string; // 생략가능
}

class Person {
	constructor (public config : IPerson) {} // 생성자에서 IPerson을 받음
}

let aPerson : IPerson = { // IPerson 인터페이스에 맞게 객체 생성 (객체 리터럴 문법 사용)
	firstName : 'John',
	lastName : 'Smith',
	age : 29
}

let p = new Person(aPerson); // IPerson 타입의 인자 전달
console.log('Last name : ' + p.config.lastName);

// 두 객체의 형태가 같으면 호환이 된다.
// aPerson에서 타입을 지정하지 않고 리터럴을 사용했지만,
// 이 객체 리터럴과 IPerson은 호환되는 것으로 판단해서 에러가 나지 않는다.

// IPerson의 멤버 이름이나 타입을 바꾸면 컴파일 에러가 발생한다.
// 하지만 아래처럼 IPerson에서 정의한 멤버 외에 다른 멤버를 추가하면 
// 에러가 발생하지 않는다.
let anEmployee : IPerson = {
	firstName : 'John',
	lastName : 'Smith',
	age : 29,
	department : 'HR'
};

// B.8.2 추상 클래스로 사용하기

interface IPayable {
	increasePay (percent : number) : boolean
}

class Person {
	// 구체적인 코드는 생략
	constructor(){}
}

class Employee extends Person implements IPayable {
	increasePay(percent : number) : boolean {
		console.log('Increasing salary by ' + percent);
		return true;
	}
}