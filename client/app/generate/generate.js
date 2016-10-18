angular.module('networker.generate', [])
.controller('GenerateController', function($scope, Generator){
  $scope.generate = function() {
    Generator.generate($scope.tableSizeModel);
    setTimeout($scope.getTables, 1000);
  };

  $scope.tables = '';

  $scope.getTables = function() {
    $scope.tables = Generator.tableList();
  }
});