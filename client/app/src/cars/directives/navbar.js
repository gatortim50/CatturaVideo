(function (){
  'use strict';

  var navbar = function() {
    return {
      restrict: 'E',
      templateUrl: 'src/cars/views/navbarHeader.html',
      controller: 'MainCtrl'
    };

  };

  angular.module('carsApp').directive('navbar', navbar);

}());
