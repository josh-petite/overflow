/**
 * @ngdoc module
 * @name overflow.character
 * @module overflow
 * @description Primary module for character-specific interactions
 **/

(function() {
    'use strict';

    angular.module('overflow.character', ['overflow.core']);

    angular.module('overflow.character').config(characterRoutes);

    /* @ngInject */
    function characterRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('character', {
                url: '/character',
                templateUrl: 'src/character/character.html',
                controller: 'CharacterController as vm'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
