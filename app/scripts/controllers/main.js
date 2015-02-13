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
    var selectedContactTab = 'list';
    var displayStates = false;
    $scope.states = [
      {
        key: 'online',
        desc: 'Online'
      },
      {
        key: 'away',
        desc: 'Away'        
      },
      {
        key: 'offline',
        desc: 'Offline'
      }
    ];
    $scope.status = $scope.states[0];

    $scope.selectTab = function(tab) {
      selectedTab = tab;
    };

    $scope.isSelected = function(tab) {
      return selectedTab === tab;
    };

    $scope.getStatus = function() {
      return $scope.status;
    };

    $scope.toggleStates = function() {
      displayStates = !displayStates;
    };

    $scope.displayStates = function() {
      return displayStates;
    };

    $scope.selectState = function(key) {
      $scope.status = $scope.states[key];
    };

    $scope.isContactTabSelected = function(tab) {
      return selectedContactTab === tab;
    };

    $scope.selectContactTab = function(tab) {
      selectedContactTab = tab;
    };
    
  });
