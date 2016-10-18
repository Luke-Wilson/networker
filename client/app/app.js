angular.module('networker', [
  'networker.attendees',
  'networker.services',
  'networker.main',
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
    // it seems we don't need the / handler, which is nice because it was causing an infinite loop!!
    // .when('/', {
    //   templateUrl: './index.html',
    //   controller: 'MainController'
    // })
    .when('/attendees', {
      templateUrl: './app/attendees/attendees.html',
      controller: 'AttendeesController'
    })
    // .otherwise('/', {
    //   templateUrl: 'index.html',
    //   controller: 'MainController',
    //   authenticate: true
    // });
})