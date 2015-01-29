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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
