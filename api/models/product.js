var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
   title: String,
    description: String,
    price: Number
});

mongoose.model('products', productSchema);