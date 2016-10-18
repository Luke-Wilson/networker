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
    var tables = {};

    var buildTable = function(tableSize, compiled, currentArray, counter, tables) {
      tables = tables || {};
      counter = counter || 0;
      currentArray = currentArray || [];
      //base case
      if (compiled.length === 0) {
        return tables;
      }
      if (currentArray.length === tableSize) {
        console.log('condition met', currentArray.length, tableSize);
        counter++;
        tables[counter] = currentArray;
        currentArray = [];
      }
      currentArray.push(compiled.shift());
      return buildTable(tableSize, compiled, currentArray, counter, tables)
    }

    var buildSeniorityGroup = function(greaterThan, lessThan, targetArray) {
      return new Promise(function(resolve, reject) {
        findAllAttendees({'seniority':{'$gt':greaterThan, '$lt': lessThan}})
        .then(function(found) {
          for (var i = 0; i < found.length; i++) {
            targetArray.push(found[i]);
          }
        })
        .then(function() {
          resolve();
        })
      })
    }

    //chain promises using Q.all
    return Q.all([
      buildSeniorityGroup(4,6,fives),
      buildSeniorityGroup(3,5,fours),
      buildSeniorityGroup(2,4,threes),
      buildSeniorityGroup(1,3,twos),
      buildSeniorityGroup(0,2,ones)
    ])
    .then(function() {
      console.log('1s', ones.length)
      console.log('2s', twos.length)
      console.log('3s', threes.length)
      console.log('4s', fours.length)
      console.log('5s', fives.length)
    })
    .then(function() {
      var allArrays = ones.concat(twos, threes, fours, fives);
      console.log(buildTable(tableSize, allArrays, [], 0, {}));
    })
    .then(function(tables){
      res.json(tables);
    })
  }
}