var express = require('express');
var router = express.Router();
var User = require('../models/user');

exports = module.exports = router.get('/', function(req, res){
    User.find({"role" : "member"}, function(err, users){
      if(err){
        console.log(err);
      }
      var model = {
        users : users
      }
      res.render('member', model);
    });
});

module.exports = router;
