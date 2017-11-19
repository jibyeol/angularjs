import {TestBed, fakeAsync, inject, tick} from '@angular/core/testing';
import {Location} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {provideRoutes, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {routes} from '../app.routing';
import {WeatherService} from '../services/weather.service';
import {AppComponent} from '../components/app.component';
import {HomeComponent} from '../components/home.component'
import {WeatherComponent} from '../components/weather.component';

describe('Router', () => { // 라우터를 테스트하는 테스트 스윗 정의
    beforeEach(() => { // 각 테스트 실행 전에 실행에 필요한 컴포넌트와 프로바이더를 테스팅 모듈에 선언해서 테스트 환경 구성
        TestBed.configureTestingModule({
            imports : [ReactiveFormsModule, RouterTestingModule // 브라우저 주소창이 없는데, 이부분을 보완하기 위해 RouterModule 대신 RouterTestingModule을 사용한다.
                , RouterTestingModule.withRoutes(routes)], // routes를 가져와 테스팅 환경의 라우터로 설정
            declarations : [AppComponent, HomeComponent, WeatherComponent],
            providers : [{provide : WeatherService, useValue : {}}] 
            // WeatherComponent는 WeatherService를 의존성으로 주입받음.
            // 하지만 테스트에서 서비스의 로직은 중요하지 않기 때문에 빈 객체를 주입받도록 함
        })
    });

    it('should be able to navigate to home using commands API', // 라우터가 / 주소로 이동할 수 있는지 테스트
        fakeAsync(inject([Router, Location], (router : Router, location : Location) => { // Location은 RouterTestingModule에서 제공 됨
            TestBed.createComponent(AppComponent); // <router-outlet>을 사용하기 위해 AppComponent 인스턴스를 생성한다.
            router.navigate(['/']);
            tick(); // AppComponent 인스턴스 생성은 비동기로 이뤄지며, tick()함수를 사용해서 AppComponent생성이 끝나는 시점을 맞춤
            expect(location.path()).toBe('/');
        })
    ));

    it('should be able to navigate to weather using commands API', // 라우터가 /weather 주소로 이동할 수 있는지 테스트. navigate() 함수 사용
        fakeAsync(inject([Router, Location], (router : Router, location : Location) => {
            TestBed.createComponent(AppComponent);
            router.navigate(['/weather']);
            tick();
            expect(location.path()).toBe('/weather');
        })
    ));

    it('should be able to navigate to weather by URL', // 라우터가 /weather로 이동할 수 있는지 테스트. navigateUrl() 함수 사용
        fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
            TestBed.createComponent(AppComponent);
            router.navigateByUrl('/weather');
            tick();
            expect(location.path()).toEqual('/weather');
        })
    ));
})

/**
 * 검증하는 코드 이외의 부분은 테스트에 포함되지 않도록 하자!
 * WeatherService를 주입하는 객체는 빈 객체지만, 실제로는 서버와 통신하는 객체가 주입될 것이다.
 * 원하는 코드의 로직만 집중해서 테스트하기 위해서 외부 영향을 최대한 배제해야한다.
 */