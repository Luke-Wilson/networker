angular.module('networker.attendees', [])
.controller('AttendeesController', function($scope, Attendees){
  $scope.test = "hello";
  Attendees.getCount().then(function(c) {$scope.count = c;});
  $scope.addAttendee = function(attendee) {
    Attendees.addAttendee(attendee);
  }
});