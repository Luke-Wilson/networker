angular.module('networker.attendees', [])
.controller('AttendeesController', function($scope, Attendees){
  Attendees.getCount().then(function(c) {$scope.count = c;});

  $scope.addAttendee = function(attendee) {
    Attendees.addAttendee(attendee);
  }
});