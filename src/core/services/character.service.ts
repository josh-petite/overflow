/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />

/**
 * @ngdoc service
 * @name CharacterService
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/

module Overflow.Core.Services {
    export interface ICharacterService {
        retrieveDashboardDetails(id: number) : ng.IPromise<{}>;
    }

    class CharacterService {
        private resource : any;

        constructor(private $resource:ng.resource.IResourceService,
                    private $q:ng.IQService,
                    private $log:ng.ILogService) {
            this.resource = $resource('/api/v1/characters/:id', {id: '@id'});
        }

        public retrieveDashboardDetails(id: number) : ng.IPromise<{}> {
            var deferred = this.$q.defer();

            this.resource.get({id: id})
                .$promise
                .then(success, failure);

            function success(data:{}) {
                this.$log.info(data);
                deferred.resolve(data);
            }

            function failure(error:{}) {
                this.$log.error(error);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }

    angular.module('overflow.core')
        .factory('CharacterService', CharacterService);
}
