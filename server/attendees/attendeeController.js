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
      rank: req.body.rank
    }).save(function(err, attendee) {
      if (err) return console.error(err);
      console.log('saved?')
    }).then(function() {
      res.send()
    });
  }
}