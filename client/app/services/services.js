angular.module('networker.services', [])

.factory('Attendees', function ($http) {
  // this client service talks to the server request handler
  // action: get, post
  // var getAll = function(){
  //   return $http({
  //     method: 'GET',
  //     url: '/api/links/'
  //   })
  //   .then(function(resp){
  //     return resp.data;
  //   });
  // };

  var addAttendee = function(attendee){
    return $http({
      method: 'POST',
      url: '/api/attendee',
      data: attendee
    })
    .then(function (resp) {
      return resp;
    });
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