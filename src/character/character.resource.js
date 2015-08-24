/**
 * @ngdoc service
 * @name CharacterResource
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/

angular.module('overflow.character')
    .factory('CharacterResource', characterResource);

/* @ngInject */
function characterResource($resource) {
    'use strict';

    return $resource('/api/v1/characters/:id', {id: '@id'});
}
