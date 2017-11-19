module.exports = function(config) {
    config.set({
        browsers : ['Chrome', 'Firefox'], // 테스트할 브라우저 지정
        frameworks : ['jasmine'], // 유닛 테스트 프레임워크 Jasmine으로 지정(종류에 따라 문법이 조금씩 다르다.)
        reporters : ['dots'], // 테스트 진행 상황은 콘솔에 점으로 표시
        singleRun : true, // true이면 테스트를 한 번만 실행하고 종료. 변경할 때마다 자동으로 빌드하게 설정했다면 false로 지정해서 자동으로 테스트를 실행
        files : [ // Karma 테스트 환경에 Angular 프레임워크와 테스트 라이브러리를 불러온다.
            // Karma가 사용하는 라이브러리
            'node_modules/typescript/lib/typescript.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',

            {pattern : 'karma-systemjs.config.js', included : true, watched : false}, // Karma용 SystemJS 설정 파일 불러옴
            {pattern : 'karma-test-runner.js', included : true, watched : false}, // 이 스크립트에서 테스트 시작
            // Angular 애플리케이션을 로드할 때 사용하는 라이브러리
            {pattern : 'node_modules/@angular/**/*.js', included : false, watched : false},
            {pattern : 'node_modules/@angular/**/*.js.map', include : false, watched : false},
            {pattern : 'node_modules/rxjs/**/*.js', include : false, watched : false},
            {pattern : 'node_modules/rxjs/**/*.js.map', include : false, watched : false},
            {pattern : 'app/**/*.js', include : false, watched : true}
            // app 폴더 안에 있는 ts파일 모두 불러옴. 각 파일은 import키워드에 의해 필요한 파일을 로드해서 파일의 관계를 설정할 필요는 없다.
        ],
        proxies : {
            // Angular 컴파일러가 사용하는 기본 주소 (e.g. styleUrls, templateUrl)
            '/app/' : '/base/app/' // Angular 컴파일러가 사용할 위치 지정
        },
        plugins : [ // 테스트 실행에 필요한 플러그인 지정
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    })
};