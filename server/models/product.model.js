const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;