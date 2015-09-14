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
        /*jshint validthis: true */
        var vm = this;
        vm.resource = $resource('/api/v1/login', null, {login: {method: 'POST'}});

        return {
            performLogin: performLogin
        };

        function performLogin(credentials) {
            var deferred = $q.defer();

            vm.resource.login(null, credentials)
                .$promise
                .then(loginSuccessful, loginError);

            function loginSuccessful(data) {
                deferred.resolve(data);
            }

            function loginError(error) {
                $log.error(error);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
})();
