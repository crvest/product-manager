const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/hello', ProductController.sayHello);
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:_id', ProductController.findOneProduct);
    // app.get('/api/product/random', ProductController.findOneProduct);   // ????
    app.post('/api/product/new', ProductController.createProduct);
    app.put('/api/product/update/:_id', ProductController.updateProduct);
    app.delete('/api/product/delete/:_id', ProductController.deleteProduct);
};