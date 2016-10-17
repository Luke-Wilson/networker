var db = require('../db')

module.exports = {
  attendees: {
    post: function (params, callback) {
      var queryStr = `INSERT INTO attendees (firstname, lastname, title) VALUES (?, ?, ?)`;
      query.db(queryStr, params, function(err, results) {
        if (err) console.log(err);
        callback(results);
      })

    }
  }
}