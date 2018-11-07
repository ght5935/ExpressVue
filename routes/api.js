var express = require('express');
var router = express.Router();

// 二

router.get('/', function(req, res, next){
    var rt = {name: 'mmm', age: '20', gender: '0'}
    rt = JSON.stringify(rt)
    res.send(rt)
});

module.exports = router;