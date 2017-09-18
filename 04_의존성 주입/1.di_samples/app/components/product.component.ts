import {Component, bind} from '@angular/core';
import {ProductService, Product} from '../services/product.service';

@Component({
    selector : 'di-product-page',
    template : `
        <div>
            <h1>Product Details</h1>
            <h2>Title : {{product.title}}</h2>
            <h2>Description : {{product.description}}</h2>
            <h2>Price : \${{product.price}}</h2>
        </div>
    `,
    providers : [ProductService]
    // provide와 useClass의 이름이 같아서 간단한 표기법을 사용.
    // 만약 ProductService대신 OtherProductService로 바꾼다면 여기만 수정하면 된다.
})
export class ProductComponent {
    product : Product;
    constructor(productService : ProductService) {
        this.product = productService.getProduct();
    }
}
