'use strict';

angular.module('storeManagerApp')
  .service('StatisticsSrvApi', function ($http, $q) {
    var service = {};

    service.getStatistics = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'http://10.60.11.218:8080/communications/stores/calls-report',
            transformResponse: function(response) {
                var result = JSON.parse(response);
                return result;
            }
        })
        .success(
            function(response) {
                deferred.resolve(response);
            }
        )
        .error(
            function(response) {
                deferred.reject(response.responseStatus.errorMessage);
            }
        );

        return deferred.promise;
    }

    return service;
  });
