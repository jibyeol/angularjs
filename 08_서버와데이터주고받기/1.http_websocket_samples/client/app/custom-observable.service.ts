import { Observable } from 'rxjs/Rx';

export class CustomObservableService {
    createObservableService() : Observable<Date> {
        return new Observable((observer) => {
            setInterval(() => {
                observer.next(new Date()) 
                // observer.next()를 실행하면서 옵저버블 스트림에 데이털르 함꼐 전달한다.
                // 구독하는 옵저버가 받아서 처리
                // 에러를 발생하거나 종료되지 않고 계속 처리된다.
            }, 1000);
        });
    }
}