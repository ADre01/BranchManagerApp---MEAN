var mongoose = require('mongoose');
Schema = mongoose.Schema;
require('./product');

var branchSchema = new mongoose.Schema({
   name: String,
    address: String,
    products: [{
        type: Schema.ObjectId, ref: 'products'
    }]
});

mongoose.model('branches', branchSchema);