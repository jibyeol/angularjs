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
