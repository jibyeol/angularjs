// A.8.1 콜백 지옥(callback hell)
function getProductDetails(){
    setTimeout(function(){
        console.log('Getting customers');
        setTimeout(function(){
            console.log('Getting orders');
            setTimeout(function(){
                console.log('Getting products');
                    setTimeout(function(){
                    console.log('Getting produt details');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
// 가독성 심각
// 콜백지옥, 공포의 삼각형이라고 한다.

// A.8.2 프로미스(Promises)
// - Fulfilled : 작업이 성공한 경우
// - Rejected : 작업이 실패한 경우. 에러를 반환
// - Pending : 작업이 아직 진행중인 경우
function getCustomers() {
    return new Promise(
        function (resolve, reject) {
            console.log('Getting customers');
            
            // 서버 응답을 setTimeout() 함수로 대신!
            setTimeout(function(){
                var success = true;
                if(success){
                    resolve('John Smith'); // fulfilled 상태의 Promise 객체 반환
                } else {
                    reject("Can't get customers"); // rejected 상태의 Promise 객체 반환
                }
            }, 1000);
        }
    );
}

let promise = getCustomers()
        .then((cust) => console.log(cust))
        .catch((err) => console.log(err));
console.log('Invoked getCustomers. Waiting for results'); // 결과보다 먼저 출력됨! 비동기로 실행된다는 뜻~

function getCustomers() {
    let promise = new Promise(
        function (resolve, reject) {
            console.log('Getting customers');
            
            // 서버 응답을 setTimeout() 함수로 대신!
            setTimeout(function(){
                var success = true;
                if(success){
                    resolve('John Smith'); // fulfilled 상태의 Promise 객체 반환
                } else {
                    reject("Can't get customers"); // rejected 상태의 Promise 객체 반환
                }
            }, 1000);
        }
    );
    return promise;
}

function getOrders(customer) {
    let promise = new Promise(
        function(resolve, reject) {
            setTimeout(function(){
                let success = true;
                if(success) {
                    resolve(`Found the order 123 for ${customer}`);
                } else {
                    reject("Can't get orders");
                }
            }, 1000);
        }
    );
    return promise;
}

getCustomers()
        .then((cust) => {
            console.log(cust);
            return cust;
        })
        .then((cust) => getOrders(cust))
        .then((order) => console.log(order))
        .catch((err) => console.log(err));
console.log('Chained getCustomers and getOrders. Waiting for results');
// 작업이 여러 단계라도 then() 함수를 얼마든지 추가해서 원하는 작업을 계속 추가할 수 있다.
// then() 중에 에러가 발생하거나 rejected 상태의 Promise객체를 반환하면 catch() 함수를 만날때 까지 중간에 있는 then() 함수는 모두 건너뛴다.

getCustomers()
        .then((cust) => getOrders(cust))
        .catch((err) => console.log(err));
// 출력을 빼고 원하는 동작에 필요한 로직만 남기면 이렇다.

// A.8.3 프로미스 병렬 처리
// Promise 객체에서 제공하는 all() 메소드를 사용함ㄴ 프로미스 함수가 모두 성공하면 then()을 실행하고,
// 하나라도 실패하면 catch()를 실행한다.
Promise.all([getCustomers(), getOrders()])
        .then((order) => console.log(order));