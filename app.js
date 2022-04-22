require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs');
const passport = require('passport');

require('./app_api/database/db');

require('./app_api/config/passport');

var cors = require('cors');


var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');


const tripRouter = require('./app_server/routes/tripdetails')


const apiRouter = require('./app_api/routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

// register handlebars partials (https://www.npmjs.com/package/hbs) 
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Allow CORS
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Origin', 'GET, POST, PUT DELETE');
  next();
});

app.use(cors());
// actual URL
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/travel', travelRouter);
app.use('/trip', tripRouter);

app.use('/api', apiRouter);

// catch unauthorized error and create 401
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res
      .status(401)
      .json({"message": err.name + " " + err.message});
  }
});

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

// console.log(process.env.npm_package_description)
