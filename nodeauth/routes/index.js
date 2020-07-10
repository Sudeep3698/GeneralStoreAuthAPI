var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Vendor = require('../models/vendor');

router.get('/', function(req, res){
      res.render('index');
    });

router.get('/member', function(req, res, next) {
    if(req.isAuthenticated()){
      res.render('member');
    } else {
      res.sendStatus(403); //Forbidden
    }
});

router.get('/vendor', function(req, res, next) {
    if(req.isAuthenticated()){
      res.render('vendor');
    } else {
      res.sendStatus(403); //Forbidden
    }
});

module.exports = router;
