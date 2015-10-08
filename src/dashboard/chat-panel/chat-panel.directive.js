/**
 * @ngdoc directive
 * @name characterPanel
 * @module overflow.dashboard
 * @description Directive to encapsulate the character panel seen on the left of the dashboard
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard').directive('chatPanel', chatPanel);

    function chatPanel() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'src/dashboard/chat-panel/chat-panel.html',
            controller: 'ChatPanelController as vm'
        };
    }
})();
