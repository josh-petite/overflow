/**
 * Created by Josh on 7/6/15.
 */

/**
 * @ngdoc controller
 * @name CharacterController
 * @module overflow.character
 * @description Character dashboard controller
 **/
angular.module('overflow.character')
  .controller('CharacterController', characterController);

/* @ngInject */
function characterController($log, CharacterService) {
  'use strict';

  /*jshint validthis: true */
  var vm = this;

  activate();

  function activate() {
    init();
  }

  /////////////////////////////////////////////////////////////////////////////

  function init() {
    getCharacter();

    vm.items = getItems();
  }

  function getCharacter() {
    var promise = CharacterService.getById(1);

    promise.then(characterRetrievalSucceeded, characterRetrievalFailed);

    function characterRetrievalSucceeded(character) {
      vm.character = character;
    }

    function characterRetrievalFailed(error) {
        $log.error(error);
    }
  }

  function getItems() {
    return [
      {
        name: 'Nuyen',
        quantity: 15
      },
      {
        name: 'Holme 312',
        quantity: 1
      },
      {
        name: 'Leather Jacket',
        quantity: 1
      }
    ];
  }
}
