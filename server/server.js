var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('../client'));

// connect to mongo database named "networker"
mongoose.connect('mongodb://localhost/networker');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected")
});


// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(3003);

module.exports = app;
