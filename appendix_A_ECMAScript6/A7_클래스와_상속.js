class Tax {
    // tax 객체에서 사용하는 코드
}

class NJTax extends Tax {
    // New Jersey Tax 객체에서 사용하는 코드
}

var njTax = new NJTax();
var tax1 = new Tax();
var tax2 = new Tax();

// 클래스의 선언은 호이스팅되지 않는다. 따라서 제일 위에 선언되어야한다.

// ES5에서는 인스턴스를 새로 만들면 메소드가 중복되어 비효율적!
// 코드의 중복을 줄이기위해서 프로토타입에 정의!
// ES6은 더편해졌다.

class Tax2 {
    calcTax(){
        // 세금을 계산하는 코드
    }
}

// 멤버변수는 지원하지 않는다.
class Tax3{
    var income;
}

// A.7.1 생성자
// constructor() 메소드는 객체의 인스턴스가 만들어질때 딱 한번 실행된다.
class Tax{
    constructor(income){
        this.income = income;
    }
}

var myTax = new Tax(50000);

class NJTax extends Tax {
    
}

var njTax = new NJTax(50000);
console.log(`The income in njTax instance is ${njTax.income}`);

// A.7.2 정적변수(static variables)
// 클래스의 정적변수는 클래스 밖에서 정의. 모든 A 인스턴스가 공유하고 싶으면!
class A{}
A.counter = 0;

var a1 = new A();
A.counter ++;
console.log(A.counter);

var a2 = new A();
A.counter ++;
console.log(A.counter);
// 클래스를 통해서 접근해야한다.

// A.7.3 게터, 세터, 메소드 정의
var Tax = {
    taxableIncome : 0,
    get income() {return this.taxableIncome;},
    set income(value) {this.taxableIncome = value;}
};

Tax.income = 50000;
console.log('Income : ' + Tax.income);
// function 키워드를 생략해도 메소드를 정의할 수 있다.
var Tax = {
    taxableIncome : 0,
    get income() {return this.taxableIncome;},
    set income(value) {this.taxableIncome = value;},
    calculateTax() {return this.taxableIncome * 0.13;}
};
Tax.income = 50000;
console.log(`For the income ${Tax.income} your tax is ${Tax.calculateTax()}`);


class Tax {
    constructor(income) {
        this.income = income;
    }
    
    calculateFederalTax() {
        console.log(`Calculating federal tax for income ${this.income}`);
    }
    
    calcMinTax(){
        console.log(`In Tax. Calculating min tax`);
        return 123;
    }
}

class NJTax extends Tax {
    constructor(income, stateTaxPercent) {
        super(income);
        this.stateTaxPercent - stateTaxPercent;
    }
    
    calculateStateTax(){
        console.log(`Calculating state tax for income ${this.income}`);
    }
    
    calcMinTax(){
        super.calcMinTax();
        console.log('In NJTax. Adjusting min tax');
    }

}

var theTax = new NJTax(50000, 6);

theTax.calculateFederalTax();
theTax.calculateStateTax();

theTax.calcMinTax();