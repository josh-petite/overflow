/**
 * @ngdoc service
 * @name LoginService
 * @module overflow.login
 * @description Dashboard service for retrieving metadata and performing actions on the main dashboard
 **/

(function() {
    'use strict';

    angular.module('overflow.login')
        .factory('LoginService', loginService);

    /* @ngInject */
    function loginService($resource, $q, $log) {
        this.resource = $resource('/api/v1/login');

        return {
            performLogin: performLogin
        };

        function performLogin(credentials) {
            var deferred = $q.defer();
            resource.save(null, credentials).$promise.then(function(data) {
                deferred.resolve(data);
            }, function(error) {
                $log.error(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }
})();
