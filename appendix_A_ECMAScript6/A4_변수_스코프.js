// ES5 에서 변수를 선언한 위치와 관계없이 var 키워드가 스코프의 제일 위로 옮겨져 선언되었다 = 호이싕(hoisting)
// this 키워드 사용도 Java나 c#과 다르게 직관적이지 않았다.

// A.4.1 변수 호이스팅

function foo() {
    for(var i = 0; i < 10; i++){}
    console.log('i='+i);
}

var customer = 'Joe';

(function(){
    console.log('The name of the customer inside the function is ' + customer); // undefined 
    var customer = 'Mary';
})();

console.log('The name of the customer inside the function is ' + customer); // Joe
// ES5에서 변수 선언이 선언 범위의 제일 위로 끌어 올려지지만, 변수의 초기화는 변수가 선언된 곳에서 처리된다.
// 그래서 지역 범위로 선언되어 아직 초기화되지 않은 customer 변수를 콘솔에 출력하면 undefined가 출력되는 것이다.
// 이 변수의 이름을 바꿔야 전역 범위의 cutomer 변수에 접근할 수 있다.

// 함수도 호이스팅이되며, 함수가 선언되기 전에도 함수를 실행할 수 있다.

doSomething();

function doSomething(){
    console.log("I'm doing somethid");
}

// A.4.2 let과 const를 사용하는 변수 스코프
"use strict";

let customer2 = 'Joe';

(function(){
    console.log('The name of the customer inside the function is ' + customer2);
    if(2 > 1) {
        let customer2 = 'Mary';
        console.log('The name of the customer inside the function is ' + customer2);
    }
})();

for(let i = 0; i < 5; i++){}

console.log('i='+i); // prints Uncaught ReferenceError: i is not defined

// for 루프 안에 let으로 변수를 선언하면 이 변수는 for 루프 안에서만 접근가능하다.

// const 키워드로 선언하는 변수도 let과 접근 범위가 같고, 유일하게 다른 점은 const 키워드로 선언한 변수는 상수가 되고
// 선언할 때 할당된 값을 이후에 변경할 수 없다는 점이다.
// 변하는 변수 -> let
// 변하지 않는 변수 -> const