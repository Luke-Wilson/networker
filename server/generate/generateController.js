var Attendee = require('../attendees/attendeeModel.js')
var Q = require('q');
var Promise = require('bluebird');


// Promisify a few mongoose methods with the `q` promise library
var findAttendee = Q.nbind(Attendee.findOne, Attendee);
var createAttendee = Q.nbind(Attendee.create, Attendee);
var findAllAttendees = Q.nbind(Attendee.find, Attendee);



module.exports = {
  generateList: function(req, res, next) {
    console.log("hello from generateList")
    var tableSize = req.body.tableSize;

    var ones = [];
    var twos = [];
    var threes = [];
    var fours = [];
    var fives = [];


    var buildSeniorityGroup = function(greaterThan, lessThan, targetArray) {
      return new Promise(function(resolve, reject) {
        findAllAttendees({'seniority':{'$gt':greaterThan, '$lt': lessThan}})
        .then(function(found) {
          for (var i = 0; i < found.length; i++) {
            targetArray.push(found[i]);
          }
          resolve();
        })
      })
    }

    buildSeniorityGroup(4,6,fives)
    .then(buildSeniorityGroup(3,5,fours))
    .then(buildSeniorityGroup(2,4,threes))
    .then(buildSeniorityGroup(1,3,twos))
    .then(buildSeniorityGroup(0,2,ones))
    .then(function() {
      console.log('1s', ones.length)
      console.log('2s', twos.length)
      console.log('3s', threes.length)
      console.log('4s', fours.length)
      console.log('5s', fives.length)
      res.json(fours);
    })

    for(var i = 0; i < fives.length; i++) {
      console.log(fives[i].organization)
    }




    //find fives
    // findAllAttendees({'seniority':{'$gt':4}})
    //   .then(function(found) {
    //     fives.push(found);
    //     // res.json(found);
    //   })
    //   .then(function() {
    //     console.log(fives);
    //   })

    //find fours
    // findAllAttendees({'seniority':{'$gt':3, '$lt':5}})
    //   .then(function(found) {
    //     fours.push(found);
    //     // res.json(found);
    //   })
    //   .then(function() {
    //     console.log(fours);
    //   })
    //   .then(function() {
    //     res.json(fours)
    //   })
  }
}