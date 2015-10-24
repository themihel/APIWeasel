(function() {
  'use strict';
  // controller
  function apiWeaselCtrl($scope, $http) {
    $scope.apiData = [];
    // fetch data
    // handle success
    function fetchSuccess(response) {
      $scope.apiData = response.data;
    }
    // handle failure
    function fetchFailed(response) {
      $scope.apiError = response.data;
    }
    // request
    $http.get('api.json')
      .then(fetchSuccess)
      .catch(fetchFailed);
  }

  angular
    .module('apiweasel')
    .controller('apiWeaselCtrl', apiWeaselCtrl);

}());
