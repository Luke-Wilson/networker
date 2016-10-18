angular.module('networker.main', [])
.controller('MainController', function($scope, Attendees){
  $scope.test = "hello";
  $scope.addAttendee = function(attendee) {
    Attendees.addAttendee(attendee);
  }
});