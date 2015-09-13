/**
 * @ngdoc service
 * @name CharacterService
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/

(function() {
    'use strict';

    angular.module('overflow.character')
        .factory('CharacterService', characterService);

    /* @ngInject */
    function characterService($resource) {
        return $resource('/api/v1/characters/:id', {id: '@id'});
    }
})();
