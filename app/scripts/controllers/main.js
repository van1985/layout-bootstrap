'use strict';

/**
 * @ngdoc function
 * @name storeManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeManagerApp
 */
angular.module('storeManagerApp')
  .controller('MainCtrl', function ($scope, StatisticsSrv) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.tab = 'stats';

    StatisticsSrv.getStatistics()
    	.then(
    		function (stats) {
    			$scope.stats = stats;
    		}
		);

    $scope.changeTab = function (tab) {
    	$scope.tab = tab;
    };
  });
