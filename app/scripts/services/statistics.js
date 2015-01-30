'use strict';

angular.module('storeManagerApp')
  .factory('StatisticsSrv', function ($q, StatisticsSrvApi) {
    var service = {};

    service.getStatistics = function () {
    	var deferred = $q.defer();

    	StatisticsSrvApi.getStatistics()
    		.then(
    			function (stats) {
    				var statsForUi = {
    					calls: {
    						incoming: parseInt(stats.completedCalls) + parseInt(stats.failedCalls),
    						answered: parseInt(stats.completedCalls),
    						transferred: parseInt(stats.transferredCalls),
    						missed: parseInt(stats.missedCalls)
    					},
    					average: {
    						byDay: parseInt(stats.callsByDay),
    						byHour: parseInt(stats.callsByHour),
    						byMinute: parseFloat(stats.callsByMinute).toFixed(1)
    					},
    					mostCalledDepartments: stats.mostCalledDepartments,
    					mostAnsweredDepartments: stats.mostAnsweredDepartments
    				};
    				deferred.resolve(statsForUi);

    				//"completedCalls":685,"failedCalls":91,"transferredCalls":106,"missedCalls":118

    				//"callsByMinute":0.43139087608297083,"callsByHour":25.88345256497825,"callsByDay":621.2028615594779
    			}
			);

    	return deferred.promise;
    };

    return service;
  });