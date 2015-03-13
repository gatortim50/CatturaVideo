(function (){
  'use strict';

angular
  .module('carsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable',
    'ui.grid',
    //'confirmClick',
    //'xeditable',
    'LocalStorageModule'
  ])
  .constant('MY_CONSTANTS', {
    "GET_CARS": "http://127.0.0.1:3000",
    "TEST_CONST" : 1000
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/cars/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/details/:productId', {
        templateUrl: 'src/cars/views/SearchDetails.html',
        controller: 'SearchDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
