'use strict';

/**
 * @ngdoc function
 * @name storeManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeManagerApp
 */
angular.module('storeManagerApp')
  .controller('MainCtrl', function ($scope) {
    var selectedTab = 'chat';

    $scope.selectTab = function(tab) {
      selectedTab = tab;
    };

    $scope.isSelected = function(tab) {
      return selectedTab === tab;
    };
    
  });
