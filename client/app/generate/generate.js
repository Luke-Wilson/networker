angular.module('networker.generate', [])
.controller('GenerateController', function($scope, Generator){
  $scope.generate = function() {
    Generator.generate($scope.tableSizeModel);
    setTimeout($scope.getTables, 1000);
  };

  $scope.tables = '';


  $scope.getTables = function() {
    $scope.tables = Generator.tableList();
    var myObj = Generator.tableList();
    var counter = 0;
    var tablesObj = {};

    for (var key in myObj) {
      tablesObj[counter] = (myObj[key]);
      counter++;
    }

    console.log(tablesObj); // {1: [{person1}, {person2}]}

  }
});