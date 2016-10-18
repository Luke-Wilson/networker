angular.module('networker.services', [])
.factory('Attendees', function ($http) {
  var addAttendee = function(attendee){
    //  THIS IS ACTUALLY BEING HANDLED BY THE HTML FORM
    // return $http({
    //   method: 'POST',
    //   url: '/api/attendee',
    //   data: attendee
    // })
    // .then(function (resp) {
    //   return resp;
    // });
  };

  var getCount = function(){
    return $http({
      method: 'GET',
      url: '/api/count'
    })
    .then(function (resp) {
      console.log(resp.data)
      return resp.data;
    })
  }

  return {
    addAttendee: addAttendee,
    getCount: getCount
  };
})

.factory('Generator', function ($http) {

  return {

  }
})

