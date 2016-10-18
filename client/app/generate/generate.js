angular.module('networker.generate', [])
.controller('GenerateController', function($scope, Generator){
  $scope.generate = function() {
    $scope.hide = false;
    Generator.generate($scope.tableSizeModel);
    setTimeout($scope.getTables, 1000);
  };

  $scope.hide = false;
  $scope.tables = '';
  $scope.tableNumber = 0;

  $scope.getTables = function() {
    $scope.hide = true;
    $scope.tables = Generator.tableList();
  }
});