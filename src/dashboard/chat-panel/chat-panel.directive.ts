/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name characterPanel
 * @module overflow.dashboard
 * @description Directive to encapsulate the character panel seen on the left of the dashboard
 **/

module Overflow.Dashboard {
    class ChatPanelDirective implements ng.IDirective {
        public templateUrl : string;
        public controller : string;
        public scope : {};

        constructor() {
            this.templateUrl = 'src/dashboard/chat-panel/chat-panel.html';
            this.controller = 'ChatPanelController';
        }

        public static Factory() {
            return () => {
                return new ChatPanelDirective();
            };
        }
    }

    angular.module('overflow.dashboard')
        .directive('chatPanel', ChatPanelDirective.Factory());
}
