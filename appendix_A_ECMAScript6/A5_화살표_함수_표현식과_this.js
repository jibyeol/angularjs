// ES6에서는 화살표 함수 표현식(arrow function expression)을 제공
// 익명함수를 좀 더 짧게 정의할 수 있고, this가 가리키는 객체를 확실하게 파악할 수 있다.

let sum = (arg1, arg2) => arg1 + arg2;

(arg1, arg2) => {
    // do somethig
    return arg1 + arg2;
} // 함수 몸체가 여러줄 이면, 중괄호 필요하고, return을 생략할 수 X

() => {
    // do something
    return 'abc';
} // 인자가 없으면 빈괄호

arg1 => {
    // do somethig
    return arg1 + 5;
} // 인자가 하나면 괄호 생략가능

const myArray = [1, 2, 3, 4, 5];
console.log("sum = " + myArray.reduce((a, b) => a + b));
console.log("event number = " + myArray.filter(value => value % 2 == 0));
console.log("event number = " + myArray.filter(value => value % 2 == 0).reduce((a,b) => a+b));

// this
function StockQuoteGenerator (symbol) {
    this.symbol = symbol;
    
    setInterval(function getQuote(){
        console.log('The price quote for ' + this.symbol + ' is ' + Math.random()); // undefined
    }, 1000);
}

var stockQuoteGenerator = new StockQuoteGenerator("IBM");
// getQuote 함수가 사용하는 this는 전역객체이다.
// getQuote 함수가 선언되는 위치는 StockQuoteGenerator 함수 안이 아니라 전역이기 때문!
// StockQuoteGenerator 함수 안에서 this를 that으로 할당하고 that.symbol로 참조하면 원하는대로 작동한다.
// call(), apply(), bind() 함수는 this가 가리키는 객체를 변경할 수 있기 떄문에, 이 함수를 사용하려면 this를 사용할 떄 조금 더 조심해야한다.

function StockQuoteGenerator2 (symbol) {
    this.symbol = symbol;
    
    setInterval(() => {
        console.log('The price quote for ' + this.symbol + ' is ' + Math.random()); // IBM
    }, 1000);
}

var stockQuoteGenerator2 = new StockQuoteGenerator2("IBM");
// function 키워드 대신 화살표 함수 표현식을 사용해서 this 문제를 해결한다.

function calcTaxES5(){
    console.log('ES5. Calculating tax for customers with the income ' + arguments[0]);
    var customers = [].slice.call(arguments, 1);
    customers.forEach(function (customer) {
        console.log('Processing ', customer);
    });
}

calcTaxES5(5000, 'Smith', 'Joghson', 'McDonald');
calcTaxES5(750000, 'Olsan', 'Clinton');

function calcTaxES6(income, ...customers) {
    console.log('ES6. Calculating tax for customers with the income ' + income);
    customers.forEach(function (customer) {
        console.log('Processing ', customer);
    });
}

calcTaxES6(5000, 'Smith', 'Joghson', 'McDonald');
calcTaxES6(750000, 'Olsan', 'Clinton');

function calcTaxSpread(customer1, customer2, customer3, income) {
  console.log('ES6. Calculating tax for cutomers with the imcome ', income);
  console.log('Processing ', customer1, customer2, customer3);
}

var customers = ['Smith', 'Johnson', 'McDonald'];
calcTaxSpread(...customers, 50000); 
// 그냥 순서대로 들어감. customers가 하나 더 있으면, 4번쨰가 income이 되고, 2개밖에 없으면 income은 undefined가 된다.

// A.5.2 제너레이터(Generator)
// 제너레이터 함수는 몇 번이고 멈출 수 있고, 멈춘 시점을 다시 이어서 실행할 수도 있다. 다른 제너레티터 함수에 조작 권한을 넘길 수도 있다.
// function 키워드와 함수 이름 사이에 애스터리스크(*)를 붙여서 선언
// yield 키워드를 만나면 함수 실행이 멈추고, 외부에서 next() 함수를 호출하면 멈췄던 함수가 다시 실행된다.

function* doSomething() {
    console.log('Started processing');
    yield;
    console.log('Resumed processing');
}

var iterator = doSomething();
iterator.next();
iterator.next();

function* getStockPrice(symbol) {
    while(true) {
        yield Math.random() * 100;
        console.log(`resuming for ${symbol}`);
    }
}

let generator = getStockPrice('IBM'); // 함수 몸체가 실행되지 않음

const limitPrice = 15;
let price = 100;

while(price > limitPrice ){
    price = generator.next().value;
    console.log(`The generator returned ${price}`);
}

console.log(`buying at ${price} !!!`);

// A.5.3 비구조화(Destructuring)
// 객체 인스턴스화를 만듦 = 객체를 메모리에 생성
// 비구조화 = 객체를 분해

// 객체 분해
function getStock(){
    return {
        symbol : 'IBM',
        price : 100.00
    };
}

let {symbol, price} = getStock();
console.log(`The price of ${symbol} is ${price}`);
// 비구조화 표현식은 어떤 형태의 데이터를 한 번에 여러 변수로 분해할 떄 사용되는 문법이다.


let {sym, price} = getStock();
console.log(`The price of ${sym} is ${price}`);
// 다른 이름으로하면, undefined가 된다.

let {symbol : sym, price} = getStock();
console.log(`The price of ${sym} is ${price}`);
// 원래 프로퍼티 이름을 같이 사용해서 명시적으로 할당할 수 있다.

let {symbol : sym, price, stockExchange} = getStock();
console.log(`The price of ${sym} is ${price} ${stockExchange}`);
// stockExchange는 없어서 undefined가 된다.

let {symbol : sym, price, stockExchange = "NASDAQ"} = getStock();
// 기본값 지정 가능!

let msft = {
    symbol : 'MSFT',
    lastPrice : 50.00,
    exchange : {
        name : 'NASDAQ',
        tradingHours : '9:30am-4pm'
    }
};

function printStockInfo(stock) {
    let {symbol, exchange : {name, tradingHours}} = stock;
    console.log(`The ${symbol} stock is traded at ${name}, ${tradingHours}`);
}

printStockInfo(msft);
// The MSFT stock is traded at NASDAQ, 9:30am-4pm

// 배열 분해
let [name1, name2] = ['Smith', 'Clinton'];
console.log(`name1 = ${name1}, name2 = ${name2}`);

let [, name] = ['Smith', 'Clinton'];
// 두번째 항목만 추출할 때!

function getCustomers(){
    return ['Smith', , , 'Gonzales'];
}

let [firstCustomer, , , lastCustomer] = getCustomers();
console.log(`${firstCustomer} ${lastCustomer}`);
// 배열을 분해할때는 인덱스 기준으로 값을 추출한다.

let customers = ['Smith', 'Clinton', 'Lou', 'Gonzales'];
let [firstCust, secondCust, ...otherCust] = customers;
console.log(`${firstCust} ${secondCust}`);
console.log(otherCust);

function processFirstTwoCustomers( [firstCust, secondCust, ...otherCust] ) {
    console.log(`${firstCust} ${secondCust}`);
    console.log(otherCust);
}
// 함수도 마찬가지로 사용