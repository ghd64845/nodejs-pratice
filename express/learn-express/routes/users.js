var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');//res.send(버퍼 또는 문자열 또는 HTML 또는 JSON)
});

router.get('/flash', function(req, res) {
  req.session.message = '세션 메세지';
  req.flash('message', 'flash 메세지');//일회용
  res.redirect('/users/flash/result');
});

router.get('/flash/result', function(req, res) {
  res.send(`${req.session.message} ${req.flash('message')}`)
});

module.exports = router;
