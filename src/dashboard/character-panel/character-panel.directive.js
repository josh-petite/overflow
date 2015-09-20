/**
 * @ngdoc directive
 * @name characterPanel
 * @module overflow.dashboard
 * @description Directive to encapsulate the character panel seen on the left of the dashboard
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard')
        .directive('characterPanel', characterPanel);

    /* ngInject */
    function characterPanel() {
        return {
            scope: {},
            templateUrl: 'src/dashboard/character-panel/character-panel.html',
            controller: 'CharacterPanelController as vm'
        };
    }
})();
