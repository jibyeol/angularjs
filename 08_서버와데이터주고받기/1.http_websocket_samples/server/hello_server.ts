import * as http from 'http'; // ES6 문법이지만 TS에서도 쓸 수 있다.

const server = http.createServer((request, response) => { 
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World!');
}); // 모든 요청을 HTTP 200 상태코드로 "Hello Wolrd!" 응답을 보냄

const port = 8000;

server.listen(port); // 서버 시작
console.log('Listening on http://localhost:' + port);