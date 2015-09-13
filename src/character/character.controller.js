/**
 * @ngdoc controller
 * @name CharacterController
 * @module overflow.character
 * @description Character dashboard controller
 **/

(function() {
    'use strict';

    angular.module('overflow.character')
        .controller('CharacterController', characterController);

    /* @ngInject */
    function characterController($log, CharacterService, NotificationService) {
        /*jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
            getCharacter();
            vm.items = getItems();
        }

        /////////////////////////////////////////////////////////////////////////////

        function getCharacter() {
            vm.loadingCharacter = true;
            CharacterService.get({id: 1}, characterRetrievalSucceeded, characterRetrievalFailed);

            function characterRetrievalSucceeded(character) {
                vm.character = character;
                NotificationService.success('Character load succeeded!');
                vm.loadingCharacter = false;
            }

            function characterRetrievalFailed(error) {
                $log.error(error);
                NotificationService.error('Character load failed!');
                vm.loadingCharacter = false;
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
})();
