import * as express from 'express';
import * as path from 'path';

class Product {
    constructor(public id : number,
                public title : string,
                public price : number) {}
}

const products = [
    new Product(0, 'First Product', 24.99),
    new Product(1, 'Second Product', 64.99),
    new Product(2, 'Third Product', 74.99)
];

function getProducts() : Product[] {
    return products;
}

function getProductById(productId : number ) : Product {
    return products.find(p => p.id == productId);
}

const app = express();

app.get('/products', (req, res) => {
    res.json(getProducts()); // json으로 응답을 보냄
});
app.get('/products/:id', (req, res) => {
    res.json(getProductById(req.params.id)); // 주소에 인자가 있으면 Request 객체의 params 프로퍼티로 전달된다.
});
app.get('/reviews', (req, res) => res.send('Get a request for reviews'));

app.use('/', express.static(path.resolve(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.resolve(__dirname, '..', 'node_modules')));

const server = app.listen(8000, 'localhost', () => {
    const {address, port} = server.address();
    console.log('Listenin on %s %s', address, port);
});