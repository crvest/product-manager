const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/hello', ProductController.sayHello);
    app.get('/product', ProductController.findAllProducts);
    app.get('/product/:_id', ProductController.findOneProduct);
    app.post('/product/new', ProductController.createProduct);
    app.put('/product/update/:_id', ProductController.updateProduct);
    app.delete('/product/delete/:_id', ProductController.deleteProduct);
};