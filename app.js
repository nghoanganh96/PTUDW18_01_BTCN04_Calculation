const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const calculationController = require('./controllers/calculation');
const logger = require('morgan');

const app = express();
// ""
app.use(express.static(path.join(__dirname, 'public')));

// logger
app.use(logger('dev'));


//  Since v4.16.0
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// handlebars modules
const hbs = exphbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    helpers: {

    }
});
app.engine('hbs', hbs.engine); // create Engine named hbs
app.set('view engine', 'hbs'); // set view engine of express is that engine above.
// app.set('views', path.join(__dirname, 'views'))

// routers
app.use('/', calculationController);

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
