var express = require('express');
var db = require('./app/config');
var bodyParser = require('body-parser');

var app = express();
app.listen(3003)

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log('got something');
  res.send();
})

app.post('/attendee', function(req, res) {
  console.log(req.body.firstname);
  res.redirect('/');
})