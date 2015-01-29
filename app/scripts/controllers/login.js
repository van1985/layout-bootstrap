'use strict';

/**
 * @ngdoc function
 * @name corecommunicationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corecommunicationsApp
 */
angular.module('storeManagerApp')
  .controller('LoginCtrl', ['$scope', '$location', function($scope, $location) { 

        $scope.login = function () {
            $location.path('/main');
        };

  }]);