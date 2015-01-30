'use strict';

angular.module('storeManagerApp')
  .factory('StatisticsSrv', function ($q, StatisticsSrvApi) {
    var service = {};

    service.getStatistics = function () {
    	var deferred = $q.defer();

    	StatisticsSrvApi.getStatistics()
    		.then(
    			function (stats) {
    				deferred.resolve(stats);
    			}
			);

    	return deferred.promise;
    };

    return service;
  });