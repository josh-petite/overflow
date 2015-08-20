/**
 * Created by Josh on 8/19/15.
 */

/**
 * @ngdoc service
 * @name CharacterService
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/

angular.module('overflow.character')
  .factory('CharacterService', characterService);

/* @ngInject */
function characterService($resource) {
  "use strict";

  return {
    getById: getById
  };

  function getById(id) {
    var api = $resource('/api/v1/characters/:id', {
      id: '@id'
    });

    return api.get({id: id}).$promise;
  }
}