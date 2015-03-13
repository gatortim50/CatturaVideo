(function () {
  "use strict";

  var SearchDetailsCtrl = function ($scope, $routeParams, $location, localStorageService, CarService) {

    $scope.$on('$routeChangeSuccess', function () {
      console.log("path changed to: " + $location.path());

      console.log("productId: " + $routeParams.productId);
      $scope.productId = $routeParams.productId;

      var tableData = localStorageService.get('tableData');

      //get details and store in localStorage
      $scope.details = CarService.getDetail(tableData, $routeParams.productId);
      console.log("found details: " + JSON.stringify($scope.details));

    }); // end scope on

  };

  SearchDetailsCtrl.$inject = ['$scope', '$routeParams', '$location','localStorageService', 'CarService'];

  angular.module('carsApp').controller('SearchDetailsCtrl', SearchDetailsCtrl);

}());
