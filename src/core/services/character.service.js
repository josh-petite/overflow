/**
 * @ngdoc service
 * @name CharacterService
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .factory('CharacterService', characterService);

    /* @ngInject */
    function characterService($resource, $q, $log) {
        var resource = $resource('/api/v1/characters/:id', {id: '@id'});

        return {
            retrieveDashboardDetails: retrieveDashboardDetails
        };

        ///////////////////////////////////////////////////////////////////////

        function retrieveDashboardDetails(id) {
            var deferred = $q.defer();

            resource.get({id: id})
                .$promise
                .then(success, failure);

            function success(data) {
                $log.info(data);
                deferred.resolve(data);
            }

            function failure(error) {
                $log.error(error);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
})();
