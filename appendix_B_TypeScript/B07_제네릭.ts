class Person {
	name : string;
}

class Employee extends Person {
	department : number;
}

class Animal {
	breed : string;
}

let workers : Array<Person> = []; // 제네릭 사용
workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal(); // 컴파일 에러 발생! --> Array<any>로 바꾸면 에러안남!

// ES6에서는 제네릭을 지원하지 않는다.
// 언제까지나 컴파일 단계에서만 유효하다.
// 트랜스파일된 코드에서 제네릭 관련된 내용은 확인할 수 없다.

function saySomething<T>(data : T) {

}

saySomething<string>('Hello');
saySomething<string>(123); // 컴파일 에러 발생!