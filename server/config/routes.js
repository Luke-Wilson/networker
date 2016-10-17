var attendeesController = require('../attendees/attendeeController.js');
// var helpers = require('./helpers.js'); // our custom middleware


module.exports = function(app, express) {
  app.get('/', function(req, res) {
    console.log("get request received agains!")

    res.send();
  });

  app.post('/attendees', attendeesController.addAttendee);

}