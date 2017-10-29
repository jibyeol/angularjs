import * as express from 'express';

const app = express(); // Express 인스턴스 생성

app.get('/', (req, res) => res.send('Hello from Express')); // HTTP GET 요청 처리
app.get('/products', (req, res) => res.send('Get a request for products'));
app.get('/reviews', (req, res) => res.send('Get a request for reviews'));

const server = app.listen(8000, 'localhost', () => { // 8000 포트로 서버 시작
    const {address, port} = server.address(); // 주소와 포트를 참조하기 위해 비구조화 문법 사용
    console.log('Listenin on %s %s', address, port);
})