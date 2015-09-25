/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

/**
 * @ngdoc service
 * @name AccountService
 * @module overflow.account
 * @description Service for user interactions with account data
 **/

module Overflow.Account {
    angular.module('overflow.account')
        .factory('AccountService', AccountService);

    export interface IAccountService {
        create(newAccount:{}) : ng.IPromise<{}>;
    }

    class AccountService implements IAccountService {
        private resource:any;

        $inject = ['$resource', '$q', '$log'];

        constructor(private $resource:ng.resource.IResourceService,
                    private $q:ng.IQService,
                    private $log:ng.ILogService) {
            this.resource = $resource('/api/v1/account/:id', {id: '@id'});
        }

        create(newAccount:{}) {
            var deferred = this.$q.defer();

            this.resource.save(null, newAccount)
                .$promise
                .then(accountCreationSuccessful, accountCreationFailed);

            function accountCreationSuccessful(data:{}) {
                deferred.resolve(data);
            }

            function accountCreationFailed(error:{}) {
                this.$log.error(error);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
}
