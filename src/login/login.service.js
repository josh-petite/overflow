/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/**
 * @ngdoc service
 * @name LoginService
 * @module overflow.login
 * @description Dashboard service for retrieving metadata and performing actions on the main dashboard
 **/
var Overflow;
(function (Overflow) {
    var Login;
    (function (Login) {
        var LoginService = (function () {
            /* @ngInject */
            function LoginService($resource, $q, $log) {
                this.$resource = $resource;
                this.$q = $q;
                this.$log = $log;
                this.resource = $resource('/api/v1/login');
            }
            LoginService.prototype.performLogin = function (credentials) {
                var _this = this;
                var deferred = this.$q.defer();
                this.resource.save(null, credentials).$promise.then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    _this.$log.error(error);
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            return LoginService;
        })();
        angular.module('overflow.login').factory('LoginService', LoginService);
    })(Login = Overflow.Login || (Overflow.Login = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=login.service.js.map