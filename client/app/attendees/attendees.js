angular.module('networker.attendees', [])
.controller('AttendeesController', function($scope, Attendees){
  $scope.test = "hello";
  $scope.addAttendee = function(attendee) {
    Attendees.addAttendee(attendee);
  }
});