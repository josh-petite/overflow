/**
 * @ngdoc service
 * @name CharacterResource
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/

(function() {
    'use strict';

    angular.module('overflow.character')
        .factory('CharacterResource', characterResource);

    /* @ngInject */
    function characterResource($resource) {
        return $resource('/api/v1/characters/:id', {id: '@id'});
    }
})();
