var mongoose = require('mongoose');

var AttendeeSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  jobtitle: String,
  rank: Number,
  organization: String,
  category: String,
  interests: String
});

module.exports = mongoose.model('Attendee', AttendeeSchema);
