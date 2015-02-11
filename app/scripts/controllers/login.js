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

        var selected = {
        	tools: false,
        	lawndry: false,
        	sports: false,
        	jewelry: false,
        	garden: false,
        	kitchen: false
        };

        $scope.toggleSelected = function(option) {
        	selected[option] = !selected[option];
        };

        $scope.hasSelected = function(option) {
        	return selected[option];
        };

        $scope.isLoginEnabled = function() {
        	var enabled = false;
        	angular.forEach(selected, function(value, key) {
        		if (value) {
        			enabled = true;
        		}
        	})
        	return enabled;
        };
  }]);