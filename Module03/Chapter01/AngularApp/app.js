var newApp = angular.module('NewApp',[]);

newApp.controller('FirstController',['$scope','MyService',function($scope,MyService) {
  $scope.modelObj = { name:'MyDummyObject' };
  $scope.response = MyService.exposedMethod();


  $scope.updateName = function(newName) {
    $scope.modelObj.name = newName;
  }

  $scope.contentStr = "Some dummy content";
  $scope.dateStr = new Date();
}]);

newApp.factory('MyService',[function() {
  var serviceInstance = {};
  
  var privateMethod = function() { return 'result'; };

  serviceInstance.exposedMethod = function() {
     return privateMethod();
  };

  return serviceInstance;
}]);

/* .service can be also used

newApp.service('MyService',[function() {
  
  var privateMethod = function() { return 'result'; };

  this.exposedMethod = function() {
     return privateMethod();
  };

}]);

*/