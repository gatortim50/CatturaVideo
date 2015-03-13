(function () {
  'use strict';

  var SearchPanelCtrl = function ($scope, DataService) {

    // shared service
    // communicate between sibling controllers
    $scope.Data = DataService;

  };

  SearchPanelCtrl.$inject = ['$scope', 'DataService'];

  angular.module('carsApp').controller('SearchPanelCtrl', SearchPanelCtrl);

}());
