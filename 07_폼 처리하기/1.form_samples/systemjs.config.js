System.config({
	transpiler : 'typescript',

	typescriptOptions : {
		emitDecoratorMetadata : true,
		target : 'ES5',
		module : 'commonjs'
	},

	map : {
		'@angular' : 'node_modules/@angular',
		'rxjs' : 'node_modules/rxjs'
	},

	packages : {
		'rxjs' : { main : 'Rx' },
		'@angular/core' : { main : 'bundles/core.umd.min.js' },
		'@angular/common' : { main : 'bundles/common.umd.min.js' },
		'@angular/compiler' : { main : 'bundles/compiler.umd.min.js' },
		'@angular/platform-browser' : { main : 'bundles/platform-browser.umd.min.js' },
		'@angular/platform-browser-dynamic' : { main : 'bundles/platform-browser-dynamic.umd.min.js' },
		'@angular/router' : { main : 'bundles/router.umd.min.js' },
		'@angular/http' : { main : 'bundles/http.umd.min.js' },
		'@angular/forms' : { main : 'bundles/forms.umd.min.js' },

		'app' : { main : 'child-api/exposing-child-api', defaultExtension : 'ts' }
	},
	
	meta : {
		'app/mediator/stock.ts' : {
			format : 'es6'
		}
		// stock.ts에 ES5에서 지원하지 않는 인터페이스만 있어서 빈 파일이 된다.
		// 빈 파일인 stock.ts는 불러오지 않아 에러가난다.
		// 그래서 stock.ts는 ES6임을 알려야한다.
	}
});