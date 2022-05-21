const Product = require('../models/product.model');

// test
module.exports.sayHello = (req, res) => {
    res.json({ message: 'Hello'});
};

// get all products function
module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allTheProducts => res.json({ product: allTheProducts }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// get one product function
module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
    .then(oneProduct => res.json({ product: oneProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// create a new product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(newProduct => res.json({ product: newProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// update a product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// delete a product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
    .then(deletedProduct => res.json({ product: deletedProduct }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
};