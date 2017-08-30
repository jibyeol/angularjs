// 컴포넌트 만들때 @Component 어노테이션 사용
// Angular에서 어노테이션 파싱하고 프레임워크에 필요한 코드를 추가로 생성.

@Compoent({
    // HTML 문서에 컴포넌트가 위치할 셀렉터를 지정하거나
    // 컴포넌트를 렌더링할 템플릿을 지정
    // 스타일도 지정
})
class HelloWorldComponent {
    // 컴포넌트 로직은 여기에 작성
}

import { Component } from '@angular/core';
// 컴포넌트 어노테이션을 로드!

// Angular가 제공하는 어노테이션은 TypeScript의 데코레이터 문법을 사용해서
// Angular 프레임워크에서 특정 기능을 제공하기 위해 만든 것이며,
// 개발자가 데코레이터 문법을 사용해서 새로운 어노테이션을 만들 수도 있다.