// A.6.1 forEach()
var numbersArray = [1, 2, 3, 4];
numbersArray.description = 'four numbers';

numbersArray.forEach((n) => console.log(n));
// 1 2 3 4 가 출력됨. description는 무시된다.
// forEach 는 중간에 멈출 수 없고, 멈춰야한다면 every()를 사용!
// 컬렉터에 있는 테이터만 검색

// A.6.2 for-in
for(let n in numbersArray) {
    console.log(n);
}
// 0 / 1 / 2 / 3 / description

for(let n in numbersArray) {
    console.log(numbersArray[n]);
}
// 1 / 2 / 3 / 4 / four numbers
// 데이터와 프로퍼티 모두 순회

// A.6.3 for-of
// 데이터 순회. break; 로 종료할 수 있다.
// 컬렉션의 값 기준 순회. 데이터 컬렉션에 속하지 않은 프로퍼티는 무시!
console.log('Running for of for the entire array');
for(let n of numbersArray){
    console.log(n);
}

console.log('Running for of with a break');
for(let n of numbersArray){
    if(n > 2) break;
    console.log(n)
}

for(let char of "John") {
    console.log(char);
}
// Array, Map, Set과 같이 반복가능한 객체에 모두 사용가능.
// 문자열도 사용할 수 있다.
// J / o / h / n