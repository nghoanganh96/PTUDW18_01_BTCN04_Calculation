const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const calculationController = require('./controllers/calculation');

const app = express();
const port = 3000;
// ""
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());     // parse POST via request.body
app.use(bodyParser.urlencoded({ // parse string url /profile?id=5
    extended: false
}));

//  Since v4.16.0
// app.use(express.json());
// app.use(express.urlencoded());
const hbs = exphbs.create({
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


app.use('/', calculationController);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
