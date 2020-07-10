var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

// Product Schema
var ProductSchema = mongoose.Schema({
    title:{
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
});

var Product = module.exports = mongoose.model('Product', ProductSchema);