var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Vendor = require('../models/vendor');
var Product = require('../models/product');

exports = module.exports = router.get('/', function(req, res, next){
  User.find({"role": "vendor"}, function(err, users){
    if(err){
      console.log(err);
    }
    var model = {
      users: users
    }
    res.render('vendordashboard', model);
  });
});

exports = module.exports = router.get('/login', function(req, res, next) {
   res.render('vendorLogin', {
     'title':'Vendor Login Only'
   });
});

exports = module.exports = router.post('/login', function(req, res, next){
  var username = req.body.username;
  var adminCode = req.body.adminCode;
  var mobile = req.body.mobile;

  var newVendor = new Vendor({
      username: username,
      adminCode: adminCode,
      mobile: mobile
  });
  Vendor.createVendor(newVendor, function(err, vendor){
      if(err) throw err;
      console.log(vendor);
  });
  if(adminCode === 'secretCode123'){
      req.flash('success', 'You have been successfully logged in as Vendor');
      res.render('vendor');
  } else {
      req.flash('error', 'Invalid code');
      res.redirect('/login');
  }
});

exports = module.exports = router.get('/list', function(req, res, next) {
    Product.find({}, function(err, products){
      if(err){
        console.log(err);
      }
      var model = {
        products: products
      }
      console.log(products)
      res.render('product', model);
  });
});

module.exports = router;
