var Q = require('q');
var Attendee = require('./attendeeModel.js')

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
      rank: req.body.rank,
      organization: req.body.organization,
      category: req.body.category
    }).save(function(err) {
      if (err) return console.error(err);
      Attendee.count({}, function(err, c) {
        console.log('Count is ' + c)
      })
      console.log('saved?')
    }).then(function() {
      res.redirect('/')
    });
  },

  getCount: function(req, res, next) {
    Attendee.count({}, function(err, c) {
      if (err) console.error(err);
      console.log('The COUNT IS ' + c)
      res.json(c);
    });
  }
}