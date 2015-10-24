(function() {
  'use strict';

  // init app
  angular
    .module('apiweasel', []);

  // controller
  angular
    .module('apiweasel')
    .controller('apiWeaselCtrl', ['$scope', '$http', function($scope, $http) {
      $scope.apiData = [];
      // fetch data

      // handle success
      function fetchSuccess(response) {
        $scope.apiData = response.data;
      }
      // handle failure
      function fetchFailed(response) {
        console.log('Fail!');
        console.log(response.data);
      }
      // request
      return $http.get('api.json')
        .then(fetchSuccess)
        .catch(fetchFailed);
    }]);

}());
