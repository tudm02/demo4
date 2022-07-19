var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var year = 2022;
  var sinhvien = ['Alex','ronado','messi']
  res.render('index',{
    title: 'Express 123',
    nam: year,
    student : sinhvien
  });
});
router.get('/news',function (req,res){
  res.render('news');
});
module.exports = router;
