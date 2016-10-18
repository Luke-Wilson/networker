var Q = require('q');
var Attendee = require('./attendeeModel.js')
var Promise = require('bluebird');
var fs = require('fs');

// Promisify a few mongoose methods with the `q` promise library
var findAttendee = Q.nbind(Attendee.findOne, Attendee);
var createAttendee = Q.nbind(Attendee.create, Attendee);
var findAllAttendees = Q.nbind(Attendee.find, Attendee);


module.exports = {
  addAttendee: function(req, res, next) {
    console.log('post request received')
    console.log(req.body);
    var attendee = new Attendee({
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      jobtitle: req.body.jobtitle,
      seniority: req.body.seniority,
      organization: req.body.organization,
      expertise: req.body.expertise
    }).save(function(err) {
      if (err) return console.error(err);
      Attendee.count({}, function(err, c) {
        console.log('Count is ' + c)
      })
      console.log('saved?')
    }).then(function() {
      res.redirect('/#/added')
    });
  },

  getCount: function(req, res, next) {
    Attendee.count({}, function(err, c) {
      if (err) console.error(err);
      console.log('The COUNT IS ' + c)
      res.json(c);
    });
  },

  addRandoms: function(req, res, next) {
    var firstNames = [];
    var lastNames = [];
    var expertise = [];
    var organization = [];
    var jobtitles = [];
    var seniority = [1,2,3,4,5];
    fs.readFile('../firstNames.txt', 'utf8', function(err, data) {
      if (err) throw err;
      var lines = data.split('\n');
      for (var i = 0; i < lines.length; i++) {
        firstNames.push(lines[i]);
      }
      fs.readFile('../lastNames.txt', 'utf8', function(err, data) {
        if (err) throw err;
        var lines = data.split('\n');
        for (var i = 0; i < lines.length; i++) {
          lastNames.push(lines[i]);
        }
        fs.readFile('../expertise.txt', 'utf8', function(err, data) {
          if (err) throw err;
          var lines = data.split('\n');
          for (var i = 0; i < lines.length; i++) {
            expertise.push(lines[i]);
          }
          fs.readFile('../companies.txt', 'utf8', function(err, data) {
            if (err) throw err;
            var lines = data.split('\n');
            for (var i = 0; i < lines.length; i++) {
              organization.push(lines[i]);
            }
            fs.readFile('../newjobs.txt', 'utf8', function(err, data) {
              if (err) throw err;
              var lines = data.split('\n');
              for (var i = 0; i < lines.length; i++) {
                jobtitles.push(lines[i]);
              }
              var attendee = new Attendee({
                firstname: firstNames[Math.floor(Math.random()*firstNames.length)],
                lastname: lastNames[Math.floor(Math.random()*lastNames.length)],
                seniority: seniority[Math.floor(Math.random()*seniority.length)],
                organization: organization[Math.floor(Math.random()*organization.length)],
                expertise: expertise[Math.floor(Math.random()*expertise.length)],
                jobtitle: jobtitles[Math.floor(Math.random()*jobtitles.length)]
              }).save(function(err) {
                if (err) return console.error(err);
                Attendee.count({}, function(err, c) {
                  console.log('Count is ' + c)
                })
                console.log('saved?')
              }).then(function() {
                res.redirect('/#/attendees')
              });
            })
          })
        })
      })
    })
  }
}