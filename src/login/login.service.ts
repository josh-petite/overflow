/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

/**
 * @ngdoc service
 * @name LoginService
 * @module overflow.login
 * @description Dashboard service for retrieving metadata and performing actions on the main dashboard
 **/

module ov {
    'use strict';

    angular.module('overflow.login')
        .factory('LoginService', LoginService);

    export interface ILoginService {
        performLogin(credentials: {}) : ng.IPromise<{}>;
    }

    class LoginService implements ILoginService {
        private resource : any;

        /* @ngInject */
        constructor(private $resource : ng.resource.IResourceService,
                    private $q : ng.IQService,
                    private $log : ng.ILogService) {
            this.resource = $resource('/api/v1/login');
        }

        performLogin(credentials: {}) : angular.IPromise<{}> {
            var deferred = this.$q.defer();

            this.resource.save(null, credentials)
                .$promise
                .then(loginSuccessful, loginError);

            function loginSuccessful(data : any) {
                deferred.resolve(data);
            }

            function loginError(error : any) {
                this.$log.error(error);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
}
