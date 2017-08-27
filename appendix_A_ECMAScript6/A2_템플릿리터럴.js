// A.2 템플릿 리터럴
var customerName = 'John Smith';
console.log(`Hello ${customerName}`);

function getCustomer(){
    return 'Allan Lou';
}
console.log(`Hello ${getCustomer()}`);

var message = `Please enter the password that
				has at least 8 characters and
				include a capital letter`;
console.log(message);

// mytag`Hello ${name}`
// 템플릿 스트링 앞에 함수 이름을 붙이면, 문자열이 먼저 처리되고 이 문자열을
// 인자로 전달하면서 함수로 사용될 수 있다.
// 이떄 문자열 요소는 각 배열의 항목으로 변환되어 전달된다.

function currecyAdjustment (stringParts, region, amount){
    console.log(stringParts);
    console.log(region);
    console.log(amount);

    var sign;
    if(region === 1){
        sign = '$';
    } else {
        sign = '\u20AC';
        amount = 0.9 * amount;
    }

    return `${stringParts[0]}${sign}${amount}${stringParts[2]}`;
}

var amount = 100;
var region = 2;
var message = currecyAdjustment`You've earned ${region} ${amount}!`;

console.log(message);