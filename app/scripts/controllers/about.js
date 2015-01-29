'use strict';

/**
 * @ngdoc function
 * @name storeManagerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the storeManagerApp
 */
angular.module('storeManagerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
