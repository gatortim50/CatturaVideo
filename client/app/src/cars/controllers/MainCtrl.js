(function () {
  'use strict';

  var MainCtrl = function ($scope, localStorageService, CarService) {

    function clearAll() {
      console.log("no search results clear localstorage");
      return localStorageService.clearAll();
    }

    var onComplete = function(data){
      $scope.data = data;
      console.log("product: " + JSON.stringify($scope.data));
      localStorageService.set('tableData', $scope.data);
    };

    var onError = function(reason){
      clearAll();
      $scope.error = reason;
    };

    CarService.getResults()
      .then(onComplete, onError);

  };

  MainCtrl.$inject = ['$scope', 'localStorageService', 'CarService'];

  angular.module('carsApp').controller('MainCtrl', MainCtrl);

}());
