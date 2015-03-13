(function () {
  "use strict";

  var SearchResultsCtrl = function ($scope, $filter, localStorageService, ngTableParams, DataService, CarService) {

    $scope.removeRow = function(id){
      console.log("delete item: " + id);
      CarService.remove(id);

    };

    // get the fruit data from localStorage
    var data = localStorageService.get('tableData');
    //console.log("localStorageService: " + JSON.stringify(data));

    if (data == null || data == undefined) {
      return;
    }

    $scope.tableParams = new ngTableParams({
      page: 1, // show first page
      count: data.length,
      sorting: {
        id: 'asc' // initial sorting
      }
    }, {
      total: data.length, // length of data
      getData: function ($defer, params) {
        // use build-in angular filter
        var filteredData = params.filter() ?
          $filter('filter')(data, params.filter()) :
          data;
        var orderedData = params.sorting() ?
          $filter('orderBy')(filteredData, params.orderBy()) :
          data;
        params.total(orderedData.length); // set total for recalc pagination
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

    // shared service
    // Color and Location
    $scope.Data = DataService;

    // watch for table data change and store off search results
    // so its persisted when we return from details page
    $scope.$watch('data', function () {
      localStorageService.set('data', $scope.data);
    });

  };


  SearchResultsCtrl.$inject = ['$scope', '$filter', 'localStorageService', 'ngTableParams', 'DataService', 'CarService'];

  angular.module('carsApp').controller('SearchResultsCtrl', SearchResultsCtrl);

}());
