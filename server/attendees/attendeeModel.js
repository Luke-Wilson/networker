var mongoose = require('mongoose');

var AttendeeSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  jobtitle: String,
  rank: Number,
  organizationId: Number,
  categoryId: Number
});

// AttendeeSchema.pre('save', function (next) {
//   var code = createSha(this.url);
//   this.code = code;
//   next();
// });

module.exports = mongoose.model('Attendee', AttendeeSchema);
