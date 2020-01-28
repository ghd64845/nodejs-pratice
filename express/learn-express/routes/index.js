var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  next('route');
}, function(req, res, next) {
  console.log('실행되지 않습니다.');
  next();
}, function(req, res, next){
  console.log('실행되지 않습니다.');
  next();
});

router.get('/users/:id', function(req, res){
  console.log(req.params, req.query);
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
