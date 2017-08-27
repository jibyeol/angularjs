/*
모둘화가 잘된 애플리케이션에서는 당장 필요하지 않은 모듈을 첫 실행에 필요한 코드에 포함시키지 않는다.
그 기능이 필요할 때 관련 모듈을 로드한다.
모듈 로더인 RequireJS는 AMD 표준에 따라 구현된 서드 파티 라이브러리 중에서는 가장 유명한데, 
RequireJS를 사용하면 모듈 간 의존성을 정의하고 브라우저에서 필요할 때 원하는 모듈을 로드할 수 있다.
웹 브라우저에서 ES6 모듈을 지원하지 않더라도 폴리필(polyfill)을 이용하면 모듈기능을 사용할 수 있다.
*/

// A.9.1 import와 export
// import : 다른 파일에 있는 변수나 함수를 불러와 사용
// export : 모듈에 있는 변수나 함수, 클래스를 외부로 공개

// tax.js
export var taxCode;
export function calcTaxes(){
    
}
function doSomethingElse(){
    
}

import {taxCode, calcTaxes} from 'Tax'; // 확장자 생략 가능
if(taxCode == 1){
    //
}
calcTaxes();

// my_module.js
export default function(){
    
}
export var taxCode;

// main.js
import coolFunction, {taxCode as taxCode2016} from 'my_module'; // 새로운 이름을 붙이려면 as 키워드 사용
coolFunction(); // my_module의 default function