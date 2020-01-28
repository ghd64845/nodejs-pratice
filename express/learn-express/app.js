var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');//세션 관리 시 클라이언트에 쿠키를 보낸다. 이를 세션 쿠키라 한다.
var flash = require('connect-flash');//connect-flash 미들웨어는 cookie-parser와 express-session을 사용하므로 이들보다 뒤에 위치해야한다.

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // express패키지를 호출하여 app변수 객체 생성

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(function (req, res, next) {
  console.log(req.url , '저도 미들웨어입니다.');
  next();
});
//app.use는 미들웨어를 연결하는 부분 미들웨어는 요청과 응답의 중간에 위치 라우터와 에러핸들러 도 미들웨어의 일종
app.use(logger('dev')); //여기 부터 순차적으로 라우터에서 클라이언트로 응답을 보낸다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave : false, //요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장
  saveUninitialized : false,// 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정, 주로 방문자를 추적할 때 사용
  secret : 'secret code',// 필수 항목!, cookie-parser의 비밀키와 같은 역할
  cookie : {// 세션 쿠키에 대한 설정, maxAge, domain, path, expires, smaeSite, httpOnly, secure등 일반적인 쿠키옵션이 모드 제공
    httpOnly : true,
    secure : false,//https가 아닌 환경에서도 사용할 수있게 설정 배포시에는 https를 적용하고 true로 설정 하는 것이 좋다.
  },
}));
app.use(flash());//flash 미들웨어는 req객체에 req.flash에서드를 추가한다. req.flash(키, 값)으로 해당 키에 값 설정, req.flash(키)로 해당 키에 대한 값을 불러온다.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
