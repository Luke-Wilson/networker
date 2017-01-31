var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dbAddress = require('./config/database.js');

var app = express();

app.use(express.static('../client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to mongo database named "networker"
//mongoose.connect('mongodb://localhost/networker');
// mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connect(dbAddress);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected");
});

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(process.env.PORT || 3000, function() {
  console.log('server is listening');
});

module.exports = app;
