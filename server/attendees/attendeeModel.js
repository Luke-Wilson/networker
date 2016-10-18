var mongoose = require('mongoose');

var AttendeeSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  jobtitle: String,
  seniority: Number,
  organization: String,
  category: String,
  expertise: String
});

module.exports = mongoose.model('Attendee', AttendeeSchema);
