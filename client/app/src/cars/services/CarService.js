(function () {
  'use strict';

  var CarService = function ($http, MY_CONSTANTS) {

    return {

      getResults: function () {

        var url = MY_CONSTANTS.GET_CARS + '/products';
        console.log("--- Search url: " + url);

        return $http.get(url)
          .then(function(response){
            return response.data;
          });
      },

      getDetail: function (details, id) {

        var len = details.length;
        var myArry = [];

        for (var i = 0; i < len; i += 1) {
          var result = details[i];
          if (result.id === id) {
            myArry.push(result);
            return myArry;
          }
        }

      },

      remove: function(id){
        console.log ("delete: " + id);

      }

    };

  };

  CarService.$inject = ['$http', 'MY_CONSTANTS'];

  angular.module('carsApp').factory('CarService', CarService);


}());
