import {Injector} from '@angular/core';
import {async, getTestBed, TestBed} from '@angular/core/testing';
import {Response, ResponseOptions, HttpModule, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {WeatherService, WEATHER_URL_BASE, WEATHER_URL_SUFFIX} from './weather.service';

describe('WeaterhService', () => {
    let mockBackend : MockBackend; // Http대신 MockBackend 사용
    let service : WeatherService;
    let injector : Injector;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [HttpModule],
            providers : [
                {provide : XHRBackend, useClass : MockBackend},
                {provide : WEATHER_URL_BASE, useValue : ''},
                {provide : WEATHER_URL_SUFFIX, useValue : ''},
                WeatherService
            ]
        });
        injector = getTestBed(); // Injector 인스턴스를 가져온다. 
        // TestBed 클래스는 Injector 인터페이스로 구현되어있기 때문에 getTestBed() 함수로
        // TestBed의 인스턴스를 가져오면 Injector 클래스의 API를 사용할 수 있다.
    });

    beforeEach(() => {
        mockBackend = injector.get(XHRBackend); // 실제로는 MockBackend를 가져옴 (TestBed.configureTestingModule에 선언되어있는 것)
        service = injector.get(WeatherService); // WeatherService를 그대로 가져옴
    });

    it('getWeather() should return weather for Seoul', async(() => {
        let mockResponseData = { // 서버 요청이 있을 때 응답할 목 객체를 만듦.
            cod : '200',
            name : 'Seoul',
            main : {
                temp : 14,
                humidity : 44
            }
        };

        // 서버의 응답을 흉내냄
        // MockBackend 객체의 MockConnection 객체를 구독해서 서버를 설정
        mockBackend.connections.subscribe((connection : MockConnection) => {
            // ResponseOptions 인스턴스를 생성하면서 body 프로퍼티로 mockResponseData를 전달
            let responseOpts = new ResponseOptions({
                body : JSON.stringify(mockResponseData)
            });
            // MockConnection에서 발생하는 옵저버블 스트림을 WeatherService가 구독해서 서버의 응답을 받은 것으로 처리
            connection.mockRespond(new Response(responseOpts));
        });

        // getWeather 함수는 Http 모듈을 사용하지만 테스트 환경에서는 MockBackend가 주입되어 Http 모듈의 역할을 대신한다.
        // getWeather('Seoul')을 실행하면 실제 서버와 통신하지 않고, MockBackend 객체에 설정한 목 데이터가 바로 반환된다.
        service.getWeather('Seoul').subscribe(weather => {
            expect(weather.place).toBe('Seoul');
            expect(weather.humidity).toBe(44);
            expect(weather.temperature).toBe(14);
        })
    }))
})