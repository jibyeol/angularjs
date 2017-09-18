import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

class Product{
    constructor(public title : String) {}
}

class ProductService{
    getProduct() : Product {
        return new Product("iPhone 8");
    }
}

class MockProductService implements ProductService{
    getProduct() : Product {
        return new Product("Galaxy S8");
    }
}

@Component({
    selector : 'product1',
    template : '{{product.title}}'
})
class Product1Component{
    product : Product;

    constructor(private productService : ProductService) {
        this.product = productService.getProduct();
    }
}

@Component({
    selector : 'product2',
    template : '{{product.title}}',
    providers : [{
        provide : ProductService, 
        useFactory : (isDev) => {
            if(isDev) return new MockProductService();
            else return new ProductService();
        }, 
        deps : ['IS_DEV_ENVIRONMENT']}]
})
class Product2Component{
    product : Product;

    constructor(private productService : ProductService) {
        this.product = productService.getProduct();
    }
}

@Component({
    selector : 'app',
    template : `
        <h2>A root component hosts two products<br>
        providered by different services</h2>
        <product1></product1>
        <br>
        <product2></product2>
    `
})
class AppComponent{}

@NgModule({
    imports : [BrowserModule],
    providers : [ProductService, {provide : 'IS_DEV_ENVIRONMENT', useValue : true}],
    declarations : [AppComponent, Product1Component, Product2Component],
    bootstrap : [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);