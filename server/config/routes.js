var attendeeController = require('../attendees/attendeeController.js');
var generateController = require('../generate/generateController.js');
// var helpers = require('./helpers.js'); // our custom middleware


module.exports = function(app, express) {
  app.get('/', function(req, res) {
    console.log("get request received agains!")
    res.send();
  });

  app.get('/api/count', attendeeController.getCount);

  app.post('/api/attendee', attendeeController.addAttendee);
  app.post('/api/randoms', attendeeController.addRandoms);

  app.post('/api/generate', generateController.generateList);

}