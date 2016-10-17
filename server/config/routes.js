

module.exports = function(app, express) {
  app.get('/', function(req, res) {
    console.log("get request received")
    res.send();
  })


}