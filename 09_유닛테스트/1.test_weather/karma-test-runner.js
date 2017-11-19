Error.stackTraceLimit = Infinity; // 테스트 실행 중에 에러가 발생하면 모든 콜 스택을 표시하도록 설정한다.

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000; // 비동기 타임아웃 1초로 설정 (기본은 5초)

__karma__.loaded = function(){}; // 애플리케이션 코드와 테스트 스펙은 비동기로 로드되기 때문에 Karma의 loaded 이벤트가 발생했을 때 테스트를 실행하면 안된다.
// 테스트 스펙이 모두 로드된 이후에 Karma.start()를 직접 호출하도록 karma의 onloaded 콜백 함수를 빈 함수로 설정한다.

function resolveTestFiles() { // 파일 이름 중에 .spec.ts를 포함하는 파일만 테스트 스펙으로 처리하는 함수를 정의한다.
    return Object.keys(window.__karma__.files)
        .filter(function(path) {
            return /\.spec\.ts$/.test(path);
        })
        .map(function(moduleName) {
            return System.import(moduleName);
        })
}

Promise.all([ // 테스트에 필요한 Angular 모듈을 로드한다.
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
])
    .then(function(modules) {
        var testing = modules[0]; // 로드한 테스트 모듈에 쉽게 접근하기 위해 변수에 할당한다.
        var browser = modules[1];

        testing.TestBed.initTestEnvironment( // 테스트 환경을 구성한다.
            browser.BrowserDynamicTestingModule,
            browser.platformBrowserDynamicTesting()
        );
    })
    .then(function() {
        return Promise.all(resolveTestFiles()); // resolveTestFiles() 함수를 실행해서 테스트 스펙이 정의된 파일을 로드한다.
    })
    then(function() {
        __karma__.start(); // 테스트를 시작한다.
    },
    function (error) {
        __karma__.error(error.stack || error);
    });
    


/**
 * 커맨드 창에서 yarn test를 실행하면 karma 테스트를 시작할 수 있다.
 * karma.conf.js에 테스트 대상으로 지정한 브라우저가 실행되면서 테스트를 실행하고, 테스트가 끝나면 자동으로 브라우저가 닫힌다.
 */