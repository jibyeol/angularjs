//import {Http} from '@angular/http';
//import {Injectable} from '@angular/core';

export class Product {
    constructor(public id : number,
        public title : string,
        public price : number,
        public description : string){}
}

//@Injectable()
export class ProductService {
//    constructor(private http : Http){
//        const products = http.get('product.json');
//    }
    getProduct() : Product {
        return new Product(0, "iphone 8", 849.99, "The lastest iphone, 5.8-inch screen");
    }
}