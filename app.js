const express = require("express");
const path = require('path');
const exphbs = require('express-handlebars');
const calculationController = require('./controllers/calculation');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
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

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
