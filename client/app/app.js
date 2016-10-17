angular.module('networker', [
  'networker.attendees',
  'networker.services'
  ])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'client/index.html',
      controller: 'mainController'
    })
    .when('/attendees', {
      templateUrl: '/attendees/attendees.html',
      controller: 'attendeesController'
    })
    .otherwise('/', {
      templateUrl: 'client/index.html',
      controller: 'mainController',
      authenticate: true
    });
})