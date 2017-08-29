// ������ �����ϸ鼭 Ÿ�� ����
let name1 = 'John Smith'; 
// Ÿ���� �������� �ʾƵ� �Ҵ�Ǵ� ���� �������� Ÿ���� �����ϰ� Ÿ�� üũ�� �����Ѵ�.
// �̸� Ÿ�� �߷��̶�� �Ѵ�.
let name2 : string = 'John Smith';

// �� �������� string Ÿ�Ը� �Ҵ��� �� �ִ�.

name1 = 123;
name2 = 123;
// �Ѵ� ����!

let salary : number;
let name : string = 'Alax';
let isValid : boolean;
let customerName : string = null;
// ��� Ÿ���� any Ÿ���� ���� Ÿ���̴�.
// Ÿ���� ������� ������ any Ÿ���� ������ ������ ����. ó������ ��� Ÿ���� ���

let name3 : any = 'John Smith';
name3 = 123;
// �� �����Ѵ�.


// B.5.1 �Լ�
function calcTax (state, income, dependents) {
	if(state === 'NY'){
		return income * 0.06 - dependents * 500;
	} else if(state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}

let tax = calcTax('NJ', 50000, 2);
let tax2 = calcTax('JN', 50000, 'two'); // �����ϱ� ������ ������ �Ǵ� ���� �� �� ����.

function calcTax2 (state : string, income : number, dependents : number) : number {
	if(state === 'NY'){
		return income * 0.06 - dependents * 500;
	} else if(state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}

let tax3 = calcTax2('JN', 50000, 'two'); // ������ ������ ����!
let tax4 : string = calcTax2('JN', 50000, 'two'); // �����ϸ� �����Ϸ����� ������ �߻���Ŵ

// B.5.2 ���� �⺻��
// ���� �⺻���� ������ ���ں��� ä������ �Ѵ�!
// ù ��? ���ڸ� �⺻���� �־��ָ� �������� �ʴ´�.

function calcTax3(income : number, dependents : number, state : string = 'NY') : number {
	if(state === 'NY'){
		return income * 0.06 - dependents * 500;
	} else if(state === 'NJ') {
		return income * 0.05 - dependents * 300;
	}
}

let tax5 = calcTax3(50000, 2);
let tax6 = calcTax3(50000, 2, 'NY');

// B.5.3 �ɼ� ����
// ������ �� �ִ� �Լ��� ���� �̸� �ڿ� ?�� �ٿ��� �ɼ� ���ڷ� ������ �� �ִ�.
// ���������� ä�������Ѵ�.

function calcTax4(income : number, state : string = 'NY', dependents? : number) : number {
    let deduction : number;
    
    if(dependents) { // �ɼ��� ���ڰ� ���޵Ǿ����� Ȯ�� �ʿ�!
        dedeuction = dependents * 500;
    } else {
        deduction = 0;
    }
    
    if(state === 'NY') {
        return income * 0.06 - deduction;
    } else if(state === 'NJ') {
        return income * 0.05 - deduction;
    }
}

console.log('Your tax is ', calcTax4(50000));
console.log('Your tax is ', calcTax4(50000, 'NJ'));
console.log('Your tax is ', calcTax4(50000, 'NJ', 2));

// B.5.4 ȭ��ǥ �Լ� ǥ����
let getName = () => 'John Smith';
console.log(getName());

let getNameUpper = () => {
    let name = 'Peter Luger'.toUpperCase();
    return naem;
}
console.log(getNameUpper());
// ȭ��ǥ �Լ� ǥ������ this Ű���� ������ �ذ��ϴ� ����̱⵵ �ϴ�.

function StockQuoteGeneratorArrow(symbol : string) {
    this.symbol = symbol;
    
    setInterval(() => {
        console.log('StockQuoteGeneratorArrow. The price quote for ' + this.symbol + ' is ' + Math.random());
    }, 1000);
}
let stockQuoteGeneratorArrow = new StockQuoteGeneratorArrow('IBM');

function StockQuoteGeneratorAnonymous(symbol : string) {
    this.symbol = symbol;
    
    setInterval(function() {
        console.log('StockQuoteGeneratorArrow. The price quote for ' + this.symbol + ' is ' + Math.random());
    }, 1000);
}
let stockQuoteGeneratorAnonymous = new StockQuoteGeneratorAnonymous('IBM');

// stockQuoteGeneratorArrow�� IBM, stockQuoteGeneratorAnonymous�� undefined ����Ŵ
// �Ʒ��� this�� window ��ü�� ��.


// �Լ� �����ε�
// JavaScript�� �������� ����
// TypeScript�� ���������� �ᱹ JavaScript�� ��ȯ�Ǹ鼭 �ϳ��� ��������.