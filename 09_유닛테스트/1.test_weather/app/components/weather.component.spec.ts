import {TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {WeatherComponent} from './weather.component';
import {WeatherService} from '../services/weather.service';

describe('WeatherComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports : [ReactiveFormsModule],
            declarations : [WeatherComponent],
            providers : [{provide : WeatherService, useValue : {}}] // WeatherService 객체 대신 빈 객체를 주입한다.
        })
    });

    it('should display the weather ', () => {
        // WeatherComponent 인스턴스를 생성하고 fixture 변수에 할당한다. createComponent()는 ComponentFixture를 반환한다.
        let fixture = TestBed.createComponent(WeatherComponent);
        let element = fixture.nativeElement; // WeatherComponent의 HTML 엘리먼트 부분을 변수로 할당해서 작성하는 코드 양을 줄임
        let component = fixture.componentInstance; // 클래스 부분을 변수로 할당
        component.weather = {place:'Seoul', humidity:44, temperature:15}; // 서버에서 데이터를 가져온 것으로 간주. 원하는 데이터 입력.
        fixture.detectChanges(); // 변화 감지 사이클 시작
        expect(element.querySelector('h3').innerHTML).toBe('Current weather in Seoul : ');
        expect(element.querySelector('li:nth-of-type(1)').innerHTML).toBe('Temperature : 15C');
        expect(element.querySelector('li:nth-of-type(2)').innerHTML).toBe('Humidity : 44%');
    })
})