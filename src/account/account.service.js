/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/**
 * @ngdoc service
 * @name AccountService
 * @module overflow.account
 * @description Service for user interactions with account data
 **/
var Overflow;
(function (Overflow) {
    var Account;
    (function (Account) {
        angular.module('overflow.account').factory('AccountService', AccountService);
        var AccountService = (function () {
            function AccountService($resource, $q, $log) {
                this.$resource = $resource;
                this.$q = $q;
                this.$log = $log;
                this.$inject = ['$resource', '$q', '$log'];
                this.resource = $resource('/api/v1/account/:id', { id: '@id' });
            }
            AccountService.prototype.create = function (newAccount) {
                var deferred = this.$q.defer();
                this.resource.save(null, newAccount).$promise.then(accountCreationSuccessful, accountCreationFailed);
                function accountCreationSuccessful(data) {
                    deferred.resolve(data);
                }
                function accountCreationFailed(error) {
                    this.$log.error(error);
                    deferred.reject(error);
                }
                return deferred.promise;
            };
            return AccountService;
        })();
    })(Account = Overflow.Account || (Overflow.Account = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=account.service.js.map