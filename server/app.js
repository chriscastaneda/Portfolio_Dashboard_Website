var express = require('express');
var path = require('path');
const open = require('open');
var bodyParser = require('body-parser');//parses information from POST
var product = require('./routes/product.route'); // Imports routes for the products
var mongoose = require('mongoose');
var indexRouter = require('./routes/index.js');



// initialize our express app
var app = express();

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);


/*//CORS Origion issue between servers, Fixed with chrome extension: Allow-Control-Allow-Origin: *
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

//connect to database. Set up mongoose connection
//var dev_db_url = 'mongodb://127.0.0.1/dashboard_app';
var dev_db_url_test = 'mongodb://127.0.0.1/dashboard_app_test';
var mongoDB = process.env.MONGODB_URI || dev_db_url_test;
mongoose.connect(mongoDB, { useNewUrlParser: true });//Mongoose DeprecationWarning
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);//Mongoose DeprecationWarning
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Body Parser is an npm package that is used to parse the incoming request bodies in a middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

var port = 4000;

//telling our express app to listen to that port.
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
    console.log('Starting express in default browser');
});


// Opens the url in default browser
(async () => {
        await open('http://localhost:4000/');
})();

//If Express page is open
var urlExists = require('url-exists');
urlExists('http://localhost:4000/', function (err, exists) {
    if (exists) {
        //console.log(exists);
        /*refresh page*/
    } else {
        /*open browser*/
        //console.log(exists);
    }
});

