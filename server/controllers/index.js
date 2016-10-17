module.exports = {
  attendees: {
    post: function (req, res) {
      console.log("HEY - CONTROLLERS")
      var params = [ req.body[firstname], req.body[lastname], req.body[title] ];
      models.attendees.post(params, function(err, results) {
        if (err) console.log(err);
        res.json(results);
      });
    }
  }
}