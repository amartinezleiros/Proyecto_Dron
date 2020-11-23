var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var logger = require('morgan');
const {Sequelize} = require('sequelize');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {necesitaAutenticacion} = require('./routes/auth');



var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cookieSession({
  name: 'sesion', //nombre de la cookie
  keys: ["aaaaaaaaaa", "bbbbbbbbb"],  //claves para firmar la cookie
  maxAge: 50 * 60 * 1000 //caducidad en milisegundos
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users',necesitaAutenticacion, usersRouter);

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

require ('./conexion_db');

module.exports = app;


