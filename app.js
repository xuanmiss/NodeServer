var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var db = mongoose.connect('mongodb://116.85.8.245:27017/node_test')
// db.on("error",console.error.bind(console,"连接错误:"));
// db.once("open",function(){
//   //一次打开记录
// });
// var UserSchema = new mongoose.Schema({
//   name:String   //定义一个属性name，类型为String
// });
// var UserModel = db.model('User',UserSchema);
// var personEntity = new UserModel({name:'david'});
// personEntity.save();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
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
