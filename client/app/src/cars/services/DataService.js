(function () {
  "use strict";

  var DataService =  function () {

    return {
      Color: '',
      Location: '',
      Make: ''
    };

  };

  angular.module('carsApp').factory('DataService', DataService);

}());
