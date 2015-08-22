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
function characterController($log, CharacterResource, NotificationService) {
    'use strict';

    /*jshint validthis: true */
    var vm = this;

    activate();

    function activate() {
        getCharacter();
        vm.items = getItems();
    }

    /////////////////////////////////////////////////////////////////////////////

    function getCharacter() {
        CharacterResource.get({id: 1}, characterRetrievalSucceeded, characterRetrievalFailed);

        function characterRetrievalSucceeded(character) {
            vm.character = character;
            NotificationService.success('Character load succeeded!');
        }

        function characterRetrievalFailed(error) {
            $log.error(error);
            NotificationService.error('Character load failed!');
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
