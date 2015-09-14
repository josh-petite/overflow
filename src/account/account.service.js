/**
 * @ngdoc service
 * @name AccountService
 * @module overflow.account
 * @description Service for user interactions with account data
 **/

(function() {
    'use strict';

    angular.module('overflow.account')
        .factory('AccountService', accountService);

    function accountService($resource, $q, $log) {
        /*jshint validthis: true */
        var vm = this;
        vm.resource = $resource('/api/v1/account/:id', {id: '@id'});

        return {
            create: create
        };

        ///////////////////////////////////////////////////////////////////////

        function create(newAccount) {
            var deferred = $q.defer();

            vm.resource.save(null, newAccount)
                .$promise
                .then(accountCreationSuccessful, accountCreationFailed);

            function accountCreationSuccessful(data) {
                deferred.resolve(data);
            }

            function accountCreationFailed(error) {
                $log.error(error);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
})();
