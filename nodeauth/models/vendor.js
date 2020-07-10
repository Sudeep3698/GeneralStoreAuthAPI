var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

// Vendor Schema
var VendorSchema = mongoose.Schema({
    username:{
        type: String,
        index: true
    },
    mobile: {
        type: Number
    }
});

var Vendor = module.exports = mongoose.model('Vendor', VendorSchema);

module.exports.createVendor = function(newVendor, callback){
    newVendor.save(callback);
}


