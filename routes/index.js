var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// login 接口 一
router.get('/api/login', function(req, res, next) {
  let info = {name: 'sss', age: 18}
  info = JSON.stringify(info);
  console.log(info)
  res.send(info)
});

module.exports = router;
