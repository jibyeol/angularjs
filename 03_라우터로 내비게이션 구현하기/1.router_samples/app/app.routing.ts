import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {ProductDetailComponent} from './components/product.component';

const routes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'product', component : ProductDetailComponent}
];

export const routing = RouterModule.forRoot(routes); 
// 라우터 설정을 외부로 공개해서 루트 모듈에서 사용할 수 있도록 한다.
