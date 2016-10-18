angular.module('networker.generate', [])
.controller('GenerateController', function($scope, Generator){
  $scope.generate = function() {
    console.log('generate from controller fired');
    Generator.generate($scope.tableSizeModel);
  };
});