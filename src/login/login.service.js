/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/**
 * @ngdoc service
 * @name LoginService
 * @module overflow.login
 * @description Dashboard service for retrieving metadata and performing actions on the main dashboard
 **/
var fl;
(function (fl) {
    'use strict';
    angular.module('overflow.login').factory('LoginService', LoginService);
    var LoginService = (function () {
        /* @ngInject */
        function LoginService($resource, $q, $log) {
            this.$resource = $resource;
            this.$q = $q;
            this.$log = $log;
            this.resource = $resource('/api/v1/login', null, { login: { method: 'POST' } });
        }
        LoginService.prototype.performLogin = function (credentials) {
            var deferred = this.$q.defer();
            this.resource.login(null, credentials).$promise.then(loginSuccessful, loginError);
            function loginSuccessful(data) {
                deferred.resolve(data);
            }
            function loginError(error) {
                this.$log.error(error);
                deferred.reject(error);
            }
            return deferred.promise;
        };
        return LoginService;
    })();
})(fl || (fl = {}));
//# sourceMappingURL=login.service.js.map