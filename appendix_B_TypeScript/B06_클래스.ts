// TypeScript에서 class는 코딩을 단순하게 하는 문법 설다일 뿐이다..
// JavaScript로 변환하면 결국 propotype을 활용한 상속이 된다.

// B.6.1 접근 제한자
// public, protected, private 제공. 생략하면 기본적으로 public.

class Person {
    public firstName : string;
    public lastName : string;
    public age : number;
    private _ssn : string;
    
    constructor(firstName: string, lastName: string, age: number, ssn: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._ssn = ssn;
    }
}

let p = new Person('John', 'Smith', 29, '123-90-4567');
console.log('Last name : ' + p.lastName + ' SSN : ' + p._ssn); // 컴파일러에서 에러 발생시킴

// JavaScript에서는 모두 public인 것으로 보인다.

class Person2 {
    constructor(public firstName : string, public lastName : string, 
            public age : number, private _ssn : string) {
        
    }
}

let p2 = new Person2('John', 'Smith', 29, '123-90-4567');
// 이렇게하면 인자를 받을 때, 접근 제한자를 지정할 수 있다.
// 지정된 접근 제한자로 클래스 변수를 만들고, 받은 인자로 초기값을 할당한다.

// B.6.2 메소드
class MyClass {
    doSomething(howManyTimes : number) : void {
        // do something
    }
}

let mc = new MyClass();
mc.doSomething(5);

// 정적 클래스 멤버
class MyClass2 {
    static doSomething(howManyTimes : number) : void {
        // do something
    }
}
MyClass2.doSomething(5);
// static 키워드를 사용하면, 인스턴스를 만들지 않고도 접근할 수 있다.
// 클래스의 인스턴스를 만든 뒤에 어떤 메소드에서 같은 클래스의 다른 메소드를 호출하려면 반드시 this를 사용해야한다.

class Person3 {
    constructor(public firstName : string, public lastName : string, 
            public age : number, private _ssn : string) {
        
    }
    
    get ssn () : string {
        return this._ssn;
    }
    set ssn (value : string) {
        this._ssn = value;
    }
}

let p3 = new Person3('John', 'Smith', 29, '123-90-4567');
p.ssn = '456-70-1234'; // setter

console.log('Last name : ' + p3.lastName + ' SSN : ' + p3._ssn);
// 세터와 게터에서 값의 유효성이나 함수 호출의 유효성을 검사하는 로직을 추가할 수 있다.
// this 키워드는 생략할 수 없다!!

// B.6.3 상속

class Employee extends Person3 {
	department : string; // 프로퍼티 선언
	
	constructor (firstName : string, lastName : string,
			age : number, _ssn : string, department : string) {
		super(firstName, lastName, age, _ssn); // 부모 클래스의 생성자를 반드시 호출해야함
		this.department - department;
	}
}

// 부모 클래스에 있는 메소드를 자식 클래스에서 사용하려면 클래스에 구현된 메소드를 참조하는 것처럼
// this를 사용하면 된다.
// 하지만, 명시적으로 부모클래스를 지정해서 함수를 사용하려면 super를 사용하면 된다.

// super : 부모클래스의 생성자 호출, 메소드 오버라이딩 한 경우 부모 것 쓸때